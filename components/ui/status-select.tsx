import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "./badge";
import axios from "axios";
import { Station } from "@/types/globals.types";

export type Status = "visited" | "passed through" | "changed" | "none";
interface Props {
  station: Station;
  stations: Station[];
  setStations: React.Dispatch<React.SetStateAction<Station[]>>;
}

export default function StatusSelect({
  station,
  stations,
  setStations,
}: Props) {
  const { stationId, status } = station;

  const statusOptions = ["visited", "passed through", "changed", "none"];

  function updateStatus(value: Status) {
    const updatedStation = { ...station, status: value };
    const otherStations = stations.filter((s) => s.stationId !== stationId);

    // @ts-ignore
    setStations([...otherStations, updatedStation]);

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
    <Select onValueChange={(v: Status) => updateStatus(v)}>
      <SelectTrigger>
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
        {statusOptions.map((s) => (
          <SelectItem value={s} key={s}>
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
