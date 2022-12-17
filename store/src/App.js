import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoreContext from "./contexts/StoreContext";
import { Products } from "./data/db";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useState } from "react";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <StoreContext.Provider
      value={{
        products: Products,
        cart: cart,
        addToCart: (product) => {
          setCart([...cart, product]);
        },
        removeFromCart: (product) => {
          setCart(cart.filter((item) => item.id !== product.id));
        },
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </StoreContext.Provider>
  );
};

export default App;
