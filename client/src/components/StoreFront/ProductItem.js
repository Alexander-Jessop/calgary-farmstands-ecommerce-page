import React, { useContext } from "react";
import ProductForm from "./ProductForm";
import classes from "./ProductItem.module.css";
import CartContext from "../Store/cart-context";

function ProductItem(props) {
  const cartContext = useContext(CartContext);
  const price = `$${props.product.price.toFixed(2)}`;
  const addItemToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.product.id,
      name: props.product.name,
      price: props.product.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.product}>
      <div>
        <h3>{props.product.name}</h3>
        <div className={classes.description}>{props.product.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ProductForm onAddToCart={addItemToCartHandler} id={props.id} />
      </div>
    </li>
  );
}

export default ProductItem;
