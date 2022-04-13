import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./FavoriteButton.css";

function FavoriteButton(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [color, setColor] = useState("#000");

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      setColor("#000");
    } else {
      setColor("#f00");
    }
  };

  return (
    <div>
      <FaHeart onClick={handleClick} className="heart" style={{ color }} />
    </div>
  );
}

export default FavoriteButton;
