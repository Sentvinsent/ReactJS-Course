import React, { useContext } from "react";
// import { useSelector } from "react-redux";

import ProductItem from "../components/Products/ProductItem";
import { useStore } from "../hooks-store/store";
// import { ProductContext } from "../context/products-context";
import "./Products.css";

const Products = (props) => {
  // const productList = useSelector((state) => state.shop.products);
  // const productList = useContext(ProductContext).products;
  const state = useStore()[0];
  return (
    <ul className="products-list">
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
