"use client"

import { ColumnDef } from "@tanstack/react-table"
import {Station } from "@/types/globals.types"
import stations from "@/stations.json"

/**
 * Define the core of what the table will look like
 * Define how the data will be displayed, formatted, sorted and filtered
 */
export const columns: ColumnDef<Station>[] = stations
