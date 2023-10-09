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
          <TableCell>
            <>{station.name}</>
          </TableCell>
          <TableCell>
            <>{station.status}</>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
