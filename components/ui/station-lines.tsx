import { Station } from "@/types/globals.types";
import { TableRow, TableCell } from "./table";
import StatusSelect from "./status-select";
import { forwardRef } from "react";

export const StationLines = forwardRef(
  (
    props: {
      stations: Station[];
    },
    ref
  ) => {
    const { stations } = { ...props };
    const alphabeticalStations = stations.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    return (
      <>
        {alphabeticalStations.map((station) => (
          <TableRow key={station.stationId} data-state={station} {...props}>
            <TableCell>
              <>{station.name}</>
            </TableCell>
            <TableCell>
              <StatusSelect station={station} />
            </TableCell>
          </TableRow>
        ))}
      </>
    );
  }
);
