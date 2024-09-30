import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Merchant from "./routes/Home/Merchant";
import ProducerHome from "./routes/Producer";
import ProducerData from "./routes/Producer/Data";
import ProducerProducts from "./routes/Producer/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/merchant" element={<Merchant />} />
        <Route path="/producer" element={<ProducerHome />} />
        <Route path="/producer/data" element={<ProducerData />} />
        <Route path="/producer/products" element={<ProducerProducts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element="" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
