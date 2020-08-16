import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Logo from "../img/logo.png";
import Icon from "./common/icon";
import { usersLogouted } from "../store/users";
import { invoiceClearedData } from "../store/invoice";
import { orderListEmptied } from "../store/order";
import { schoolsLogouted } from "../store/school";

class NavBar extends Component {
  handleClick = () => {
    this.props.schoolsLogouted({
      selectedGrade: "",
      selectedSchool: "",
    });

    this.props.usersLogouted({
      name: "",
      _id: "",
      gender: "",
      username: "",
      schoolgrade: "",
      schoolname: "",
      error: "",
      jwt: "",
      submited: "",
    });
    this.props.invoiceClearedData({
      address: "",
      ispayed: false,
      items: "",
      name: "",
      paymentcode: "",
      phone: "",
      proccessed: false,
      schoolgrade: "",
      schoolname: "",
      totalprice: 0,
      username: "",
      _id: "",
    });
    this.props.orderListEmptied({
      list: [],
      authority: "",
      submited: "",
      totalCount: 0,
      totalPrice: 0,
      url: "",
      jacketPrice: 0,
      jacketQuantity: 0,
      jacketChest: "",
      jacketHeight: "",
      jacketHip: "",
      jacketShoulder: "",
      jacketSleeve: "",
      pantsHeight: "",
      pantsHip: "",
      pantsLeg: "",
      pantsPrice: 0,
      pantsQuantity: 0,
      scarfPrice: 0,
      scarfQuantity: 0,
      shirtChest: "",
      shirtHeight: "",
      shirtHip: "",
      shirtPrice: 0,
      shirtQuantity: 0,
      shirtShoulder: "",
      shirtSleeve: "",
    });
  };
  render() {
    return (
      <div className="navbar">
        <ul className="nav">
          <div className="sitepart">
            <li className="nav__item">
              <img src={Logo} alt="logo" className="nav__img" />
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/" replace>
                صفحه اصلی
              </NavLink>
            </li>
            {!this.props.submited && (
              <li className="nav__item">
                <NavLink className="nav__link" to="/login" replace>
                  ورود
                </NavLink>
              </li>
            )}
            {this.props.submited && (
              <li className="nav__item nav__item--order">
                <NavLink className="nav__link" to={this.props.routeto} replace>
                  سفارش لباس
                </NavLink>
              </li>
            )}
            {!this.props.submited && (
              <li className="nav__item nav__item--order">
                <NavLink className="nav__link" to="/login" replace>
                  سفارش لباس
                </NavLink>
              </li>
            )}
          </div>
          <div className="userpart">
            {this.props.submited && this.props.gender === "Male" && (
              <li className="nav__item nav__item--user">
                <NavLink className="nav__link" to="#" replace>
                  <Icon
                    name="icon-profile-male"
                    className="nav__icon nav__icon--user"
                  />
                  {this.props.name}{" "}
                  <span className="nav__item--user">خوش آمدید</span>
                </NavLink>
              </li>
            )}
            {this.props.submited && this.props.gender === "Female" && (
              <li className="nav__item nav__item--user">
                <NavLink className="nav__link" to="#" replace>
                  <Icon
                    name="icon-profile-female"
                    className="nav__icon nav__icon--user"
                  />
                  {this.props.name}{" "}
                  <span className="nav__item--user"> خوش آمدید </span>
                </NavLink>
              </li>
            )}
            {this.props.submited && (
              <li className="nav__item">
                <NavLink className="nav__link" to="/cart" replace>
                  <Icon
                    name="icon-cart"
                    className="nav__icon nav__icon--cart"
                  />
                  <span className="cart__notification">
                    {this.props.totalCount}
                  </span>
                </NavLink>
              </li>
            )}
            {this.props.submited && (
              <li className="nav__item">
                <NavLink
                  onClick={this.handleClick}
                  className="nav__link"
                  to="/"
                  replace
                >
                  خروج
                </NavLink>
              </li>
            )}
          </div>
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
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { usersLogouted, invoiceClearedData, orderListEmptied, schoolsLogouted },
    dispatch
  );
};
export default connect(mapStateToProps, matchDispatchToProps)(NavBar);
