import React from "react";
// import { useSelector } from 'react-redux';

import FavoriteItem from "../components/Favorites/FavoriteItem";
import { useStore } from "../hooks-store/store";
import "./Products.css";

const Favorites = (props) => {
  // const favoriteProducts = useSelector(state =>
  //   state.shop.products.filter(p => p.isFavorite)
  // );
  const state = useStore()[0];

  const favProds = state.products.filter((p) => p.isFavorite);
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favProds.length > 0) {
    content = (
      <ul className="products-list">
        {favProds.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
