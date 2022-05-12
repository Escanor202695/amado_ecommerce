import React, { useState } from "react";
import Image from "next/image";

function CartProduct({ src, name, price }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="cart_product">
      <div style={{ position: "relative", height: "15rem", width: "14rem" }}>
        <Image src={src} alt="" layout="fill" />
      </div>
      <div className="cartProduct_details">
        <div style={{ fontSize: "1.75rem" }}>{name}</div>
        <div style={{ fontSize: "1.75rem" }}>{price}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "4rem",
            width: "12rem",
            backgroundColor: "rgb(230, 230, 230)",
            margin: "0rem 0 0rem 0",
          }}
        >
          <div style={{ fontSize: "1.5rem" }}>
            Qty
          </div>
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              fontSize: "1.5rem",
              width: "5rem",
              justifyContent: "space-around",
            }}
          >
            <div
              onClick={() => {
                quantity != 0 ? setQuantity(quantity - 1) : 0;
              }}
            >
              -
            </div>
            <div>{quantity}</div>
            <div
              onClick={() => (quantity != 10 ? setQuantity(quantity + 1) : 10)}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
