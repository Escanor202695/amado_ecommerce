import React from "react";
import SideBar from "./SideBar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout_top">
        <SideBar />
        {children}
      </div>
      <Footer/>
    </div>
  );
}

export default Layout;
