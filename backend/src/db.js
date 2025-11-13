import pkg from "pg";
const { Pool } = pkg;

import dotenv from "dotenv";
dotenv.config();

// Creamos un "pool" de conexiones
export const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Verificamos la conexión
(async () => {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("📦 Base de datos conectada:", res.rows[0].now);
  } catch (err) {
    console.error("❌ Error conectando a la base de datos:", err.message);
  }
})();
