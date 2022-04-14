import { useState, useEffect } from "react";
import FarmStandCard from "../Card/FarmStandCard";
import ShortenData from "./ShortenData";
import axios from "axios";
import "./FarmStandData.css";
import Season from "./Season";
import RefindedHours from "./RefindedHours";
import FavoriteButton from "../UI/FavoriteButton";
import LocationTxt from "../UI/LocationTxt";
import Phone from "../UI/Phone";
import Email from "../UI/Email";

const FarmStandData = (props) => {
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
              src={farmStand.images}
              alt={farmStand.vendor_name}
            />
            <h1>{farmStand.community}</h1>
            <hr />
            <address>{farmStand.address}</address>
            <Season season={farmStand.duration} />
            <RefindedHours hours={farmStand.hours} />
            {/* dog ear tag to flip card to show data */}
            {/* <ShortenData data={farmStand.vendor_description} /> */}
            <div className="heartpos">
              <LocationTxt />
              <Phone />
              <Email />
              <FavoriteButton />
            </div>
          </div>
        ))}
      </main>
    </FarmStandCard>
  );
};

export default FarmStandData;
