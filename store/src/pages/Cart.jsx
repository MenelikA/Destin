import StoreContext from "../contexts/StoreContext";
import { useContext } from "react";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(StoreContext);
  return (
    <>
      <PageTitle title={"Your Cart"} />

      {/* create a container with 80% width and center it */}

      <div
        style={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingBottom: "10rem",
        }}
      >
        <h3>
          Total Value: {cart.reduce((acc, product) => acc + product.price, 0)}
        </h3>

        {/* list all the products in the cart concisely */}
        {cart.map((product, idx) => (
          <div
            key={"cart-item-" + idx}
            style={{
              width: "100%",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginBottom: "0.5rem",
              display: "flex",
            }}
          >
            {/* display the product thumbnail */}
            <img
              src={"./default_prod_image.png"}
              alt={product.title}
              style={{
                width: "10%",
                height: "auto",
                marginBottom: "0.5rem",
              }}
            />
            <div
              style={{
                padding: "0 5rem",
              }}
            >
              {/* display the product title */}
              <h3>{product.name}</h3>
              {/* display the product price */}
              <p
                style={{
                  color: "#181D31",
                  fontWeight: "bold",
                }}
              >
                ${product.price}
              </p>
              <span
                className="material-symbols-outlined"
                onClick={() => removeFromCart(product)}
                style={{
                    cursor: "pointer",
                    color: "#181D31",
                    fontSize: "2rem",
                }}
              >
                remove_shopping_cart
              </span>
            </div>
          </div>
        ))}

        {/* add a checkout button that takes you to /checkout */}
        <Link to="/checkout" style={{
            width: '100%',
        }}>
          <button
            style={{
              backgroundColor: "#181D31",
              color: "white",
              padding: "1rem",
              border: "none",
              borderRadius: "5px",
              fontSize: "1.2rem",
              width: "100%",
            }}
          >
            Checkout
          </button>
        </Link>
      </div>
    </>
  );
};

export default Cart;
