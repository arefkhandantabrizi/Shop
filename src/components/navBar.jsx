import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../img/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="nav">
        <li className="nav__item">
          <img src={Logo} alt="logo" className="nav__img" />
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/">
            صفحه اصلی
          </NavLink>
        </li>
        {/* <li className="nav__item">
          <NavLink className="nav__link" to="/register">
            ثبت نام
          </NavLink>
        </li> */}
        <li className="nav__item">
          <NavLink className="nav__link" to="/login">
            ورود
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/order-jacket">
            سفارش لباس
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
