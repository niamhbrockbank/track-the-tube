import { Station } from "@/types/globals.types";
import { TableRow, TableCell } from "./table";
import StatusSelect from "./status-select";
import { forwardRef } from "react";

export const StationLines = forwardRef(
  (props: { stations: Station[] }, ref) => {
    const { stations } = { ...props };
    return (
      <>
        {stations.map((station) => (
          <TableRow key={station.stationId} data-state={station} {...props}>
            <TableCell>
              <>{station.name}</>
            </TableCell>
            <TableCell>
              <>{station.status}</>
              {/* <StatusSelect station={station} /> */}
            </TableCell>
          </TableRow>
        ))}
      </>
    );
  }
);
