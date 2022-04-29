import React, { Fragment } from "react";
import classes from "./Billing.module.css";

function Billing() {
  return (
    <div className={classes.container}>
      <form className={classes.billing}>
        <label for="custName">Full Legal Name:</label>
        <input id="custName" type="text" />
        <label for="pNum">Phone Number:</label>
        <input id="pNum" type="number" />
        <label for="Cnty">Country:</label>
        <input id="Cnty" type="text" />
        <label for="address">Adress:</label>
        <input id="address" type="text" />
        <label for="city">City:</label>
        <input id="city" type="text" />
        <label for="pCode"> Postal Code:</label>
        <input id="pCode" type="text" />
        <label for="email">Email:</label>
        <input id="email" type="email" />
        <label for="cardNum">Card Number:</label>
        <input id="cardNum" type="number" />
        <label for="cardExp">Expiration Date:</label>
        <input id="cardExp" type="date" />
        <label for="cardCvc">CVC:</label>
        <input id="cardCvc" type="number" />
        <button>Submit and Purchase</button>
      </form>
    </div>
  );
}

export default Billing;
