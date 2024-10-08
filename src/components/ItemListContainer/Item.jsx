import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto}) => {
  const { id, title, image, price } = producto;

  return (
    <>
      <div className="col-md-6 col-lg-4 my-4 row align-items-center d-flex ">
        <div className="col-4" 
        
        >
          <img
            className="img-fluid"
            src={image}
            alt="imagen"
          />
        </div>
        <div className="col-8" 
        
        >
          <h3 className="text-black fs-4 fw-bold text-uppercase">{title}</h3>
          <p className="fw-black text-primary fs-3">${price}</p>
          <Link to={`/detalle/${id}`} className="btn btn-primary">Detail</Link>
        </div>
        
      </div>
    </>
  );
};

export default Item;
