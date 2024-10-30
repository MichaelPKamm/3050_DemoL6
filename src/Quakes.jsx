import { Button, Typography } from "@mui/material";
import { useState } from "react";

const URL =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson";

function Quakes() {
  const [quakes, setQuakes] = useState([]);

  async function fetchQuakes() {
    console.log("clicked");
    const resp = await fetch(URL);
    const data = await resp.json();
    setQuakes(data.features);
  }

  console.log(quakes);

  return (
    <div>
      <Typography variant="h2">Quakes</Typography>
      <Button variant="contained" onClick={() => fetchQuakes()}>
        Get Quakes!
      </Button>
      {/* quakes.length > 0 && JSON.stringify(quakes) */}
      <ul>
        {quakes.length > 0 &&
          quakes.map((quake) => {
            return <li key={quake.id}>{quake.properties.place}</li>;
          })}
      </ul>
    </div>
  );
}

export default Quakes;
