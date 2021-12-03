import React, { useState } from "react";
import Image from "next/image";
import Rating from "../components/reusable/Rating";

function product(props) {
  const [carousel_img, setCarousel_img] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const filter_path = "HOME > FURNITURE > CHAIRS >";
  return (
    <div className="product_page">
      <div className="product_nav">
        {filter_path}
        <span> WHITE MODERN CHAIR </span>
      </div>
      <div className="product_container">
        <div className="product_flex">
          <div className="carousel_container">
            <div className="carousel_img">
              <Image
                src={`/images/product_${carousel_img}.png`}
                layout="fill"
              />
            </div>
          </div>
          <div className="nav_carousel">
            <div className="nav_carousel_img">
              <Image
                src="/images/product_1.png"
                layout="fill"
                onClick={() => setCarousel_img(1)}
              />
            </div>
            <div className="nav_carousel_img">
              <Image
                src="/images/product_2.png"
                layout="fill"
                onClick={() => setCarousel_img(2)}
              />
            </div>
            <div className="nav_carousel_img">
              <Image
                src="/images/product_3.png"
                layout="fill"
                onClick={() => setCarousel_img(3)}
              />
            </div>
            <div className="nav_carousel_img">
              <Image
                src="/images/product_4.png"
                layout="fill"
                onClick={() => setCarousel_img(4)}
              />
            </div>
          </div>
        </div>
        <div className="product_desc">
          <div className="yellow_bar"></div>
          <div
            style={{
              color: "#fbb70f",
              fontSize: "3rem",
              fontWeight: "bold",
              margin: "1.5rem 0 1.5rem 0",
            }}
          >
            $1100
          </div>
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "1.5rem",
              color: "rgb(37, 37, 37)",
            }}
          >
            White Modern Chair
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1.5rem",
            }}
          >
            <Rating />
            <div style={{ fontSize: "1.3rem", color: "rgb(100, 100, 100)" }}>
              Write A Review
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: "1rem",
                width: "1rem",
                borderRadius: "10000rem",
                backgroundColor: "#20D34A",
                marginTop: ".2rem",
              }}
            ></div>
            <div style={{ fontSize: "1.2rem", margin: "0 0 1.5rem .5rem" }}>
              In Stock
            </div>
          </div>
          <div
            style={{
              fontSize: "1.8rem",
              margin: "5rem 0 6rem 0",
              lineHeight: "2.8rem",
              color: "rgb(100, 100, 100)",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            quae eveniet culpa officia quidem mollitia impedit iste asperiores
            nisi reprehenderit consequatur, autem, nostrum pariatur enim?
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: "4rem",
              width: "12rem",
              backgroundColor: "rgb(230, 230, 230)",
              margin:"5rem 0 3rem 0",
            }}
          >
            <div style={{ fontSize: "1.5rem", color: "rgb(100, 100, 100)" }}>
              Qty
            </div>
            <div
              style={{
                display: "flex",
                cursor: "pointer",
                fontSize: "1.5rem",
                color: "rgb(100, 100, 100)",
                width: "5rem",
                justifyContent:"space-around"
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
              <div onClick={() => quantity != 10 ? setQuantity(quantity + 1) : 10}>+</div>
            </div>
          </div>
          <button
            style={{
              backgroundColor: "#fbb70f",
              color: "white",
              width: "25rem",
              height: "7rem",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default product;
