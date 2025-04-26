// src/db.js
import mysql from "mysql2/promise";
import pkg from "pg";
const { Client } = pkg;

// Configuración de MySQL
export const mysqlConnection = await mysql.createConnection({
  host: "mysql-prd-uks.mysql.database.azure.com",
  user: "alopez66",
  password: "Dasa1819axd",
  database: "mysql", // o el nombre real de tu DB
  ssl: { rejectUnauthorized: false },
});

// Configuración de PostgreSQL
export const pgClient = new Client({
  host: "postgresql-prd-uks.postgres.database.azure.com",
  user: "alopez66",
  password: "Dasa1819axd",
  database: "postgres",
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

await pgClient.connect();
