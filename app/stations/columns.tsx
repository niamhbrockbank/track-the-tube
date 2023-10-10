"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Line } from "@/types/globals.types";
import { CollapsibleTrigger } from "@/components/ui/collapsible";
import { Gauge } from "@/components/ui/gauge";
import { ChevronsUpDown } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/**
 * Define the core of what the table will look like
 * Define how the data will be displayed, formatted, sorted and filtered
 */
export const columns: ColumnDef<Line>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center">Status</div>,
    cell: ({ row }) => {
      const numStationsVisited = row.original.status.visited;
      const numStations = row.original.stations.length;
      const status = Math.round((numStationsVisited / numStations) * 100);

      return (
        <div className="flex flex-row items-center justify-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {/* @ts-ignore */}
                <Gauge value={status} size="small" showValue={true} />
              </TooltipTrigger>
              <TooltipContent>
                <p>{`${numStationsVisited} / ${numStations}`}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <CollapsibleTrigger>
            <ChevronsUpDown className="h-6 w-6" />
          </CollapsibleTrigger>
        </div>
      );
    },
  },
];
