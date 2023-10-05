import { NextRequest, NextResponse } from 'next/server';
import {db, connectDatabase} from '@/lib/db/db'

export async function GET() {
  try {
    await connectDatabase()
    const { rows } = await db.query('SELECT * FROM lines');
    return NextResponse.json({lines: rows}, {status : 200})
  } catch (error) {
    console.error('Error executing query:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, {status : 500})
  }
};

export async function POST(req : NextRequest){
  try {
    await connectDatabase()
    const {rows} = await db.query(`INSERT INTO lines VALUES ($1, $2, $3) RETURNING *`, ['sfr38', 'central', 'red'])
    return NextResponse.json({lines: rows}, {status : 200})
  } catch (error) {
    console.error('Error executing query:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, {status : 500})
  }
}
