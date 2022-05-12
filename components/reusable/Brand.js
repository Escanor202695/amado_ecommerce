import React from "react";

function Brand({ title }) {
  return (
    <div className="brand_name">
      <input type="checkbox" id={title} name={title} value="Brand" />
      <label htmlFor={title}>{title}</label>
    </div>
  );
}

export default Brand;
