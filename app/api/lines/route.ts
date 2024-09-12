import { NextResponse } from "next/server";
import { db } from "@/lib/db/db";
import getLines from "@/lib/api/lines/getLines";
import mapStations from "@/lib/api/lines/mapStations";

export async function GET() {
  try {
    const { rows } = await getLines();

    // Get stations on each line
    const lines = [];
    for (const row of rows) {
      const stations = await mapStations(row.line_id);
      lines.push({ ...row, stations });
    }

    return NextResponse.json({ lines }, { status: 200 });
  } catch (error) {
    console.error("Error executing query:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST() {
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
