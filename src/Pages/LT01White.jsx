import React from "react";

import Card from "../Components/Card";

function LT01White({onAddToBag}) {

  const array = [
    {
      "title": "LT 01 White",
      "price": 249,
      "imgUrl": "./images/img1.jpg",
      "code":1
     }
  ]

  return (
    <>
    {
    array.map((obj, index) => (
      <Card
      key={index}
      title={obj.title}
      price={obj.price}
      imgUrl={obj.imgUrl}
      onAddToBag={onAddToBag}
      code={obj.code} />
    ))
    }
    </>
  );
}

export default LT01White;