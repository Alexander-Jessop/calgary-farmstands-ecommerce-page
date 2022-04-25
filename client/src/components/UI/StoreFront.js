import React, { Fragment, useState } from "react";
import { FaStore } from "react-icons/fa";

function StoreFront(props) {
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
      <FaStore
        style={buttonstyle}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      />
    </Fragment>
  );
}

export default StoreFront;
