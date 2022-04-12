import React from "react";

function RefindedHours(props) {
  if (props.hours === undefined) {
    return <p>No hours listed</p>;
  } else {
    return <p>Hours: {props.hours}</p>;
  }
}

export default RefindedHours;
