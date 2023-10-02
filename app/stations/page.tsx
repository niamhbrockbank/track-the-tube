import {columns } from "./columns"
import {Station } from "@/types/globals.types"
import { DataTable } from "./data-table"

async function getData(): Promise<Station[]> {
  // Fetch data from your API here.
  return [
    {
      id: "three",
      name: "Victoria",
      lines : ['Victoria'],
      status : 'none'
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
