import React from "react";
import Image from "next/image";
import Link from "next/link";

function SideBar(props) {
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
          <a className="page_link active">HOME</a>
        </Link>
        <Link href="/shop">
          <a className="page_link">SHOP</a>
        </Link>
        <Link href="/product">
          <a className="page_link">PRODUCT</a>
        </Link>
        <Link href="/cart">
          <a className="page_link">CART</a>
        </Link>
        <Link href="/checkout">
          <a className="page_link">CHECKOUT</a>
        </Link>
      </div>

      <div className="sidebar_btn">
        <button>Discount</button>
        <button style={{backgroundColor:"rgb(36,36,36)"}}>New This Week</button>
      </div>

      <div className="sidebar_opt">
        <div>CART</div>
        <div>FAVOURITE</div>
        <div>SEARCH</div>
      </div>

      <div className="social_media">
        <div className="social_media_icon">@</div>
        <div className="social_media_icon">@</div>
        <div className="social_media_icon">@</div>
        <div className="social_media_icon">@</div>
      </div>
    </div>
  );
}

export default SideBar;
