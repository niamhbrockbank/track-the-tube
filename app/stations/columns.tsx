"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Station } from "@/types/globals.types";
import StatusSelect from "@/components/ui/status-select";
import { CollapsibleTrigger } from "@/components/ui/collapsible";

/**
 * Define the core of what the table will look like
 * Define how the data will be displayed, formatted, sorted and filtered
 */
export const columns: ColumnDef<Station>[] = [
  {
    accessorKey: "name",
    header: "Station",
    cell: ({ row }) => (
      <CollapsibleTrigger>
        <div>{row.getValue("name")}</div>
      </CollapsibleTrigger>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => {
      // @ts-ignore
      return <StatusSelect station={row.original} />;
    },
  },
  // {
  //   accessorKey: "notes",
  //   header: "Notes",
  //   cell: ({ row }) => {
  //     const note: string = row.getValue("notes");
  //     if (!note) return;

  //     if (note.length > 10) {
  //       return (
  //         <div className="text-right font-medium">{`${note.slice(
  //           0,
  //           9
  //         )}...`}</div>
  //       );
  //     }

  //     return <div className="text-right font-medium">{note}</div>;
  //   },
  // },
];
