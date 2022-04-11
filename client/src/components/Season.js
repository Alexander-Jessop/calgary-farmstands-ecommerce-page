import React from "react";

function Season(props) {
  if (props.season === undefined) {
    return <p>No seasonal details</p>;
  } else {
    return <p>Seasonal: {props.season}</p>;
  }
}

export default Season;
