"use client"

import { columns } from "./columns";
import { Station } from "@/types/globals.types";
import { DataTable } from "./data-table";
import { useEffect, useState } from "react";

// TODO : use getStaticProps

export default function Stations() {
  const [data, setData] = useState<Station[]>([{id: 'easy', name : 'not est', status : 'none', lines : ['victoria']}])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/stations')
      .then((res) => res.json())
      .then((data) => {
        setData(data.stations.map((d : {id : string, name : string}) => {return {...d, status : 'none', lines : ['victoria']}}))
        setLoading(false)
      })
  }, [])

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}