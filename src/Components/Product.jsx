import React from "react";

function Product({href, imgUrl, title, price, code}) {
  return (
    <a href={href}>
    <div className="product">
      <img src={imgUrl} alt="img" />
      <div className="titleBlock">
      <p className="title">{title}</p>
      </div>
      <p className="price">
      €{price}
      </p>
    </div>
    </a>
  );
}

export default Product;