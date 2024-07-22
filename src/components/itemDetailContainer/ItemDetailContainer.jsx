import React, { useState, useEffect } from "react";
import "./itemDetailContainer.css";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ productos, addToCart, productoId }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productoEncontrado = productos.find(
      (productoData) => productoData.id === productoId
    );
    setProduct(productoEncontrado);
  }, []);

  return (
    <>
      <ItemDetail product={product} addToCart={addToCart} />
    </>
  );
};

export default ItemDetailContainer;
