import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-expand-md bg-dark navbar-dark fixed-top">
      <a className="navbar-brand" href="/">
        Svijet ljepote
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Početna
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/parfem">
              Parfemi
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ruz">
              Ruževi
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/lak">
              Lakovi za nokte
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/puder">
              Puderi
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/maskara">
              Maskare
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
