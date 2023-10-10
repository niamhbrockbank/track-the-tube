"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Line } from "@/types/globals.types";
import { CollapsibleTrigger } from "@/components/ui/collapsible";
import { Gauge } from "@/components/ui/gauge";

/**
 * Define the core of what the table will look like
 * Define how the data will be displayed, formatted, sorted and filtered
 */
export const columns: ColumnDef<Line>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <CollapsibleTrigger>
        <div>{row.getValue("name")}</div>
      </CollapsibleTrigger>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center">Status</div>,
    cell: ({ row }) => {
      const status = row.getValue("status");
      // @ts-ignore
      return <Gauge value={status} size="small" showValue={true} />;
    },
  },
];
