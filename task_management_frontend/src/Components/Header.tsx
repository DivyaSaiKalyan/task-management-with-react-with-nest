import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container text-white">
          <Link to="/" className="navbar-brand text-white">
            Task Management System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link active text-white">
                Home
              </Link>
              <Link to="/taskFunction" className="nav-link text-white">
                Task Function
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
