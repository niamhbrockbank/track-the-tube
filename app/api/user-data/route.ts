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

    const userData = {
      userId: rows[0].user_id,
      userName: rows[0].user_name,
      stations: rows.map((r) => {
        const {
          station_id,
          name,
          status,
          rating,
          date_of_vist,
          purpose_of_visit,
        } = r;
        return {
          id: station_id,
          name,
          status,
          rating,
          dateOfFirstVisit: date_of_vist,
          purposeOfVisit: purpose_of_visit,
        };
      }),
    };

    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    console.error("Error executing query:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
