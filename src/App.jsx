import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import {Routes, Route} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
