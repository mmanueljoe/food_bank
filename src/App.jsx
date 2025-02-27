import { Cart } from "./pages/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import { useState } from "react";
import { LoginPopup } from "./components/LoginPopup/LoginPopup";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;