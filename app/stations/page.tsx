import { columns } from "./columns";
import { Station } from "@/types/globals.types";
import { DataTable } from "./data-table";
import stations from "@/stations.json";
// import fs from "fs";

async function getData(): Promise<Station[]> {
  const data: Station[] = stations;
  return data;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
