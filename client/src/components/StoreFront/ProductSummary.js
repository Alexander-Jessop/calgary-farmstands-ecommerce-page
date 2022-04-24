import React from "react";
import classes from "./ProductSummary.module.css";

function ProductSummary() {
  return (
    <section className={classes.summary}>
      <h2>Product Summary</h2>
      <p>
        Choose your favorite food from our broad selection of available produce{" "}
      </p>
      <p> All our food is grown locally within our borders of Alberta! </p>
    </section>
  );
}

export default ProductSummary;
