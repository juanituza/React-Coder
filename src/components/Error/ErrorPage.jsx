import React from 'react'
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="card contenedor">
      <h1>404 - Product not found</h1>
      <p>Sorry, the product you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Back
      </Link>
    </div>
  );
}

export default ErrorPage