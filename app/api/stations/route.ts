import { connectDatabase, db } from "@/lib/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        await connectDatabase()
        const {rows} = await db.query('SELECT * FROM stations')
        await db.end()
        return NextResponse.json({stations : rows}, {status : 200})
    } catch (error) {
        console.error('Error executing query:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, {status : 500})
    }
}

export async function POST(req : NextRequest){
    const jsonBody = await req.json()
    const {id, commonName} = jsonBody;

    try {
      await connectDatabase()
      const {rows} = await db.query(`INSERT INTO stations VALUES ($1, $2) RETURNING *`, [id, commonName])
      await db.end()
      return NextResponse.json({stations: rows}, {status : 200})
    } catch (error) {
      console.error('Error executing query:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, {status : 500})
    }
  }