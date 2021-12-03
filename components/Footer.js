import React from "react";
import Image from "next/image";
import Link from 'next/link';

function Footer(props) {
  return (
    <div className="footer">
      <div className="first_footer">
        <div className="discount">
          <p className="disc_title">
            Subscribe for a <span>25% Discount</span>
          </p>
          <p className="disc_description">
            Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit
            amet mi vulputate consectetur. Donec auctor interdum purus, ac
            finibus massa bibendum nec.
          </p>
        </div>
        <div className="subscribe">
          <input type="email" placeholder="Your Email" />
          <button className="subs_btn">Subscribe</button>
        </div>
      </div>
      <div className="sec_footer">
        <div className="sec_footer_left">
          <Image src="/images/logo_white.png" height="60rem" width="150rem" />
          <p>
            Copyright ©2021 All rights reserved | This template is made with by
            Sakib
          </p>
        </div>

          <div className="footer_nav">
            <Link href="/">
              <a className="page_link_footer active">HOME</a>
            </Link>
            <Link href="/shop">
              <a className="page_link_footer">SHOP</a>
            </Link>
            <Link href="/product">
              <a className="page_link_footer">PRODUCT</a>
            </Link>
            <Link href="/cart">
              <a className="page_link_footer">CART</a>
            </Link>
            <Link href="/checkout">
              <a className="page_link_footer">CHECKOUT</a>
            </Link>
          </div>
      </div>
    </div>
  );
}

export default Footer;
