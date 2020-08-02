import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../img/logo.png";
import Icon from "./common/icon";

class NavBar extends Component {
  render() {
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
          <li className="nav__item nav__item--order">
            <NavLink className="nav__link" to={this.props.routeto}>
              سفارش لباس
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="#">
              <Icon name="icon-cart" className="nav__icon" />
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    routeto: state.entities.bugs.sidebar.routeto,
  };
};

export default connect(mapStateToProps)(NavBar);
