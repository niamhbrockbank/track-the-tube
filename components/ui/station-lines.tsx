import { Line, Station } from "@/types/globals.types";
import { TableRow, TableCell } from "./table";
import StatusSelect from "./status-select";
import { forwardRef } from "react";

export const StationLines = forwardRef(
  (
    props: {
      stations: Station[];
      setStations: React.Dispatch<React.SetStateAction<Station[]>>;
      line: Line;
    },
    ref
  ) => {
    const { stations, setStations, line } = { ...props };
    const stationsOnLine = stations.filter((s) =>
      line.stations.includes(s.stationId)
    );
    const alphabeticalStations = stationsOnLine.sort((a, b) =>
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
