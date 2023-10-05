import {Client} from "pg";
import { config } from "dotenv";

export default async function getStations(){
    // Connect to database
    config()

    const dbConfig = {
        connectionString : process.env.DATABASE_URL,
        ssl: false
    }

    const client = new Client(dbConfig)
    // Query database for stations
    // Return stations
    return 'hi'
}