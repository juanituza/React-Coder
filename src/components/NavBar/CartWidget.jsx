import React from "react";
import "./NavBar.css";


function CartWidget() {
  const countItemCart = 5;


  return (
    <div className="carrito m-3 ">
      <ul className="ul-cart">
        <li className="li-cart">
          <i className="fas fa-shopping-cart"></i>
        </li>
        <li className="text li-cart">{countItemCart}</li>
      </ul>
    </div>
  );
}

export default CartWidget;
