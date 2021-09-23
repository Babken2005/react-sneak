import React from "react";

function BagCard({imgUrl, title, price, id, onRemoveItem}) {

  const onDelete = () => {
    onRemoveItem({title, id});
  }

  return (
    <>
        <div>
        <img src={imgUrl} alt="img" className="productImg" />
        <p>{title}</p>
        <p>€{price}</p>
        <p onClick={onDelete} className="c-p">Delete</p>
        </div>
    </>
  );
}

export default BagCard;