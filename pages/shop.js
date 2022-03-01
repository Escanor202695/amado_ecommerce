/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Brand from "../components/reusable/Brand";
import ShopProduct from "../components/reusable/ShopProduct";
import Image from "next/image";

function Shop(props) {
  const [sort_by, setSort_by] = useState("Date");
  const [view, setView] = useState("6");
  const [pagiPage_num, setPagiPage] = useState("1");

  const pagiPageCheck = (num) => {
    if (num == pagiPage_num) 
      return "pagi_page activePage";

    return "pagi_page";
  }; 

  return (
    <div className="shop">
      <div className="filter">
        <div className="category">
          <h3>Categories</h3>
          <div className="category_name">
            <div className="active">Chairs</div>
            <div>Beds</div>
            <div>Accesories</div>
            <div>Furniture</div>
            <div>Home Deco</div>
            <div>Dressings</div>
            <div>Tables</div>
          </div>
        </div>
        <div className="brands">
          <h3>Brands</h3>
          <div className="brand_names">
            <Brand title="Amado" />
            <Brand title="Ikea" />
            <Brand title="Furniture Inc" />
            <Brand title="The Factory" />
            <Brand title="Art Deco" />
          </div>
        </div>
        <div className="colors">
          <h3>Color</h3>
          <div className="color_circle">
            <div style={{ backgroundColor: "red" }}></div>
            <div style={{ backgroundColor: "purple" }}></div>
            <div style={{ backgroundColor: "lightgreen" }}></div>
            <div style={{ backgroundColor: "pink" }}></div>
            <div style={{ backgroundColor: "white" }}></div>
            <div style={{ backgroundColor: "orange" }}></div>
            <div style={{ backgroundColor: "gray" }}></div>
            <div style={{ backgroundColor: "lightblue" }}></div>
          </div>
        </div>
        <div className="price">
          <h3>Price</h3>
          <div>$10 - $1000</div>
        </div>
      </div>
      <div className="shop_products">
        <div style={{ padding: "0 1.6rem" }}>
          <p style={{ fontSize: "1.5rem", margin: "10rem 0 2rem 0" }}>
            SHOWING 1-8 0F 25
          </p>
          <div className="menu">
            <Image src="/images/menu.png" width="80rem" height="40rem" />
            <div className="extra_filter">
              <div className="sortBy">
                <div className="sortBy_title">Sort By :</div>
                <div className="sortBy_group">
                  <div className="sortBy_selected">{sort_by}</div>
                  <div className="sortBy_dropdown">
                    <div onClick={() => setSort_by("Date")}>Date</div>
                    <div onClick={() => setSort_by("Newest")}>Newest</div>
                    <div onClick={() => setSort_by("Popular")}>Popular</div>
                  </div>
                </div>
              </div>
              <div className="sortBy" style={{ width: "10rem" }}>
                <div className="sortBy_title">View :</div>
                <div className="sortBy_group">
                  <div className="sortBy_selected">{view}</div>
                  <div className="sortBy_dropdown">
                    <div onClick={() => setView("6")}>6</div>
                    <div onClick={() => setView("12")}>12</div>
                    <div onClick={() => setView("18")}>18</div>
                    <div onClick={() => setView("24")}>24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="filtered_result">
          <ShopProduct number="1" />
          <ShopProduct number="2" />
          <ShopProduct number="3" />
          <ShopProduct number="4" />
          <ShopProduct number="5" />
          <ShopProduct number="6" />
        </div>
        <div className="pagination">
          <div className={pagiPageCheck('1')} onClick={() => setPagiPage("1")}>
            1.
          </div>
          <div className={pagiPageCheck('2')} onClick={() => setPagiPage("2")}>
            2.
          </div>
          <div className={pagiPageCheck('3')} onClick={() => setPagiPage("3")}>
            3.
          </div>
          <div className={pagiPageCheck('4')} onClick={() => setPagiPage("4")}>
            4.
          </div>          
        </div>
      </div>
    </div>
  );
}

export default Shop;
