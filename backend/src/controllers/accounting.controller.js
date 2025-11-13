import { pool } from "../db.js";

// Listar asientos contables
export const getEntries = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM accounting_entries ORDER BY id DESC");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los asientos contables" });
  }
};

// Crear asiento contable
export const createEntry = async (req, res) => {
  const { descripcion, monto, tipo } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO accounting_entries (descripcion, monto, tipo) VALUES ($1, $2, $3) RETURNING *",
      [descripcion, monto, tipo]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear asiento contable" });
  }
};
