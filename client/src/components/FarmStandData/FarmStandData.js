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
    });
  }, []);

  return (
    <FarmStandCard>
      <main>
        {farmStandData.map((farmStand) => (
          <div className="farmDataDiv" key={Math.random().toString()}>
            <img
              width={100}
              height={100}
              src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="placeholder"
            />
            <h1>
              {farmStand.community}
              {/* {farmStand.vendor_name} */}
            </h1>
            <hr />
            <address>{farmStand.address}</address>
            <Season season={farmStand.duration} />
            <RefindedHours hours={farmStand.hours} />
            {/* dog ear tag to flip card to show data */}
            {/* <ShortenData data={farmStand.vendor_description} /> */}
          </div>
        ))}
      </main>
    </FarmStandCard>
  );
};

export default ApiData;
