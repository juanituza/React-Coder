import "./ItemCount.css";
import Item from "../ItemListContainer/Item";


const CardProduct = ({ contador, aumentarContador, descontarContador,onAdd }) => {
  

  return (
    <>
      
      
      {/* </div> */}

      {/* 
      <div className="d-flex justify-content-center">
        <div
          className="card p-3 col-md-4 col-sm-6 contenedor"
          // style={{ width: "fit-content" }}
        >
          <h5 className="d-flex justify-content-center">Lukather</h5>
          <img
            className="img-fluid"
            src="/guitarra_01.jpg"
            alt="imagen guitarra "
          />
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-dark"
              onClick={descontarContador}
            >
              -
            </button>
            <span className="input-group-text number">{contador}</span>
            <button className="btn btn-outline-dark" onClick={aumentarContador}>
              +
            </button>

            <button
              className="btn btn-outline-warning ms-2 boton"
              onClick={onAdd}
              // disabled={contador === 0 || contador > stock}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default CardProduct;
