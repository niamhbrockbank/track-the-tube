import { Client } from "pg";

const db = new Client({
  connectionString: process.env.DB_URL,
  ssl: false,
});

async function connectDatabase() {
  try {
    await db.connect();
    console.log("Connected to PostgreSQL database");
  } catch (error) {
    console.error("Error connecting to PostgreSQL database:", error);
  }
}

connectDatabase();

export { db, connectDatabase };
