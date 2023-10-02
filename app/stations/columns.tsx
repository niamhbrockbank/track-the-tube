"use client"

import { ColumnDef } from "@tanstack/react-table"
import {Station } from "@/types/globals.types"

/**
 * Define the core of what the table will look like
 * Define how the data will be displayed, formatted, sorted and filtered
 */
export const columns: ColumnDef<Station>[] = [
    {accessorKey : "name", header : "Station"},
    {accessorKey: 'status', header:"Status"}, 
    {accessorKey : "notes", header : "Notes"}
]
