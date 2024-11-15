import React, { useState } from "react";
import "./Checkout.css";
import { UseCart } from "../../../context/CartContext";
const Checkout = ({onSubmit }) => {
  const { cart } = UseCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!name) validationErrors.name = 'Name is required';
    if (!address) validationErrors.address = 'Address is required';
    if (!creditCard) validationErrors.creditCard = 'Credit card is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit({ name, address, creditCard });
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="left-checkout">
            <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Checkout</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {errors.address && <p className="error">{errors.address}</p>}
      </div>
      <div>
        <label>Credit Card:</label>
        <input
          type="text"
          value={creditCard}
          onChange={(e) => setCreditCard(e.target.value)}
        />
        {errors.creditCard && <p className="error">{errors.creditCard}</p>}
      </div>
      <button type="submit">Place Order</button>
    </form>
          </div>
        </div>
        <div className="col-6">
          <div className="right-checkout">
            {cart.map((item, index) => (
              <div className="product-checkout">
                <div className="item_img">
                  <img src={item.image} alt="" />
                </div>
                <p>{item.title} </p>
                <p>{item.price} USD</p>
              </div>
            ))}
          </div>
          <div className="s_total">
            <div className="info">
              <div>SubTotal</div>
              <div className="total">
                <div className="cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>
                    {cart
                      .reduce((prev, current) => {
                        return prev + current.quantity * current.price;
                      }, 0)
                      .toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
