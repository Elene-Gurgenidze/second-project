import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Headphones from "./components/Headphone";
import Speakers from "./components/Speakers";
import Earphones from "./components/Earphones";
import ZX9SPEAKER from "./components/ZX9-SPEAKER";
import XX99Headphone from "./components/XX99-Headphones"

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/zx9speaker" element={<ZX9SPEAKER />} /> 
        <Route path="/XX99Headphone" element={<XX99Headphone/>} />
      </Routes>
    </>
  );
}

export default App;