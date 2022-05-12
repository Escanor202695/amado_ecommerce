import React from "react";
import CartProduct from "../components/reusable/CartProduct.js";
import Link from 'next/link';
function cart(props) {
  return (
    <div className="cart">
      <h1 style={{ fontSize: "3rem", marginBottom: "5rem" }}>Shopping Cart</h1>
      <div className="cart_content">
        <div className="cart_list">
          <div
            className="cartTable_title"
            style={{
              display: "flex",
              paddingLeft: "1rem",
              justifyContent: "space-around",
              backgroundColor: "rgb(235,235,235)",
              padding: "1rem 0",
            }}
          >
            <div style={{ color: "transparent" }}>white</div>
            <div>Name</div>
            <div>Price</div>
            <div>Quantity</div>
          </div>
          <div className="cart_products">
            <CartProduct
              src="/images/product_1.png"
              price="$130"
              name="wooden white table"
            />
            <CartProduct
              src="/images/product_2.png"
              price="$130"
              name="white modern chair"
            />
            <CartProduct
              src="/images/product_3.png"
              price="$130"
              name="Minimal Plant Pot"
            />
          </div>
        </div>
        <div className="payment_method" style={{height:'38rem'}}>
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

          <Link href='/checkout'>
            <button className="checkout_btn">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default cart;
