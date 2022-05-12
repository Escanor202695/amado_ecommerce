import React from "react";
import Input from "../components/reusable/Input";
import Link from "next/link";
import Brand from "../components/reusable/Brand";

function checkout(props) {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div style={{ display: "flex" }}>
        <div className="checkout_form">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Input placeholder="First Name" width="32.75rem" />
            <Input placeholder="Last Name" width="32.75rem"/>
          </div>
          <Input placeholder="Email" width="67.25rem"/>
          <Input placeholder="Address" width="67.25rem"/>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Input placeholder="Zip Code" width="32.75rem"/>
            <Input placeholder="Phone No" width="32.75rem"/>
          </div>
          <Input
            placeholder="Leave a comment"
            width="67.25rem"
            height="25rem"
          />
          <Brand title="Create an account" />
        </div>
        <div className="payment_method">
          <div className="cart_total">Cart Total</div>
          <div className="cart_details">
            <div>Subtotal:</div>
            <div>$690</div>
          </div>
          <div className="cart_details">
            <div>Delivery:</div>
            <div>$10</div>
          </div>
          <div className="cart_details">
            <div>Total:</div>
            <div>$700</div>
          </div>
          <div>
            <Brand title="Cash on delivery" />
            <Brand title="Paypal" />
          </div>

          <Link href="/">
            <button className="checkout_btn" onClick={() =>alert('Order Placed Successfully!')}>Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default checkout;
