"use client";

import { BasicLine, Line, Station } from "@/types/globals.types";

import { useEffect, useState } from "react";
import Stats from "@/components/stats";
import NavBar from "@/components/nav-bar";
import { User } from "firebase/auth";
import { DataTable } from "@/components/stations/data-table";
import { columns } from "@/components/stations/columns";

interface Props {
  user: User;
}

export default function Stations({ user }: Props) {
  const [stations, setStations] = useState<Station[]>([]);
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    const fetchStations = async () => {
      const token = user.isAnonymous ? "34446" : await user.getIdToken();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user-data?token=${token}`
      );
      const jsonBody: { stations: Station[] } = await response.json();
      const alphabeticalStations = jsonBody.stations.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setStations(alphabeticalStations);
    };

    fetchStations();
  }, [user]);

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
      {/* {user.isAnonymous && (
        <Alert className="bg-yellow-100 rounded-none flex items-center justify-between">
          <AlertDescription>
            Sign up or login to save your changes.
          </AlertDescription>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500" onClick={handleConvertAnonToAccount}>
            Log in
          </Button>
        </Alert>
      )} */}
      <NavBar />
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold tracking-tight">
          {!user.isAnonymous && <>{user.displayName?.split(" ")[0]}&#39;s</>}{" "}
          Dashboard
        </h2>

        <div className="space-y-2 mt-8">
          <Stats stations={stations} />
          <DataTable
            columns={columns}
            data={lines}
            stations={stations}
            setStations={setStations}
          />
        </div>
      </div>
    </>
  );
}
