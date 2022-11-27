import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
