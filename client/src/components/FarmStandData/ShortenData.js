import React from "react";

function ShortenData(props) {
  if (props.data === undefined) {
    return <p>No description available</p>;
  } else {
    let shortString = props.data;
    let maxLength = 60;
    let trimmedString = shortString.substr(0, maxLength);
    trimmedString = trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
    );
    return <p> {trimmedString} ...</p>;
  }
}

export default ShortenData;
