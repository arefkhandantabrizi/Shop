import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { bugAdded } from "../store/bugs";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <div className="header__box">
          <h3 className="heading-3">برای اولین بار در منطقه</h3>
          <h1 className="heading-1--light">
            لباس فرم مدارس را به صورت آنلاین سفارش دهید
          </h1>
        </div>
        {!this.props.submited && (
          <Link to="/login" className="btn header__btn">
            ثبت سفارش
          </Link>
        )}
        {this.props.submited &&
          this.props.gender === "Male" &&
          this.props.bugAdded({
            routeto: "/order-shirt",
            activeClass: "shirt",
            class1: "side-nav__item",
            class2: "side-nav__item",
            class3: "side-nav__item side-nav__item--active",
            class4: "side-nav__item",
          }) && (
            <Link to="/order-pant" className="btn header__btn">
              ثبت سفارش
            </Link>
          )}
        {this.props.submited &&
          this.props.gender === "Female" &&
          this.props.bugAdded({
            routeto: "/order-jacket",
            activeClass: "jacket",
            class1: "side-nav__item side-nav__item--active",
            class2: "side-nav__item",
            class3: "side-nav__item",
            class4: "side-nav__item",
          }) && (
            <Link to="/order-jacket" className="btn header__btn">
              ثبت سفارش
            </Link>
          )}
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    submited: state.entities.users.submited,
    gender: state.entities.users.data.gender,
    activeClass: state.entities.bugs.sidebar.activeClass,
    routeto: state.entities.bugs.sidebar.routeto,
    class1: state.entities.bugs.sidebar.class1,
    class2: state.entities.bugs.sidebar.class2,
    class3: state.entities.bugs.sidebar.class3,
    class4: state.entities.bugs.sidebar.class4,
  };
};
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ bugAdded }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Header);
