// Notes taken from the techforum answer at https://techforum.tfl.gov.uk/t/find-all-tfl-stoppoints/1324/10

// Fetch the tube line names from
// https://api.tfl.gov.uk/line/mode/tube/status

// Loop through the stoppoints for each of the lines for the station names
// i.e. for Bakerloo use https://api.tfl.gov.uk/line/bakerloo/stoppoints
// Where bakerloo is the id for the tube line given from the first API call

// OR
/**
 * Get the stoppoints by mode rather than line then filter by stopType
 */

import axios from "axios";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
const app_id = process.env.APP_ID;
const app_key = process.env.APP_KEY;

const fetchData = async (mode: any) => {
  let result = await axios.get(`https://api.tfl.gov.uk/StopPoint/Mode/${mode}`);
  //end of url ?app_id=${app_id}&app_key=${app_key}
  const stopPoints = result.data.stopPoints;
  const stopType =
    mode === "overground" ? "NaptanRailStation" : "NaptanMetroStation";
  const rawStations = stopPoints.filter((sp: any) => sp.stopType === stopType);

  // map through the stations and grab the stuff you want from each and then return it
  // unless you really want the whole thing, which you probably don't, it's enormous
  const stations = rawStations.map((rs: any) => {
    return {
      lines: rs.lines,
      id: rs.id,
      commonName: rs.commonName,
    };
  });

  //   console.log(stations);
  fs.writeFile(
    `./${mode}StationsFromAPI.json`,
    JSON.stringify(stations),
    "utf8",
    (err: any) => {
      if (err) throw err;
      console.log("file saved");
    }
  );
};

const getStations = async () => {
  let stations = await fetchData("tube");
  const dlrStations = await fetchData("dlr");
  const overgroundStations = await fetchData("overground");

  // do something with the station data - I merge it and put it in a JSON file in S3
  // you might have something else you need to do here
};

getStations();
