import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";
import Index from "./components";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
