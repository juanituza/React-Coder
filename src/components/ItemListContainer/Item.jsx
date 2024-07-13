import React, { useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import CartWidget from "../NavBar/CartWidget";

const Item = ({
  
  producto,
}) => {
  const { id, name, imagen, description, price } = producto;

  const [carrito,setCarrito] = useState([])


  
  const addToCart = (quantity) => {
    setCarrito(quantity);
  };
  console.log(carrito);
  
  return (
    <>
      <div className="col-md-6 col-lg-4 my-4 row align-items-center d-flex">
        <div className="col-4">
          <img
            className="img-fluid"
            src={`/img/${imagen}.jpg`}
            alt="imagen guitarra"
          />
        </div>
        <div className="col-8">
          <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
          <p>{description}</p>
          <p className="fw-black text-warning fs-3">${price}</p>
          <ItemCount stock={5} initial={1} onAdd={addToCart} />
          {/* <CartWidget carrito={carrito}/> */}
        </div>
      </div>
    </>
  );
};

export default Item;
