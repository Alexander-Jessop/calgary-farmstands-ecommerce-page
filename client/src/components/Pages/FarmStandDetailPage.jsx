import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FarmStand from "../FarmStandData/FarmStand";

function FarmStandDetailPage() {
  let params = useParams();

  return (
    <React.Fragment>
      <FarmStand id={params.id} />
    </React.Fragment>
  );
}

export default FarmStandDetailPage;
