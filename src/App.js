import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./componet/Home/Home ";
import Mobile from "./componet/Pages/Mobile/Mobile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile" element={<Mobile />} />
      </Routes>
    </div>
  );
}

export default App;
