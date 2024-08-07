import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
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
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
