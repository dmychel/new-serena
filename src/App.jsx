import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Index from "./routes/Index.jsx";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
