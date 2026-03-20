import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Headphones from "./components/Headphone";
import Speakers from "./components/Speakers";
import Earphones from "./components/Earphones";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;