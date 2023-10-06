"use client";

import { columns } from "./columns";
import { Station } from "@/types/globals.types";
import { DataTable } from "./data-table";
import { useEffect, useState } from "react";

// TODO : use getStaticProps

export default function Stations() {
  const [stations, setStations] = useState<Station[]>([]);

  useEffect(() => {
    const getStations = async () => {
      const response = await fetch(
        "http://localhost:3000/api/user-data?id=34446"
      );
      const jsonBody: { stations: Station[] } = await response.json();
      setStations(jsonBody.stations);
    };

    getStations();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={stations} />
    </div>
  );
}
