import React from "react";

import "./FarmStandCard.css";

function FarmStandCard(props) {
  return <div className="card">{props.children}</div>;
}

export default FarmStandCard;
