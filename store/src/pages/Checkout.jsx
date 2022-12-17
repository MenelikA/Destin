import StoreContext from "../contexts/StoreContext";
import { useContext, useState } from "react";
import PageTitle from "../components/PageTitle";


const TEXT_FIELD_STYLES = {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    borderRadius: "5px",
    border: "1px solid #ccc",
    padding: "0.5rem 0",
    marginBottom: "0.5rem",
    width: '100%',
    textIndent: '10px'
};

const LABEL_STYLES = {
    marginBottom: "0.5rem",
};

const SUBMIT_BTN_STYLES = {
    width: "100%",
    padding: "1rem",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#181D31",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "1rem",
};

const Checkout = () => {
  const { cart } = useContext(StoreContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [message, setMessage] = useState("");

  return (
    <>
      <PageTitle title="Checkout" />

      {/* create a container with 80% width and center it */}
      <div
        style={{
          width: "40%",
          margin: "0 auto",
          paddingBottom: "10rem",
        }}
      >
        {/* show the total value of the cart */}
        <h1>
          Total Value: {cart.reduce((acc, product) => acc + product.price, 0)}
        </h1>

        {/* show a form to take the user's name, email, and address */}
        <form
            onSubmit={(e) => {
                e.preventDefault();
                setMessage("Thank you for your purchase!");
            }}
            style={{
                display: "flex",
                flexDirection: "column",
                margin: "0 auto",
                }}
            >
            <label htmlFor="name" style={LABEL_STYLES}>Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                required
                onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
                }
                style={TEXT_FIELD_STYLES}
            />
            <label htmlFor="email" style={LABEL_STYLES}>Email</label>
            <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
                }
                style={TEXT_FIELD_STYLES}
            />
            <label htmlFor="address" style={LABEL_STYLES}>Address</label>
            <input
                type="text"
                name="address"
                id="address"
                required
                value={formData.address}
                onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
                }
                style={TEXT_FIELD_STYLES}
            />
            <button type="submit" style={SUBMIT_BTN_STYLES}>Done</button>
        </form>

        {/* show a message after the user submits the form */}
        <p style={{
            textAlign: "center",
            color: "#181D31",
        }}>{message}</p>

        {/* tell the user what details they entered */}
        <h2>Details</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Address: {formData.address}</p>

        {/* display the order */}
        <h2>Order</h2>
        <ul>
            {cart.map((product) => (
                <li key={product.id}>
                    {product.name} - {product.price}
                </li>
            ))}
        </ul>


      </div>
    </>
  );
};

export default Checkout;
