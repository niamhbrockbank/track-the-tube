import { Client } from "pg";

const db = new Client({
  connectionString: process.env.POSTGRES_URL,
  ssl: process.env.NODE_ENV === "production",
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

export { connectDatabase, db };
