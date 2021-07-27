import React from "react";
import "./Navbar.css";

import { Link, useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <nav className="navbar navbar-expand navbar-dark border-bottom border-black d-flex flex-wrap">
      <h1 className="m-2">Blog</h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample02"
        aria-controls="navbarsExample02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarsExample02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <Link style={{ color: "black", textDecoration: "none" }} to="/">
                Home
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <button
              className="logout__btn btn btn-secondary"
              onClick={(e) => logout(e)}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
