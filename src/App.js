import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Merchant from "./routes/Home/Merchant";
import Producer from "./routes/Home/Producer";
import DataProducer from "./routes/Home/Producer/Data";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/home/merchant" element={<Merchant />} />
        <Route path="/home/producer" element={<Producer />} />
        <Route path="/home/producer/data" element={<DataProducer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
