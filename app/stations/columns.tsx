"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Line } from "@/types/globals.types";
import { CollapsibleTrigger } from "@/components/ui/collapsible";
import { Gauge } from "@/components/ui/gauge";
import { ChevronsUpDown } from "lucide-react";

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
      const status = row.getValue("status");

      return (
        <div className="flex flex-row items-center justify-center gap-4">
          {/* @ts-ignore */}
          <Gauge value={status} size="small" showValue={true} />
          <CollapsibleTrigger>
            <ChevronsUpDown className="h-6 w-6" />
          </CollapsibleTrigger>
        </div>
      );
    },
  },
];
