import { useState, useEffect } from "react";
import axios from "axios";

const ApiData = () => {
  const [farmStandData, setFarmStandData] = useState([]);

  useEffect(() => {
    axios.get("/api").then((res) => {
      setFarmStandData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      {farmStandData.map((farmStand) => (
        <div key={Math.random().toString()}>
          <h1>{farmStand.location_name}</h1>
        </div>
      ))}
    </div>
  );
};

export default ApiData;
