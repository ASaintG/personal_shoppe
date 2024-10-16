import React, { useState } from 'react';

import Home from './pages/Home';
import Nav from './components/Nav.jsx';
import Cart from './pages/Cart.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };
   // Función para eliminar productos del carrito
   const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <> 
      <Router>
      <Nav/>
        <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />

          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}  />} />
          ContactUs
        </Routes>
      </Router>
    </>
  )
}

export default App
