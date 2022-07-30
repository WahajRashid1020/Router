import "./App.css";
import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./Home";
import About from "./components/About";
import PC from "./components/PC";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/pc">Dashboard</Link>
          </li>
          <li>
            <Link onClick={() => setLogin(true)} to="/">
              Login
            </Link>
          </li>
          <li>
            <Link onClick={() => setLogin(false)} to="/">
              Logout
            </Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoutes isLogged={login} />}>
            <Route path="/about" element={<About />} />
            <Route path="/pc" element={<PC />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

// const ProtectedRoute = ({ element: Element, auth, ...rest }) => {
//   <Route {...rest} render={(props) => (auth ? "True" : "False")} />;
// };

export default App;
