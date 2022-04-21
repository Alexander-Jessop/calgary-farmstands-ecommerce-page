import React from "react";
import Card from "../UI/Card";
import classes from "./Products.module.css";

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

function Products(props) {
  return (
    <section className={classes.section}>
      <Card>
        <h1>Products</h1>
        {itemsArray.map((item) => (
          <div className={classes.products} key={item.id}>
            <div>
              <h2 className={classes.productName}>{item.name}</h2>
              <p className={classes.price}>{item.price}</p>
            </div>
            <p className={classes.description}>{item.description}</p>
            <div className={classes.formContainer}>
              <form>
                <input type="number" placeholder="Qty" min="0" max="5" />
                <button>Submit</button>
              </form>
            </div>
          </div>
        ))}
      </Card>
    </section>
  );
}

export default Products;
