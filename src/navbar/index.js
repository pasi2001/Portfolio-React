import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#h">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#e">
                Education &amp; Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#a">
                Awards &amp; Certificates
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#c">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
