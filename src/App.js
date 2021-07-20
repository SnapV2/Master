import { MapView, ListView, Detail } from "./Components";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App(props) {
  const [locationArrey, SetdataMap] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/get/us-project")
      .then((locationArrey) => {
        SetdataMap(locationArrey.data);
      });
  });

  return (
    <div className="App">
      <Detail />
      <ListView />
    </div>
  );
}

export default App;

//   //
