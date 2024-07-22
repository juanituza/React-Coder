import React from 'react'
import "./itemDetailContainer.css";
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product, producto, addToCart}) => {
  // const { id, name, imagen, description, price, stock } = producto;
  return (
    <>
    <div className="my-4 row align-items-center d-flex card-container">
      <div className="col-4">
        <img
          className="m-3 img-fluid img-shadow "
          src={`/imagenes/${product.imagen}.jpg`}
          />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">
          {product.name}
        </h3>
        <p className="fw-black">{product.description2}</p>
        <p className="fw-black text-primary fs-3">${product.price}</p>
        <ItemCount
          stock={product.stock}
          initial={1}
          // producto={producto}
          addToCart={addToCart}
        />
      </div>
    </div>
          </>
  );
};

export default ItemDetail