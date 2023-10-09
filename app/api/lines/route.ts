import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/db";
import getLines from "@/lib/api/lines/getLines";

export async function GET() {
  try {
    const { rows } = await getLines();
    return NextResponse.json({ lines: rows }, { status: 200 });
  } catch (error) {
    console.error("Error executing query:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { rows } = await db.query(
      `INSERT INTO lines VALUES ($1, $2, $3) RETURNING *`,
      ["sfr38", "central", "red"]
    );
    return NextResponse.json({ lines: rows }, { status: 200 });
  } catch (error) {
    console.error("Error executing query:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
