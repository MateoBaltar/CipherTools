import React from 'react'

const Navbar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        CipherTools
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tools
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/Cesar">
                Caesar
              </a>
              <a className="dropdown-item" href="/Base64">
                Base64
              </a>
              <a className="dropdown-item" href="/Hexadecimal">
                Hexadecimal
              </a>
              <a className="dropdown-item" href="/Vigenere">
                Vigenère
              </a>
              <a className="dropdown-item" href="/Morse">
                Morse
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar