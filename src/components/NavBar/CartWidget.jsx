import React from "react";
import { IoBag } from "react-icons/io5";
import "./NavBar.css";


function CartWidget() {
  const countItemCart = 5;
  

  return (
    <div className="carrito">
      <ul className="ul-cart ">
        <li className="li-cart">
          {/* <i className="fas fa-shopping-cart"></i> */}
          <IoBag />
        </li>
        <li className="text li-cart">{countItemCart}</li>
      </ul>
    </div>
  );
}

export default CartWidget;
