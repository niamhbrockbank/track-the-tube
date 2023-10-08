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

  function updateStatus(value: Status) {
    axios.put(
      "http://localhost:3000/api/user-data",
      { stationId, status: value },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <Select onValueChange={(v: Status) => updateStatus(v)}>
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
