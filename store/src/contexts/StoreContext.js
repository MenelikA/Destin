import { Products } from "../data/db";
import React from "react";

const StoreContext = React.createContext({
  products: Products,
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export default StoreContext;