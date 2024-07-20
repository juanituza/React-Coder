import React, { useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import CartWidget from "../NavBar/CartWidget";

const Item = ({ producto, addToCart, onItemClicked }) => {
  const { id, name, imagen, description, price,stock } = producto;

  return (
    <>
      <div className="col-md-6 col-lg-4 my-4 row align-items-center d-flex ">
        <div className="col-4" onClick={() => onItemClicked(id)}>
          <img
            className="img-fluid"
            src={`/imagenes/${imagen}.jpg`}
            alt="imagen guitarra"
          />
        </div>
        <div className="col-8" onClick={() => onItemClicked(id)}>
          <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
          <p className="fw-black">{description}</p>
          <p className="fw-black text-primary fs-3">${price}</p>
        </div>
        <div>
          <ItemCount
            stock={stock}
            initial={1}
            producto={producto}
            addToCart={addToCart}
          />
          {/* <CartWidget carrito={carrito}/> */}
        </div>
      </div>
    </>
  );
};

export default Item;
