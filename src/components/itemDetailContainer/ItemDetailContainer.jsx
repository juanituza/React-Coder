import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

import ItemDetail from "./ItemDetail";
import useFetch from "../../hooks/useFetch.jsx";

import "./itemDetailContainer.css";


const ItemDetailContainer = () => {
  const { cargando, product } = useFetch();

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
