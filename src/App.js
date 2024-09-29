import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Merchant from "./routes/Home/Merchant";
import Producer from "./routes/Home/Producer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home/merchant" element={<Merchant />} />
        <Route path="/home/producer" element={<Producer />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element=""/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
