import React from "react";
import classes from "./AvailableProduct.module.css";
import Card from "../UI/Card";
import ProductItem from "./ProductItem";

const itemsArray = [
  {
    id: "m1",
    name: "Sushi",
    description: "Lorem Ipsum",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "Lorem IpsumLorem Ipsum",
    price: 16.99,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "Lorem IpsumLorem IpsumLorem Ipsum",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    price: 18.99,
  },
];

function AvailableProduct() {
  const productList = itemsArray.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));

  return (
    <section className={classes.product}>
      <Card>
        <ul>{productList}</ul>
      </Card>
    </section>
  );
}

export default AvailableProduct;
