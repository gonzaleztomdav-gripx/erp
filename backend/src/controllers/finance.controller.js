import { pool } from "../db.js";

// Generar un resumen financiero básico
export const getFinancialReport = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        SUM(CASE WHEN tipo = 'ingreso' THEN monto ELSE 0 END) AS total_ingresos,
        SUM(CASE WHEN tipo = 'egreso' THEN monto ELSE 0 END) AS total_egresos,
        (SUM(CASE WHEN tipo = 'ingreso' THEN monto ELSE 0 END) -
         SUM(CASE WHEN tipo = 'egreso' THEN monto ELSE 0 END)) AS balance
      FROM accounting_entries;
    `);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al generar el reporte financiero" });
  }
};
