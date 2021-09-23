import React from "react";
import { Link } from "react-router-dom";

function Header({bagItems}) {
  return (
    <header className="a-c">
    <div className="menu">
    <Link to="/" >
    <img width="24" src="./images/menu.svg" className="menu" alt="menu" />
    </Link>
    </div>
    <div className="bag">
      <a href="http://localhost:3000/bag">
    <img width="24" src="./images/bag.svg" className="bag" alt="bag" />
    {
      bagItems.length > 0 ? <span className="sphere"></span> : null
    }
    </a>
    </div>
  </header>
  );
}

export default Header;