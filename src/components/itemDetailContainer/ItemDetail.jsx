import React from 'react'
import "./itemDetailContainer.css";
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({product}) => {
  const { agregarProducto } = useContext(CartContext);

  const agregarAlCarrito = (contador) => {
    const productoCarrito = {...product , cantidad: contador}
    agregarProducto(productoCarrito);
  }
  
  return (
    <>
      <div className="my-4 row align-items-center d-flex card-container">
        <div className="col-4 img-detail">
          <img className="m-3 img-fluid img-shadow " src={product.image} />
        </div>
        <div className="col-8 detail-text">
          <h3 className="text-black fs-4 fw-bold text-uppercase">
            {product.title}
          </h3>
          <p className="fw-black">{product.description}</p>
          <p className="fw-black">{product.category}</p>
          <p className="fw-black text-primary fs-3">${product.price}</p>
          <ItemCount
            stock={product.stock}
            initial={1}
            agregarAlCarrito={agregarAlCarrito}
          />
        </div>
        <div className="detail-text">
          <Link
            to="/"
            className="btn btn-primary col-3 ms-4 justify-content-center"
          >
            Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default ItemDetail