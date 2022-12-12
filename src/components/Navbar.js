import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [people, setPeoplesArray] = useState(null);
  const navigate = useNavigate();

  function handSubmit(e) {
    e.preventDefault();
    const redirectionUrl = `/Poeples/${people}`;
    navigate(redirectionUrl);
  }
  // la valeur récupérée dans le champs est stockée dans le state dans la propriété 'pokemon'
  function handChange(value) {
    setPeoplesArray(value);
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          star wars API
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/peoles/4"
              >
                People
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/starships/5">
                Starships
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/films/4">
                Films
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/species/4">
                Species
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/planets/1">
                Planets
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => handChange(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
