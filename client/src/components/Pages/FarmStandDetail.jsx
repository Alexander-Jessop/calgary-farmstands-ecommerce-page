import React from "react";
import { useParams } from "react-router-dom";
import FarmStand from "../FarmStandData/FarmStand";

function FarmStandDetail() {
  let params = useParams();
  console.log(params.id);
  return (
    <React.Fragment>
      <FarmStand id={params.id} />
    </React.Fragment>
  );
}

export default FarmStandDetail;
