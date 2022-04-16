import React, { useEffect, useState } from "react";
import axios from "axios";

function FarmStand(props) {
  const [farmStandData, setFarmStandData] = useState([]);

  useEffect(() => {
    axios.get(`/api/${props.id}`).then((res) => {
      setFarmStandData(res.data);
      console.log(res.data);
    });
  }, []);

  console.log(props);
  return (
    <div>
      <div key={farmStandData.id}>
        {/* <a href={`locationId/${farmStand.id}`}> testing </a> */}
        <img
          width={100}
          height={100}
          src={farmStandData.images}
          alt={farmStandData.vendor_name}
        />
        <h1>{farmStandData.community}</h1>
        <hr />
        <address>{farmStandData.address}</address>
        <div>{farmStandData.vendor_description}</div>
      </div>
    </div>
  );
}

export default FarmStand;
