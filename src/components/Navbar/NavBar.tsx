import React, { SetStateAction } from 'react';
import './Navbar.css';

interface props{
  setSearchQuery: React.Dispatch<SetStateAction<string>>,
  user:string,
}

const Navbar= ({setSearchQuery,user}:props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="jaa.png" alt="JAA Logo" className="foto" />
        </a>
        <div className="color">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M3 12.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1H3zm0-5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1H3zm0-5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1H3z"
              />
            </svg>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-nav mx-auto">
            <a className="nav-link" href="/home">
              Inici
            </a>
          
            <a className="nav-link" href="/chatbot">
              Chatbot
            </a>
          </div>

          <div className="search-bar">
            <input onChange={(e)=>setSearchQuery(e.target.value)} type="text" placeholder="Buscar..." />
            <button type="button">
              <i className="bi bi-search"></i>
            </button>
          </div>
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
