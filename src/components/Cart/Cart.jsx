import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaTrash } from "react-icons/fa";
const Cart = () => {
        
  const { carrito, precioTotal, eliminarProducto, vaciarCarrito } =
    useContext(CartContext);
  return (
    <div>
      <ul className="lista card">
        {carrito.map((productoCarrito) => (
          <li key={productoCarrito.id} className="li-product card-list">
            <img src={productoCarrito.image} alt="imagen del producto" />
            <p className="title m-3">{productoCarrito.title}</p>
            <p className="cantidad m-3">
              cantidad : {productoCarrito.cantidad}
            </p>
            <p className="cantidad m-3">
              Precio unitario = ${productoCarrito.price}
            </p>
            <p className="cantidad m-3">
              Precio parcial = $
              {productoCarrito.price * productoCarrito.cantidad}
            </p>

            <button
              className="btn btn-danger"
              onClick={() => eliminarProducto(productoCarrito.id)}
            >
              Eliminar producto <FaTrash />
            </button>
          </li>
        ))}
      </ul>
      <h2>Precio total: ${precioTotal()}</h2>
      <button className="btn btn-danger" onClick={vaciarCarrito}>
        Vaciar carrito <FaTrash />
      </button>
    </div>
  );
};

export default Cart;
