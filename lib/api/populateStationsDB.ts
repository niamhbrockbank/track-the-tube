import tubeStations from "../../tubeStationsFromAPI.json";
import dlrStations from "../../dlrStationsFromAPI.json";
import overgroundStations from "../../overgroundStationsFromAPI.json";

// Packages
import axios from "axios";

export default async function populateStationsDB() {
  for (const station of tubeStations) {
    axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/stations`,
      { ...station },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  for (const station of dlrStations) {
    axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/stations`,
      { ...station },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  for (const station of overgroundStations) {
    axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/stations`,
      { ...station },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

populateStationsDB();
