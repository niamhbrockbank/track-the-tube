import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "./badge";
import { useEffect, useState } from "react";
import axios from "axios";
import { Station } from "@/types/globals.types";

export type Status = "visited" | "passed through" | "changed" | "none";
interface IProps {
  station: Station;
}

export default function StatusSelect({ station }: IProps) {
  const { stationId, status } = station;

  const statusOptions = ["visited", "passed through", "changed", "none"].filter(
    (o) => o !== status
  );

  function updateStatus(
    value: "visited" | "passed through" | "changed" | "none"
  ) {
    async function updateInDB() {
      await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user-data`,
        { stationId, status: value },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    updateInDB();
  }

  return (
    <Select
      onValueChange={(v: "visited" | "passed through" | "changed" | "none") =>
        updateStatus(v)
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue
          placeholder={
            <Badge
              variant={status === "passed through" ? "passedThrough" : status}
            >
              {status}
            </Badge>
          }
        />
      </SelectTrigger>
      <SelectContent>
        {statusOptions.map((s, i) => (
          <SelectItem value={s} key={i}>
            {/* @ts-ignore */}
            <Badge variant={s === "passed through" ? "passedThrough" : s}>
              {s}
            </Badge>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
