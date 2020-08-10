import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Joi from "joi-browser";
import NavBar from "./navBar";
import Footer from "./footer";
import Form from "./common/form";
import { loginUser } from "../store/users";
import { bugAdded } from "../store/bugs";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string()
      .regex(/^[0-9]{10}$/)
      .length(10)
      .required()
      .label("نام کاربری"),
    password: Joi.string().required().label("رمز عبور"),
  };

  doSubmitt = () => {
    this.props.loginUser({
      username: this.state.data.username,
      password: this.state.data.password,
    });
  };

  render() {
    document.title = "تولیدی پوشاک ملینا ترشیز | ورود ";

    if (
      !this.props.error &&
      this.props.gender === "Male" &&
      this.props.submited
    ) {
      this.props.bugAdded({
        routeto: "/order-shirt",
        activeClass: "shirt",
        class1: "side-nav__item",
        class2: "side-nav__item",
        class3: "side-nav__item side-nav__item--active",
        class4: "side-nav__item",
      });
      return <Redirect to="/order-shirt" />;
    } else if (
      !this.props.error &&
      this.props.gender === "Female" &&
      this.props.submited
    ) {
      this.props.bugAdded({
        routeto: "/order-jacket",
        activeClass: "jacket",
        class1: "side-nav__item side-nav__item--active",
        class2: "side-nav__item",
        class3: "side-nav__item",
        class4: "side-nav__item",
      });
      return <Redirect to="/order-jacket" />;
    }

    return (
      <Fragment>
        <NavBar />
        <div className="section-login">
          <div className="login">
            <h1 className="login__heading heading-1--dark">ورود</h1>
            {this.props.error && (
              <div className="alert alert__danger">{this.props.error}</div>
            )}
            <form onSubmit={this.handleSubmit} className="form">
              {this.renderInput(
                "10",
                "username",
                "نام کاربری (کد ملی دانش آموز)",
                "text",
                "form__input",
                "([0-9]){10}"
              )}
              {this.renderInput("50", "password", "رمز عبور", "password")}
              {this.renderButton("ورود", "login__btn")}

              <div className="login__registration-btn">
                <span className="login__registration-txt">
                  برای اولین ورود باید
                  <Link to="/register" className="login__registration-btn">
                    ثبت نام
                  </Link>
                  کنید
                </span>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    error: state.entities.users.error,
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
  return bindActionCreators({ loginUser, bugAdded }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);
