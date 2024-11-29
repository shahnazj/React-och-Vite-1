import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Features from "./components/Features";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
