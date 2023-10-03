"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Station } from "@/types/globals.types";
import { Badge } from "@/components/ui/badge";

/**
 * Define the core of what the table will look like
 * Define how the data will be displayed, formatted, sorted and filtered
 */
export const columns: ColumnDef<Station>[] = [
  { accessorKey: "name", header: "Station" },
  {
    accessorKey: "status",
    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => (
      <Badge variant="outline">{row.getValue("status")}</Badge>
    ),
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: ({ row }) => {
      const note: string = row.getValue("notes");
      if (!note) return;

      if (note.length > 10) {
        return (
          <div className="text-right font-medium">{`${note.slice(
            0,
            9
          )}...`}</div>
        );
      }

      return <div className="text-right font-medium">{note}</div>;
    },
  },
];
