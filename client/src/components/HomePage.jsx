import React from "react";

const HomePage = () => {
  return (
    <div>
      <div id="home" style={{ position: "relative" }}>
        <h1
          style={{
            position: "absolute",
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "block",
            color: "white",
          }}
        >
          <center>
            {" "}
            <img src="./images/pic/support.png" height={100} width={100} />
          </center>{" "}
          <br />
          Connecting Local Farmer's with Local Communities{" "}
          <center>
            {" "}
            <img src="./images/pic/2.jpg" height={450} width={650} />
          </center>
        </h1>
        <img src="./images/pic/field.gif" height={700} width={1600} />
      </div>
    </div>
  );
};

export default HomePage;
