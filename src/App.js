import "./App.css";
import logo from "./logo.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Peoples from "./components/Peoples";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Films from "./components/Films";
import Species from "./components/Species";
import Starships from "./components/Starships";
import Planets from "./components/Planets";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <img src={logo} className="App-logo" alt="logo" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peoles/:id" element={<Peoples />} />
        <Route path="/films/:id" element={<Films />} />
        <Route path="/planets/:id" element={<Planets />} />
        <Route path="/starships/:id" element={<Starships />} />
        <Route path="/species/:id" element={<Species />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
