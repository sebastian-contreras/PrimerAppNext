import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg ">
  <div className="container-fluid">
    <Link className=" navbar-brand fw-bold" href="/">Perfiles</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse text-end" id="navbarNavDropdown">
      <ul className="ms-auto me-5 navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/services">Servicios</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navigation;
