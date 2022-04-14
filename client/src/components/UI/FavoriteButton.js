import React, { Fragment, useState } from "react";
import { FaHeart, FaPhone, FaSearchLocation, FaEnvelope } from "react-icons/fa";

import "./FavoriteButton.css";

function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [over, setOver] = useState(false);

  let buttonstyle = {
    color: "",
  };

  if (over) {
    buttonstyle.color = "red";
  } else {
    buttonstyle.color = "";
  }

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Fragment>
      <FaHeart
        className={`${isFavorite && "heart-color"} ${"heart"}`}
        onClick={handleClick}
        style={buttonstyle}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      />
    </Fragment>
  );
}

export default FavoriteButton;
