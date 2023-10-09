import { db } from "@/lib/db/db";

export default async function mapStations(line_id: string) {
  const { rows: stationRows } = await db.query(
    `SELECT station_id FROM stations_on_lines WHERE line_id = $1`,
    [line_id]
  );

  return stationRows;
}
