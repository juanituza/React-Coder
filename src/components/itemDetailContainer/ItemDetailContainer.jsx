import React, { useState, useEffect } from "react";
import "./itemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import PacmanLoader from "react-spinners/PacmanLoader";
import useFetch from "../../hooks/useFetch.jsx";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { productos, cargando } = useFetch();
  const [product, setProduct] = useState({});
  const { productoId } = useParams();
 
  useEffect(() => {
    
    if (productos.length > 0) {
      const productoEncontrado = productos.find(
        (producto) => producto.id === Number(productoId)
      );
      setProduct(productoEncontrado);
    }
  }, [productos, productoId]);

  return (
    <>
      {cargando ? (
        <div className="sweet-loading">
          <PacmanLoader
            color="#0D6EFD"
            size={50}
            speedMultiplier={1.5}
            margin={2}
          />
        </div>
      ) : (
        <ItemDetail product={product} />
      )}
    </>
  );
};

export default ItemDetailContainer;
