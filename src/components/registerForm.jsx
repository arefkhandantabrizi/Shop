import React, { Fragment } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import NavBar from "./navBar";
import Footer from "./footer";
// import { register } from "../services/userService";

class RegisterForm extends Form {
  state = {
    data: {
      name: "",
      username: "",
      password: "",
      schoolName: "",
      schoolGrade: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string()
      .regex(/^[0-9]{10}$/)
      .length(10)
      .required()
      .label("نام کاربری"),
    password: Joi.string().required().label("رمز عبور"),
    name: Joi.string().trim().required().min(3).label("نام و نام خانوادگی"),
    schoolName: Joi.string().required().min(3).label("نام مدرسه"),
    schoolGrade: Joi.string()
      .regex(/^[1-6]{1}$/)
      .required()
      .length(1)
      .label("پایه تحصیلی"),
  };

  doSubmitt = async () => {
    // try {
    //   await register(this.state.data);
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
        <div className="section-registration">
          <h1 className="registration__heading heading-1--dark">ثبت نام</h1>
          <form onSubmit={this.handleSubmit} className="registration__form">
            {this.renderInputRegister(
              "registration__label",
              "form__group registration__input-1",
              "10",
              "username",
              "نام کاربری (کد ملی دانش آموز)",
              "text",
              "registration__input",
              "([0-9]){10}"
            )}
            {this.renderInputRegister(
              "registration__label",
              "form__group registration__input-2",
              "50",
              "password",
              "رمز عبور",
              "password",
              "registration__input "
            )}
            {this.renderInputRegister(
              "registration__label",
              "form__group registration__input-3",
              "50",
              "name",
              "نام و نام خانوادگی",
              "text",
              "registration__input "
            )}

            {this.renderInputRegister(
              "registration__label",
              "form__group registration__input-4",
              "50",
              "schoolName",
              "نام مدرسه",
              "text",
              "registration__input"
            )}
            {this.renderInputRegister(
              "registration__label",
              "form__group registration__input-5",
              "1",
              "schoolGrade",
              "پایه تحصیلی",
              "text",
              "registration__input",
              "([1-6]){1}"
            )}

            {this.renderButton("ثبت نام", "btn registration__btn")}
          </form>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default RegisterForm;
