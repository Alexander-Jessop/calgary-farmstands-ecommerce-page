import { useState, useEffect } from "react";
import FarmStandCard from "../Card/FarmStandCard";
import ShortenData from "./ShortenData";
import axios from "axios";
import "./FarmStandData.css";
import Season from "./Season";
import RefindedHours from "./RefindedHours";

const ApiData = (props) => {
  const [farmStandData, setFarmStandData] = useState([]);

  useEffect(() => {
    axios.get("/api").then((res) => {
      setFarmStandData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <FarmStandCard>
      <main>
        {farmStandData.map((farmStand) => (
          <div className="farmDataDiv" key={Math.random().toString()}>
            <h1>
              {farmStand.community} {farmStand.vendor_name}
            </h1>
            <img
              width={100}
              height={100}
              src="https://showscene.ca/wp-content/uploads/2017/03/1c0d0f0cb8b7f2fb2685da9798efe42b_big-image-png-image-placeholder-clipart_2400-2400.png"
              alt="placeholder"
            />
            <address>{farmStand.address}</address>
            <Season season={farmStand.duration} />
            <RefindedHours hours={farmStand.hours} />
            <ShortenData data={farmStand.vendor_description} />
          </div>
        ))}
      </main>
    </FarmStandCard>
  );
};

export default ApiData;
