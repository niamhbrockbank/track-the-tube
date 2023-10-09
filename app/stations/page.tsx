"use client";

import { columns } from "./columns";
import { BasicLine, Line, Station } from "@/types/globals.types";
import { DataTable } from "./data-table";
import { useEffect, useState } from "react";

export default function Stations() {
  const [stations, setStations] = useState<Station[]>([]);
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    const fetchStations = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user-data?id=34446`
      );
      const jsonBody: { stations: Station[] } = await response.json();
      setStations(jsonBody.stations);
    };

    fetchStations();
  }, []);

  useEffect(() => {
    const fetchLines = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/lines`);
      const jsonBody = await res.json();
      const { lines: newLines } = jsonBody;

      setLines(
        newLines.map((l: BasicLine) => {
          return { ...l, status: 0 };
        })
      );
    };
    fetchLines();
  }, [stations]);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={stations} />
    </div>
  );
}
