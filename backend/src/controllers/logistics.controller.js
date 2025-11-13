import { pool } from "../db.js";

// Obtener todas las órdenes logísticas
export const getOrders = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM logistics_orders ORDER BY id DESC");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener órdenes logísticas" });
  }
};

// Crear nueva orden
export const createOrder = async (req, res) => {
  const { cliente, direccion, estado } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO logistics_orders (cliente, direccion, estado) VALUES ($1, $2, $3) RETURNING *",
      [cliente, direccion, estado]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear la orden" });
  }
};
