import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import classes from "./FarmStand.module.css";
// import MapBox from "./MapBox";

function FarmStand(props) {
  const [farmStandData, setFarmStandData] = useState([]);

  useEffect(() => {
    axios.get(`/api/${props.id}`).then((res) => {
      setFarmStandData(res.data);
      console.log(res.data.point.coordinates[0]);
      console.log(res.data.point.coordinates[1]);
    });
  }, []);

  return (
    <Fragment>
      <section className={classes.headerContainer}>
        <div key={farmStandData.id} className={classes.storeInfo}>
          <div className={classes.leftContainer}>
            <div className={classes.leftInfo}>
              <img
                className={classes.img}
                width={200}
                height={200}
                src={farmStandData.images}
                alt={farmStandData.vendor_name}
              />
            </div>
            <div className={classes.rightInfo}>
              <h1>{farmStandData.vendor_name}</h1>
              <h2>{farmStandData.location_name}</h2>
              <address>{farmStandData.address}</address>
              <p>{farmStandData.duration}</p>
              <p>{farmStandData.hours}</p>
              <p>{farmStandData.vendor_description}</p>
              {/* <MapBox point={farmStandData.point.coordinates} /> */}
            </div>
          </div>
        </div>
        <div className={classes.mapbox}>Mapbox</div>
      </section>
      {/* reuseable component section * 2 */}
    </Fragment>
  );
}

export default FarmStand;
