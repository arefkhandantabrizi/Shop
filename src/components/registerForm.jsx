import React, { Fragment } from "react";
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "./common/form";
import NavBar from "./navBar";
import Footer from "./footer";
import { loadSchools, schoolsSelected, gradeSelected } from "../store/school";
import { addUser, usersAdded } from "../store/users";
import { bugAdded, btnClassChanged } from "../store/bugs";

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
    gender: "",
    errors: {},
  };

  componentDidMount() {
    this.props.loadSchools();
  }

  schema = {
    username: Joi.string()
      .regex(/^[0-9]{10}$/)
      .length(10)
      .required()
      .label("نام کاربری"),
    password: Joi.string().required().label("رمز عبور"),
    name: Joi.string().trim().required().min(3).label("نام و نام خانوادگی"),
    schoolName: Joi.string().required().label("نام مدرسه"),
    schoolGrade: Joi.number().required().min(1).max(12).label("پایه تحصیلی"),
  };

  handleChange = ({ currentTarget: input }) => {
    let counter = 0;
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    if (errorMessage) counter = counter + 1;

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });

    if (input.name === "schoolName") {
      const selectedSchool = input.value;
      this.props.schoolsSelected({
        selectedSchool,
      });
      const gender = selectedSchool.includes("پسرانه") ? "Male" : "Female";
      this.setState({ gender });
    }
    if (input.name === "schoolGrade") {
      let schoolGrade = input.value;
      this.props.gradeSelected({
        schoolGrade,
      });
    }

    if (counter !== 0) {
      this.props.btnClassChanged({
        btnClass: "btn--inactive registration__btn",
      });
    } else if (counter === 0) {
      this.props.btnClassChanged({
        btnClass: "btn registration__btn",
      });
      this.props.usersAdded({
        username: this.state.data.username,
        password: this.state.data.password,
        schoolname: this.props.selectedSchool,
        schoolgrade: this.state.data.schoolGrade,
        gender: this.state.gender,
      });
    }
  };

  doSubmitt = () => {
    this.props.addUser({
      name: this.state.data.name,
      username: this.state.data.username,
      password: this.state.data.password,
      schoolname: this.props.selectedSchool,
      schoolgrade: this.state.data.schoolGrade,
      gender: this.state.gender,
    });
  };

  render() {
    document.title = "تولیدی پوشاک ملینا ترشیز |‌ ثبت نام ";

    let grades = [];
    // if (this.props.schools.list !== "") {
    const school = this.props.schools.list.filter(
      (school) => school.name === this.props.selectedSchool
    );
    grades = school.map((school) => school.grade);
    // }

    if (
      !this.props.error &&
      this.state.gender === "Male" &&
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
      this.state.gender === "Female" &&
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
        <div className="section-registration">
          <h1 className="registration__heading heading-1--dark">ثبت نام</h1>
          {this.props.error && (
            <div className="alert alert__danger">{this.props.error}</div>
          )}
          <form onSubmit={this.handleSubmit} className="registration__form">
            {this.renderInputRegister(
              "registration__label",
              "form__group registration__input-1",
              "10",
              "username",
              "نام کاربری (کد ملی دانش آموز به انگلیسی)",
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

            <div className="form__group registration__input-4">
              <select
                name="schoolName"
                id="schoolName"
                className="registration__input"
                onChange={this.handleChange}
                value={
                  this.props.schools.selectedSchool !== ""
                    ? this.props.schools.selectedSchool
                    : "نام مدرسه"
                }
              >
                <option disabled hidden>
                  {"نام مدرسه"}
                </option>
                {this.props.schools.list !== "" &&
                  this.props.schools.list.map((option) => (
                    <option required key={option._id} value={option.name}>
                      {option.name}
                    </option>
                  ))}
              </select>
              {this.props.schools.selectedSchool !== "" && (
                <label htmlFor="schoolName" className="registration__label">
                  {"نام مدرسه"}
                </label>
              )}
            </div>

            <div className="form__group registration__input-5">
              <select
                name="schoolGrade"
                id="schoolGrade"
                className="registration__input"
                onChange={this.handleChange}
                value={
                  this.props.schools.selectedGrade !== ""
                    ? this.props.schools.selectedGrade
                    : "پایه تحصیلی"
                }
              >
                <option disabled hidden>
                  {"پایه تحصیلی"}
                </option>
                {this.props.schools.selectedSchool !== "" &&
                  grades[0].map((grade, index) => (
                    <option required key={index} value={grade}>
                      {grade}
                    </option>
                  ))}
              </select>
              {this.props.schools.selectedGrade !== "" && (
                <label htmlFor="schoolName" className="registration__label">
                  {"پایه تحصیلی"}
                </label>
              )}
            </div>

            {this.renderButton("ثبت نام", this.props.btnClass)}
          </form>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    gender: state.entities.users.data.gender,
    name: state.entities.users.data.name,
    password: state.entities.users.data.password,
    username: state.entities.users.data.username,
    btnClass: state.entities.bugs.btnClass,
    schools: state.entities.schools,
    selectedSchool: state.entities.schools.selectedSchool,
    selectedGrade: state.entities.schools.selectedGrade,
    loading: state.entities.schools.loading,
    error: state.entities.users.error,
    submited: state.entities.users.submited,
    activeClass: state.entities.bugs.sidebar.activeClass,
    routeto: state.entities.bugs.sidebar.routeto,
    class1: state.entities.bugs.sidebar.class1,
    class2: state.entities.bugs.sidebar.class2,
    class3: state.entities.bugs.sidebar.class3,
    class4: state.entities.bugs.sidebar.class4,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      loadSchools,
      schoolsSelected,
      addUser,
      bugAdded,
      btnClassChanged,
      gradeSelected,
      usersAdded,
    },
    dispatch
  );
};

export default connect(mapStateToProps, matchDispatchToProps)(RegisterForm);
