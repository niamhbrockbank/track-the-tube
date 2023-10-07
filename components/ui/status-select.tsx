import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "./badge";
import { useState } from "react";

type Status = "visited" | "passed through" | "changed" | "none";
interface IProps {
  status: Status;
}

export default function StatusSelect({ status }: IProps) {
  const [newStatus, setNewStatus] = useState<Status>("none");
  const variant = status === "passed through" ? "passedThrough" : status;
  const statusOptions = ["visited", "passed through", "changed", "none"].filter(
    (o) => o !== status
  );

  return (
    <Select onValueChange={(value: Status) => setNewStatus(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={<Badge variant={variant}>{status}</Badge>} />
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
