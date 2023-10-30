"use client";

import { columns } from "./columns";
import { BasicLine, Line, Station } from "@/types/globals.types";
import { DataTable } from "./data-table";
import { useEffect, useState } from "react";
import Stats from "@/components/stats";
import NavBar from "@/components/nav-bar";
import { User } from "firebase/auth";

interface Props {
  user: User;
}

export default function Stations({ user }: Props) {
  const [stations, setStations] = useState<Station[]>([]);
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    const fetchStations = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user-data?id=34446`
      );
      const jsonBody: { stations: Station[] } = await response.json();
      const alphabeticalStations = jsonBody.stations.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setStations(alphabeticalStations);
    };

    fetchStations();
    console.log(user);
  }, []);

  useEffect(() => {
    const fetchLines = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/lines`);
      const jsonBody = await res.json();
      const { lines: newLines } = jsonBody;

      setLines(
        newLines.map((l: BasicLine) => {
          const numStationsVisited = stations.filter(
            (s) => s.status === "visited" && l.stations.includes(s.stationId)
          ).length;

          return { ...l, status: { visited: numStationsVisited } };
        })
      );
    };
    fetchLines();
  }, [stations]);

  return (
    <>
      <NavBar />
      <div className="container mx-auto py-10">
        <Stats stations={stations} />
        <DataTable
          columns={columns}
          data={lines}
          stations={stations}
          setStations={setStations}
        />
      </div>
    </>
  );
}
