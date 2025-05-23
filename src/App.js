import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeEffect from "./pages/HomeEffect"; // intro animasyonu
import PuzzleMenu from "./components/PuzzleMenu";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeEffect />} />
                <Route path="/menu" element={<PuzzleMenu />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
