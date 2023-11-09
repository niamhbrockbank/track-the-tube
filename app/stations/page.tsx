import Stations from "@/components/stations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Track your progress across tube stations.",
};

export default function Dashboard() {
  return <Stations />;
}
