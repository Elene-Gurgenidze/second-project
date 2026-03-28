import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Headphones from "./components/Headphone";
import Speakers from "./components/Speakers";
import Earphones from "./components/Earphones";
import ZX9SPEAKER from "./components/ZX9-SPEAKER";
import XX99Headphone from "./components/XX99-Headphones"
import XX99MarkHeadphone from "./components/XX99-Mark1"
import XX59Headphones from "./components/XX59-Headphones"
import ZX7SPEAKER from "./components/ZX7-SPEAKER"
import YX1WIRELESS from "./components/YX1-WIRELESS"

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
        <Route path="/XX99Headphone" element={<XX99Headphone />} />
        <Route path="/XX99MarkIHeadphone" element={<XX99MarkHeadphone />} />
        <Route path="/XX59Headphone" element={<XX59Headphones />} />
        <Route path="/ZX7SPEAKER" element={<ZX7SPEAKER />} />
        <Route path="/YX1WIRELESS" element={<YX1WIRELESS />} />


      </Routes>
    </>
  );
}

export default App;