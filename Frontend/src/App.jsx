import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

// Pages
import Navbar from "./components/navbar";
import Home from "./pages/home";
import ContactUs from "./pages/contactus";

function App() {
  return (
    <BrowserRouter>
      <div className="main-layout">
        {/* Navbar */}
        <Navbar />
        {/* PAGESs */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        {/* Footer */}
      </div>
      
    </BrowserRouter>
  );
}

export default App;
