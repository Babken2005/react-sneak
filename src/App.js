import axios from "axios";
import React from "react";
import { Route } from "react-router-dom";

import './App.css';

import Header from './Components/Header';
import Product from './Components/Product';
import Bag from "./Pages/Bag";
import LT01PremiumSuedeNavy from "./Pages/LT01PremiumSuedeNavy";
import LT01White from "./Pages/LT01White";

function App() {

  const [items, setItems] = React.useState([]);
  const [bagItems, setBagItems] = React.useState([]);


  React.useEffect(() => {
    async function fetchData() {
      const bagResponse = await axios.get('https://6123b066124d8800175683c3.mockapi.io/bag');
      const itemsResponse = await axios.get('https://6123b066124d8800175683c3.mockapi.io/items');
      setItems(itemsResponse.data);
      setBagItems(bagResponse.data);
    }
    fetchData();
  },[])

  
  const onAddToBag = (obj) => {
      axios.post('https://6123b066124d8800175683c3.mockapi.io/bag', obj);
      setBagItems(prev => [...prev, obj])
  }

  return (
    <div className="content a-c j-c">
      <div className="contentContainer">
        <Header bagItems={bagItems} />
        <Route path="/" exact>
        <div className="productBlock">
          {
            items.map((item, index) => (
              <Product
              key={index}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              href={item.href} />
            ))
          }
        </div>
        </Route>
        <Route path="/LT-01-White" exact >
          <LT01White onAddToBag={onAddToBag} bagItems={bagItems} setBagItems={setBagItems} />
        </Route>
        <Route path="/LT-01-Premium-Suede-Navy" exact>
          <LT01PremiumSuedeNavy onAddToBag={onAddToBag} bagItems={bagItems} setBagItems={setBagItems} />
        </Route>
        <Route path="/bag" exact >
          <Bag bagItems={bagItems} setBagItems={setBagItems} />
        </Route>
      </div>
    </div>
  );
}

export default App;
