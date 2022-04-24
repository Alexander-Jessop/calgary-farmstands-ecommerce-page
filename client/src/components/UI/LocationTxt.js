import React, { Fragment, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";

function LocationTxt(props) {
  const [over, setOver] = useState(false);

  let buttonstyle = {
    color: "",
  };

  if (over) {
    buttonstyle.color = "blue";
  } else {
    buttonstyle.color = "";
  }

  return (
    <Fragment>
      <FaSearchLocation
        style={buttonstyle}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      />
    </Fragment>
  );
}

export default LocationTxt;
