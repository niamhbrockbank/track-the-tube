import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "./badge";

interface IProps {
  status: "visited" | "passed through" | "changed" | "none";
}

export default function StatusSelect({ status }: IProps) {
  const variant = status === "passed through" ? "passedThrough" : status;
  const statusOptions = ["visited", "passed through", "changed", "none"].filter(
    (o) => o !== status
  );

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={<Badge variant={variant}>{status}</Badge>} />
      </SelectTrigger>
      <SelectContent>
        {statusOptions.map((s) => (
          <SelectItem value={s}>
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
