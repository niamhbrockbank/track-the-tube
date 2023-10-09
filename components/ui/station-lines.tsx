import { Station } from "@/types/globals.types";
import { TableRow, TableCell } from "./table";

interface IProps {
  stations: Station[];
}

export default function StationLines({ stations }: IProps): JSX.Element {
  return (
    <>
      {stations.map((station) => (
        <TableRow key={station.stationId} data-state={station}>
          {Object.values(station).map((cell, i) => (
            <TableCell key={i}>
              <>{cell}</>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}
