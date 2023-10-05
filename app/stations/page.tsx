"use client"

import { columns } from "./columns";
import { Station } from "@/types/globals.types";
import { DataTable } from "./data-table";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Stations() {
  const [stations, setStations] = useState<Station[]>([])

  useEffect(() => {
    async function getStations(){
      const response : any = await axios.get('http://localhost:3000/api/stations')
      const rawStations = response.stations.map((s : {id : string, commonName : string} ) => {return {...s, status: 'none', lines: [''] }})
      console.log(rawStations)
      setStations(rawStations)
    }

    getStations()
  }, [])


  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={stations} />
    </div>
  );
}
