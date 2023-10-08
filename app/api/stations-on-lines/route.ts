import { db } from "@/lib/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const jsonBody = await req.json();
  const { stationId, lineId } = jsonBody;

  try {
    const { rows } = await db.query(
      `INSERT INTO stations_on_lines VALUES ($1, $2) RETURNING *`,
      [lineId, stationId]
    );
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    console.error("Error executing query:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
