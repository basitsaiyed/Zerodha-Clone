import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./components/Home";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
      // Redirect to home if trying to access login or signup while authenticated
      if (location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/") {
        navigate("/home");
      }
    } else {
      setIsAuthenticated(false);
      if (location.pathname !== "/login" && location.pathname !== "/signup") {
        navigate("/login");
      }
    }
  }, [navigate, location.pathname]);

  return (
    <div className="App">
      <Routes>
        {/* Redirect from root to /login or /home */}
        <Route path="/" element={isAuthenticated ? <Home /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
        
        {!isAuthenticated ? (
          <>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          </>
        ) : (
          <>
            <Route path="/home/*" element={<Home />} />
            <Route path="*" element={<Home />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
