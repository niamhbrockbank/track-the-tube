type BasicStation = {
  stationId: string;
  name: string;
  lines: string[];
  notes?: string;
};

type StationInteraction =
  | {
      status: "none";
    }
  | {
      status: "visited" | "passed through" | "changed";
      rating: 1 | 2 | 3 | 4 | 5;
      dateOfFirstVisit: Date;
      purposeOfVisit: string;
    };

export type Station = BasicStation & StationInteraction;

export interface BasicLine {
  line_id: string;
  name: string;
  colour: string;
}
export interface Line extends BasicLine {
  status: number;
}
