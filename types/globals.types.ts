type BasicStation = {
  stationId: string;
  name: string;
  lines: string[];
  notes?: string;
};

type InactiveStatus = "none";
type ActiveStatus = "visited" | "passed through" | "changed";

export type Status = InactiveStatus | ActiveStatus;

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
