import { NextResponse } from 'next/server';
import {db, connectDatabase} from '@/lib/db/db'

export async function GET() {
  try {
    await connectDatabase()
    const { rows } = await db.query('SELECT * FROM lines');
    return NextResponse.json({stations: rows}, {status : 200})
  } catch (error) {
    console.error('Error executing query:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, {status : 500})
  }
};
