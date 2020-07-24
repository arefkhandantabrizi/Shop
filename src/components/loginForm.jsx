import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import NavBar from "./navBar";
import Footer from "./footer";
import Form from "./common/form";

// import auth from "../services/authService";

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

  doSubmitt = async () => {
    // try {
    //   const { data } = this.state;
    //   await auth.login(data.username, data.password);
    //   window.location = "/";
    // } catch (ex) {
    //   if (ex.response && ex.response.status === 400) {
    //     const errors = { ...this.state.errors };
    //     errors.username = ex.response.data;
    //     this.setState({ errors });
    //   }
    // }
  };

  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="section-login">
          <div className="login">
            <h1 className="login__heading heading-1--dark">ورود</h1>
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
                  اگر ثبت نام نکرده اید ابتدا
                  <Link to="/register" className="login__registration-btn">
                    {" "}
                    ثبت نام{" "}
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

export default LoginForm;
