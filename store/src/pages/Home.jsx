import StoreContext from "../contexts/StoreContext";
import { useContext } from "react";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

const Home = () => {
  // get the context from parent components
  const { products, cart, addToCart, removeFromCart } =
    useContext(StoreContext);

  return (
    <>
      <PageTitle title="Home" />

      {/* create a container with 80% width and center it */}
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {/* loop through the products and display them */}
        {products.map((product, idx) => (
          // style this like a flat card
          <div
            key={idx}
            style={{
              width: "30%",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginBottom: "0.5rem",
            }}
          >
            {/* display the product image */}
            <img
              src={"./default_prod_image.png"}
              alt={product.title}
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "0.5rem",
              }}
            />
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
            {/* display the product description, if it's larger, then trim it */}
            <p>
              {product.description.length > 60
                ? product.description.substring(0, 60) + "..."
                : product.description}
            </p>

            {/* add a button to add the product to the cart */}
            <button
              onClick={(e) => {
                addToCart(product);
                e.target.disabled = true;
              }}
              style={{
                backgroundColor: "#181D31",
                color: "white",
                border: "none",
                padding: "0.5rem",
                borderRadius: "5px",
                opacity: cart.find((item) => item.id === product.id) ? 0.5 : 1,
              }}
            >
              Add to cart
            </button>

            {/* add a button to view the product in details */}
            <Link to={`/product/${product.id}`}>
              <button
                style={{
                  backgroundColor: "#181D31",
                  color: "white",
                  border: "none",
                  padding: "0.5rem",
                  borderRadius: "5px",
                  marginLeft: "0.5rem",
                }}
              >
                View details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
