import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Season from "./Season";
import RefindedHours from "./RefindedHours";
import FavoriteButton from "../UI/FavoriteButton";
import LocationTxt from "../UI/LocationTxt";
import Phone from "../UI/Phone";
import Email from "../UI/Email";
import StoreFront from "../UI/StoreFront";
import classes from "./FarmStandData.module.css";

const FarmStandData = (props) => {
  const [farmStandData, setFarmStandData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api").then((res) => {
      setFarmStandData(res.data);
    });
  }, []);

  function selectedFarmStand(id) {
    navigate("/locationId/" + id);
  }

  return (
    <main>
      {farmStandData.map((farmStand) => (
        <div className={classes.farmDataDiv} key={farmStand.id}>
          <img
            width={100}
            height={100}
            src={farmStand.images}
            alt={farmStand.vendor_name}
          />
          <h1
            style={{ cursor: "pointer" }}
            onClick={() => selectedFarmStand(farmStand.id)}
          >
            {farmStand.community}{" "}
          </h1>
          <hr className={classes.hr} />
          <address className={classes.address}>{farmStand.address}</address>
          <Season season={farmStand.duration} />
          <RefindedHours hours={farmStand.hours} />
          {/* dog ear tag to flip card to show data */}
          {/* <ShortenData data={farmStand.vendor_description} /> */}
          <div className={classes.cardButton}>
            <div style={{ cursor: "pointer" }}>
              <LocationTxt />
            </div>
            <div style={{ cursor: "pointer" }}>
              <Phone />
            </div>
            <div style={{ cursor: "pointer" }}>
              <Email />
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => selectedFarmStand(farmStand.id)}
            >
              <StoreFront />
            </div>
            <div style={{ cursor: "pointer" }}>
              <FavoriteButton />
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default FarmStandData;
