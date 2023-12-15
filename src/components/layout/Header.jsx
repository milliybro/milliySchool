import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";
import account from "../../assets/elchin.jpg";

const Header = () => {
  return (
    <header className="mb-4 container">
      <div className="top__header">
        <div className="d-flex header">
          <NavLink href="/home" className="logo">
            <img src="/logo.png" alt="site-logo" />
          </NavLink>
          <div className="header__account">
            <img src={account} alt="" />
            <div className="account__info">
              <h5>Murodov E</h5>
              <p>Direktor</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="">
        <ul className="nav d-flex">
          <li className="nav-item">
            <div class="dropdown">
              <NavLink className=" nav-link" to="/home">
                Ta'lim
              </NavLink>
              <div class="dropdown-content">
                <NavLink to="/schelude">Dars jadvali</NavLink>
                <NavLink to="/homework">Uyga vazifa</NavLink>
                <NavLink to="/fanlar">Fanlar</NavLink>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <NavLink className=" nav-link" to="/transaction">
              Muloqot
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className=" nav-link" to="/">
              Mening ishlarim
            </NavLink>
          </li>
        </ul>

        {/* <div class="navbar">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <div class="dropdown">
            <button class="dropbtn">
              Dropdown
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <NavLink href="#">Link 1</NavLink>
              <NavLink href="#">Link 2</NavLink>
              <NavLink href="#">Link 3</NavLink>
            </div>
          </div>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
