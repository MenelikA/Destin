import { useContext } from "react";
import { Link } from "react-router-dom";
import StoreContext from "../contexts/StoreContext";

const Header = () => {
  const { product, cart, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 2rem",
        backgroundColor: "#181D31",
        color: "white",
      }}
    >
      <div>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <h1>SuperStore</h1>
        </Link>
      </div>
      <div>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
            <span className="material-symbols-outlined">shopping_bag</span>
            <span>{cart.length}</span>
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Header;
