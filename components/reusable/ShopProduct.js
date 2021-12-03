import React from "react";
import Image from "next/image";
import Rating from "../../components/reusable/Rating";

const ShopProduct = ({ number }) => {
  const hoveredImage = (number + 3) % 9 == 0 ? 1 : (number + 3) % 9;
  console.log(hoveredImage);
  return (
    <div className="shop_product">
      <div style={{ position: "relative", width: "100%", height: "25vw" }}>
        <Image src={`/images/product_${number}.png`} layout="fill" />
        <Image
          src={`/images/product_${hoveredImage}.png`}
          className="shop_product_onHover"
          layout="fill"
        />
      </div>
      <div>
        <div className="yellow_bar" style={{ margin: "2rem 0 1rem 0" }}></div>
        <div className="price_rating">
          <div>$180</div>
          <Rating />
        </div>
        <div className="home_product_title">
          <div className="title">Modern Chair</div>
          <Image src="/images/cart.png" width="18rem" height="10rem" />
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
