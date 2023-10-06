import { connectDatabase, db } from "@/lib/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const user_id = searchParams.get("id");

  try {
    await connectDatabase();
    const { rows } = await db.query(
      `SELECT * FROM user_data
      JOIN stations ON user_data.station_id = stations.station_id
      WHERE user_id = $1`,
      [user_id]
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
