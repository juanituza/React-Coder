// ItemListContainer.jsx
import React from "react";
import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

import useFetch from "../../hooks/useFetch.jsx";
import ItemList from "./ItemList";

import "./itemListContainer.css";

function ItemListContainer({ saludo }) {
  const { productos, cargando } = useFetch();

  return (
    <div className="container">
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
        <div className="row justify-content-center">
          <Link
            to="/"
            className="row card card-title mb-3 card-custom justify-content-center"
          >
            <h1 className="m-3 text-center card-title ">
              <p className="card-text">{saludo}</p>
            </h1>
          </Link>
          <div className="row">
            <ItemList productos={productos} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
