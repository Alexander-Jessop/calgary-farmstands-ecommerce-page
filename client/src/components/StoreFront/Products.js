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
    price: 16.5,
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
    <section className={classes.sectionjunk}>
      <Card>
        <h1>Products</h1>
        {itemsArray.map((item) => (
          <div className={classes.products} key={item.id}>
            <div>
              <p className={classes.productName}>{item.name}</p>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
            <div className={classes.formjunk}>
              <form>
                <input type="number" placeholder="Quantity" min="0" max="5" />
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
