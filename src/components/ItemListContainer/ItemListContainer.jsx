// ItemListContainer.jsx
import React from 'react';
import './itemListContainer.css';

function ItemListContainer({ saludo }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <div className="card text-bg-warning mb-3 card-custom">
            <h1 className="m-3 text-center card-title text-bg-warning">
              {saludo}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
