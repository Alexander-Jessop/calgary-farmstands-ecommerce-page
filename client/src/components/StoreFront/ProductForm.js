import React, { useRef, useState } from "react";
import classes from "./ProductForm.module.css";
import Input from "./Input";

function ProductForm(props) {
  const amountInputRef = useRef();
  const [amount, setAmount] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 50
    ) {
      setAmount(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount: "
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "50",
          placeholder: 0,
        }}
      />
      <button>Add</button>
      {!amount && <p>Please enter a valid amount (1 - 50)</p>}
    </form>
  );
}

export default ProductForm;
