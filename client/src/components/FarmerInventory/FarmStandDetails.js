import React, { useEffect, useState } from "react";
import "./FarmStandInfo.css";

const FarmStandDetails = (props) => {
  const id = props.id;
  const [standInfo, setStandInfo] = useState();

  useEffect(() => {
    const farmStandInfo = async () => {
      let response = await fetch(`/farmInfo/${id}`);
      let data = await response.json();
      setStandInfo(data);
    };

    farmStandInfo();
  }, [id]);

  if (!standInfo) {
    return <p>Loading data...</p>;
  }
  return (
    <div style={{ height: "25vh", padding: 50 }} className="info">
      <label>FarmStand id: </label>
      <span>{standInfo._id}</span>
      <br />
      <label>Name: </label>
      <span>{standInfo.vendor_name}</span>
      <br />
      <label>Hours: </label>
      <span>{standInfo.hours}</span>
      <br />
      <label>Products: </label>
      <span>{standInfo.product_description}</span>
    </div>
  );
};

export default FarmStandDetails;
