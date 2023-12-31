import { db } from "@/lib/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const { rows } = await db.query("SELECT * FROM stations");
    return NextResponse.json({ stations: rows }, { status: 200 });
  } catch (error) {
    console.error("Error executing query:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const jsonBody = await req.json();
  const { id, commonName } = jsonBody;

  try {
    const { rows } = await db.query(
      `INSERT INTO stations VALUES ($1, $2) RETURNING *`,
      [id, commonName]
    );
    return NextResponse.json({ stations: rows }, { status: 200 });
  } catch (error) {
    console.error("Error executing query:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
