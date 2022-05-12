import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function SideBar(props) {
  const [active, setActive] = useState("home");
  return (
    <div className="side_bar">
      <div className="logo">
        <Image
          src="/images/logo_black.png"
          alt="logo"
          width={140}
          height={55}
        />
      </div>
      <div className="side_nav">
        <Link href="/">
          <a
            className="page_link"
            style={{
              color: active === "home" ? "#fbb70f" : "rgb(37, 37, 37)",
            }}
            onClick={() => {
              setActive("home");
            }}
          >
            HOME
          </a>
        </Link>
        <Link href="/shop">
          <a
            className="page_link"
            style={{
              color: active === "shop" ? "#fbb70f" : "rgb(37, 37, 37)",
            }}
            onClick={() => {
              setActive("shop");
            }}
          >
            SHOP
          </a>
        </Link>

        <Link href="/product">
          <a
            className="page_link"
            style={{
              color: active === "product" ? "#fbb70f" : "rgb(37, 37, 37)",
            }}
            onClick={() => {
              setActive("product");
            }}
          >
            PRODUCT
          </a>
        </Link>

        <Link href="/cart">
          <a
            className="page_link"
            style={{
              color: active === "cart" ? "#fbb70f" : "rgb(37, 37, 37)",
            }}
            onClick={() => {
              setActive("cart");
            }}
          >
            CART
          </a>
        </Link>
        <Link href="/checkout">
          <a
            className="page_link"
            style={{
              color: active === "checkout" ? "#fbb70f" : "rgb(37, 37, 37)",
            }}
            onClick={() => {
              setActive("checkout");
            }}
          >
            CHECKOUT
          </a>
        </Link>
        <Link href="/shop">
          <a
            className="page_link"
            style={{
              color: active === "search" ? "#fbb70f" : "rgb(37, 37, 37)",
            }}
            onClick={() => {
              setActive("search");
            }}
          >
            
          </a>
        </Link>
      </div>

      <div className="sidebar_btn">
        <button>Discount</button>
        <button style={{ backgroundColor: "rgb(36,36,36)" }}>
          New This Week
        </button>
      </div>
    </div>
  );
}

export default SideBar;
