import React from "react";

function Card({title, imgUrl, price, onAddToBag, id, code}) {

  const onPlus = () => {
    onAddToBag({imgUrl, title, price, id, code})
  }
  return (
    <div>
      <img className="productImg" src={imgUrl} alt="img" />
    <div className="productContent">
    <p className="productTitle" >{title}</p>
    <p className="productPrice" >€{price}</p>
    <p onClick={onPlus} className="addToBag c-p" >Add to bag</p>
    </div>
      </div>
  );
}

export default Card;