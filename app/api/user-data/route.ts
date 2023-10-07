import { db } from "@/lib/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const user_id = searchParams.get("id");

  try {
    const { rows } = await db.query(
      `SELECT * FROM user_data
      JOIN stations ON user_data.station_id = stations.station_id
      JOIN users ON user_data.user_id = users.user_id
      WHERE users.user_id = $1`,
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
          stationId: station_id,
          name: name
            .replace("Rail Station", "")
            .replace("DLR Station", "")
            .replace("Underground Station", ""),
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

export async function POST(req: NextRequest) {
  const jsonBody = await req.json();
  const { user_id, user_name } = jsonBody;

  try {
    // Insert new user into db
    const { rows } = await db.query(
      `INSERT INTO users VALUES ($1, $2) RETURNING *`,
      [user_id, user_name]
    );

    // Get all stations from db
    const response = await db.query(`SELECT DISTINCT station_id FROM stations`);
    const stations = response.rows;

    stations.map((s: { station_id: string }) => {
      db.query(`INSERT INTO user_data VALUES ($1, $2)`, [
        user_id,
        s.station_id,
      ]);
    });

    return NextResponse.json({ user: rows[0] }, { status: 200 });
  } catch (error) {
    console.error("Error executing query:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  const jsonBody = await req.json();
  console.log(jsonBody);
  const { station_id, status } = jsonBody;

  try {
    const { rows } = await db.query(
      `UPDATE user_data 
      SET status = $1
      WHERE user_id = 34446 
      AND station_id = $2
      RETURNING *`,
      [status, station_id]
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
