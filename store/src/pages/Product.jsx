import { useContext } from "react";
import PageTitle from "../components/PageTitle";
import { useParams } from "react-router-dom";
import StoreContext from "../contexts/StoreContext";

const Product = () => {
  const { products, cart, addToCart } = useContext(StoreContext);
  const { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));

  return (
    <>
      <PageTitle title="Product Details" />

      {/* create a container with 80% width and center it */}
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          paddingBottom: "10rem",
        }}
      >
        {/* show an image of product on the left and product details on the right */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          {/* show the product image */}
          <img
            src={"../default_prod_image.png"}
            style={{
              width: "50%",
              height: "auto",
            }}
          />

          {/* show the product details */}
          <div
            style={{
              width: "50%",
            }}
          >
            {/* show the product name */}
            <h1>{product.name}</h1>

            {/* show the product price */}
            <h1>${product.price}</h1>

            {/* show the product description */}
            <p>{product.description}</p>

            {/* add a button to add the product to cart, it should be disabled if product is in cart already */}
            <button
              onClick={() => addToCart(product)}
              style={{
                backgroundColor: "#181D31",
                color: "white",
                border: "none",
                padding: "1rem",
                borderRadius: "2.5px",
                width: "100%",
                opacity: cart.find((item) => item.id === product.id) ? 0.5 : 1,
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
