import { db } from "@/lib/db/db";

export default async function getLines() {
  const response = await db.query("SELECT * FROM lines");
  return response;
}
