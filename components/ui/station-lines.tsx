import { Station } from "@/types/globals.types";
import { TableRow, TableCell } from "./table";
import StatusSelect from "./status-select";
import { forwardRef } from "react";

export const StationLines = forwardRef(
  (
    props: {
      stations: Station[];
      setStations: React.Dispatch<React.SetStateAction<Station[]>>;
    },
    ref
  ) => {
    const { stations, setStations } = { ...props };
    const alphabeticalStations = stations.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    return (
      <>
        {alphabeticalStations.map((station) => (
          <TableRow
            key={station.stationId}
            data-state={station}
            className="text-slate-500"
            {...props}
          >
            <TableCell>
              <>{station.name}</>
            </TableCell>
            <TableCell className="w-52">
              <StatusSelect
                station={station}
                stations={stations}
                setStations={setStations}
              />
            </TableCell>
          </TableRow>
        ))}
      </>
    );
  }
);

StationLines.displayName = "StationLines";
