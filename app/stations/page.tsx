import { columns } from "./columns";
import { Station } from "@/types/globals.types";
import { DataTable } from "./data-table";
import stations from "@/stations.json";
// import fs from "fs";

async function getData(): Promise<Station[]> {
  // Fetch data from your API here.

  // let stations: Station[] = [];

  // await fs.readFile("./stationList.csv", "utf8", (err, data) => {
  //   if (err) throw err;

  //   const rawStationNames = data.split(",");
  //   const stationNames = rawStationNames.filter((n) => n !== "\r\n");

  //   stations = stationNames.map((n) => {
  //     return {
  //       id: crypto.randomUUID(),
  //       name: n.slice(0, -2),
  //       lines: [],
  //       status: "none",
  //     };
  //   });

  //   fs.writeFile("./stations.json", JSON.stringify(stations), "utf8", (err) => {
  //     if (err) throw err;
  //     console.log("file saved");
  //   });

  //   console.log(stations);
  // });
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
