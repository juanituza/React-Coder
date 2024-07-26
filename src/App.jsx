import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <>
    <BrowserRouter>
      <div className="body">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer saludo="Bienvenido a la tienda MK BUY" />
            }
          />
          <Route
            path="/categoria/:idCategoria"
            element={
              <ItemListContainer saludo="Bienvenido a la tienda MK BUY" />
            }
          />
          <Route
            path="/detalle/:productoId"
            element={<ItemDetailContainer />}
          />
        </Routes>
      </div>
    </BrowserRouter>
    /* </> */
  );
}

export default App;
