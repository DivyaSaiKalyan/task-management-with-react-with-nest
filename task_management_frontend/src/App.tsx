import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomeNote from "./Components/WelcomeNote";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeNote />} />
          <Route path="/taskFunction" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
