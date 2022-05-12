/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import Link from 'next/link';

const Home_product = ({ src, height }) => {
  return (
    <Link href="/shop">
      <div
        className="home_product"
        style={{
          position: "relative",
          width: "33.33%",
          height: `${height}`,
        }}
      >
        <Image src={src} layout="fill" />
        <div className="home_product_hover"></div>
        <div className="home_product_details">
          <div className="yellow_bar"></div>
          <div className="home_product_price">From $180</div>
          <div className="home_product_name">Mordern Chair</div>
        </div>
      </div>
    </Link>
  );
};

export default Home_product;
