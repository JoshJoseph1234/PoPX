import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      {/* Centered Mobile Container */}
      <div className="w-[375px] min-h-screen bg-white shadow-lg">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
