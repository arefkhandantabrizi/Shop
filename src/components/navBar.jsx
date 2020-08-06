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
          {!this.props.submited && (
            <li className="nav__item">
              <NavLink className="nav__link" to="/login">
                ورود
              </NavLink>
            </li>
          )}
          {this.props.submited && (
            <li className="nav__item nav__item--order">
              <NavLink className="nav__link" to={this.props.routeto}>
                سفارش لباس
              </NavLink>
            </li>
          )}
          {!this.props.submited && (
            <li className="nav__item nav__item--order">
              <NavLink className="nav__link" to="/login">
                سفارش لباس
              </NavLink>
            </li>
          )}

          {this.props.submited && this.props.gender === "Male" && (
            <li className="nav__item nav__item--user">
              <NavLink className="nav__link" to="#">
                <Icon
                  name="icon-profile-male"
                  className="nav__icon nav__icon--user"
                />
                {this.props.name}{" "}
                <span className="nav__item--user"> عزیز خوش آمدید</span>
              </NavLink>
            </li>
          )}
          {this.props.submited && (
            <li className="nav__item">
              <NavLink className="nav__link" to="/cart">
                <Icon name="icon-cart" className="nav__icon nav__icon--cart" />
                <span className="cart__notification">
                  {this.props.totalCount}
                </span>
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    routeto: state.entities.bugs.sidebar.routeto,
    submited: state.entities.users.submited,
    gender: state.entities.users.data.gender,
    name: state.entities.users.data.name,
    totalCount: state.entities.orders.totalCount,
  };
};

export default connect(mapStateToProps)(NavBar);
