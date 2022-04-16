import React from "react";

function Community(props) {
  for (let i = 0; i < props.community.length; i++) {
    return (
      <h1>
        <a href={`/farmstand/${i}`}> {props.community} </a>
      </h1>
    );
  }
}

export default Community;
