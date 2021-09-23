import React from "react";

import Card from "../Components/Card";

function LT01PremiumSuedeNavy({onAddToBag}) {

  const array = [
    {
      "title": "LT 01 Premium Suede Navy",
      "price": 269,
      "imgUrl": "./images/img2.jpg",
      "code": 2
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

export default LT01PremiumSuedeNavy;