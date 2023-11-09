type BasicStation = {
  stationId: string;
  name: string;
  lines: string[];
  notes?: string;
};

export const statusOptions = [
  "visited",
  "passed through",
  "changed",
  "none",
] as const;
export type Status = (typeof statusOptions)[number];

type InactiveStatus = Extract<Status, "none">;
type ActiveStatus = Exclude<Status, "none">;

type StationInteraction =
  | {
      status: InactiveStatus;
    }
  | {
      status: ActiveStatus;
      rating: 1 | 2 | 3 | 4 | 5;
      dateOfFirstVisit: Date;
      purposeOfVisit: string;
    };

export type Station = BasicStation & StationInteraction;

export interface BasicLine {
  line_id: string;
  name: string;
  colour: string;
  stations: string[];
}
export interface Line extends BasicLine {
  status: {
    visited: number;
  };
}
