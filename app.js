import express from 'express';
// import fetch from 'node-fetch'; // for API calls (check afterwards)
// simulation device activity
import { smartBulb, smartOutlet, smartTemperatureSensor } from './helpers/devices.js'

const app = express(); // creates Express.js app

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Starting server at ${port}`));
app.use(express.static('public')); // shows files in public for the user
app.use(express.json({limit: '1mb'})); // converts all requests from client in json and limits to 1mb;


const devicesLibrary = () => {
  const devicesLibrary = {
    bulbs : {
      "10": {properties: smartBulb(10, "Celling bulb")},
      "11": {properties: smartBulb(11, "Work Zone Light")},
      "12": {properties: smartBulb(12, "Reading Zone Light")}
    },
    outlets: {
      "20" : {properties: smartOutlet(20, "Work Zone outlet")},
      "21" : {properties: smartOutlet(21, "Reading Zone outlet")}
    },
    temperatureSensors: {
      "30" : {properties: smartTemperatureSensor(30, "Room temperature")}
    } 
  }
  return devicesLibrary
}

// Post Smart Device info to the server

app.post('/api/v1/devices', async (request, response) => {
  const requestData = request.body;
  const deviceCategory = requestData.deviceCategory;
  const id = requestData.id;
  const deviceProperties = devicesLibrary()[deviceCategory][id].properties;
  response.json(deviceProperties)
})


