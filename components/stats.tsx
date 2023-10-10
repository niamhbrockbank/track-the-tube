import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Station } from "@/types/globals.types";
import { Activity, TrainFront } from "lucide-react";

interface IProps {
  stations: Station[];
}

export default function Stats({ stations }: IProps) {
  const total = stations.length;
  const visited = stations.filter((s) => s.status === "visited").length;
  const changed = stations.filter((s) => s.status === "changed").length;
  const passed = stations.filter((s) => s.status === "passed through").length;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Stations</CardTitle>
          <TrainFront color="#a6aeba" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{total}</div>
          <p className="text-xs text-muted-foreground">Visit them all!</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">No. Visited</CardTitle>
          <TrainFront color="#a6aeba" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{visited}</div>
          <p className="text-xs text-muted-foreground">+3% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">No. Changed At</CardTitle>
          <Activity color="#a6aeba" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{changed}</div>
          <p className="text-xs text-muted-foreground">+19% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            No. Passed Through
          </CardTitle>
          <Activity color="#a6aeba" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{passed}</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
