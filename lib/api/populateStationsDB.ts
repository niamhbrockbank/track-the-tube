import tubeStations from '../../tubeStationsFromAPI.json'
import dlrStations from '../../dlrStationsFromAPI.json'
import overgroundStations from '../../overgroundStationsFromAPI.json'

// Packages
import axios from 'axios'

export default async function populateStationsDB(){
    for (const station of tubeStations){
        axios.post('http://localhost:3000/api/stations', {...station}, {headers: {
            'Content-Type': 'application/json'
          }})
    }

    for (const station of dlrStations){
        axios.post('http://localhost:3000/api/stations', {...station}, {headers: {
            'Content-Type': 'application/json'
          }})
    }

    for (const station of overgroundStations){
        axios.post('http://localhost:3000/api/stations', {...station}, {headers: {
            'Content-Type': 'application/json'
          }})
    }

}

populateStationsDB()