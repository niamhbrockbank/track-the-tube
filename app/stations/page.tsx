"use client";

import { columns } from "./columns";
import { BasicLine, Line, Station } from "@/types/globals.types";
import { DataTable } from "./data-table";
import { useEffect, useState } from "react";
import Stats from "@/components/stats";
import NavBar from "@/components/nav-bar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { User } from "firebase/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  user: User;
}

export default function Stations({ user }: Props) {
  const [stations, setStations] = useState<Station[]>([]);
  const [lines, setLines] = useState<Line[]>([]);
  const userId = (user && user.uid) || 34446;

  useEffect(() => {
    const token = user.getIdToken();

    const fetchStations = async () => {
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
      {!user && (
        <Alert className="bg-yellow-100 rounded-none flex items-center justify-between">
          <AlertDescription>
            Sign up or login to save your changes.
          </AlertDescription>
          <Button>
            <Link href="/">Log in</Link>
          </Button>
        </Alert>
      )}
      <NavBar />

      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold tracking-tight">
          {user && <>{user.displayName?.split(" ")[0]}&#39;s</>} Dashboard
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
