import React, { Fragment } from "react";
import ProductSummary from "./ProductSummary";
import AvailableProduct from "./AvailableProduct";

function Products(props) {
  return (
    <Fragment>
      <ProductSummary />
      <AvailableProduct />
    </Fragment>
  );
}

export default Products;
