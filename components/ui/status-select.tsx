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
  const [shownStatus, setShownStatus] = useState<Status>("none");

  useEffect(() => {
    setShownStatus(status);
  }, []);

  const statusOptions = ["visited", "passed through", "changed", "none"].filter(
    (o) => o !== shownStatus
  );

  function updateStatus(value: Status) {
    setShownStatus(value);

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
              variant={
                shownStatus === "passed through" ? "passedThrough" : shownStatus
              }
            >
              {shownStatus}
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
