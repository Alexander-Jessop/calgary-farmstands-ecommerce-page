import React, { Fragment } from "react";
import classes from "./Checkout.module.css";

function Checkout(props) {
  return (
    <Fragment>
      <section className={classes.background}>
        <div className={classes.container}>
          <h1 className={classes.title}>SUMMARY</h1>
          <p className={classes.body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            eligendi quia, voluptas tempore ipsum et natus error voluptatum sit
            molestiae minus quas libero quasi nihil, sequi totam perferendis
            odio at.
          </p>
          <h2 className={classes.title}>IN YOUR CART</h2>
          <p className={classes.body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            eligendi quia, voluptas tempore ipsum et natus error voluptatum sit
            molestiae minus quas libero quasi nihil, sequi totam perferendis
            odio at.
          </p>
          <div className={classes.footer}>
            <button className={classes.button}>NEXT STEP</button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Checkout;
