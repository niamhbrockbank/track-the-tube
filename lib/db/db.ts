import { Client } from 'pg';

const db = new Client({
  user: process.env.DB_USER,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
});

async function connectDatabase() {
  try {
    await db.connect();
    console.log('Connected to PostgreSQL database');
  } catch (error) {
    console.error('Error connecting to PostgreSQL database:', error);
  }
}

export { db, connectDatabase };
