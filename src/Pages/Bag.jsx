import React from "react";
import axios from "axios";
import BagCard from "../Components/BagCard";

function Bag({bagItems, setBagItems}) {

  const onRemoveItem = (obj) => {
    axios.delete(`https://6123b066124d8800175683c3.mockapi.io/bag/${obj.id}`);
    setBagItems(prev => prev.filter(product => product.id !== obj.id));
  }

  return (
    <>
    {
      bagItems.map((product, index) => (
        <BagCard
        key={index}
        title={product.title}
        imgUrl={product.imgUrl}
        price={product.price}
        id={product.id}
        onRemoveItem={onRemoveItem}
         />
      ))
    }
    </>
  );
}

export default Bag;