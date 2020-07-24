import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
import TextArea from "./textArea";
import InputRegister from "./inputRegister";
import TextAreaRegistration from "./textAreaRegistration";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? this.renderError(error) : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmitt();
  };

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderError(error) {
    switch (error.details[0].message) {
      case '"نام کاربری" is not allowed to be empty':
        return "نام کاربری نمی تواند خالی باشد";
      case '"عنوان متن" is not allowed to be empty':
        return "عنوان متن نمی تواند خالی باشد";
      case '"توضیحات متن" is not allowed to be empty':
        return "توضیحات متن نمی تواند خالی باشد";
      case '"عنوان آموزش" is not allowed to be empty':
        return "عنوان آموزش نمی تواند خالی باشد";
      case '"رمز عبور" is not allowed to be empty':
        return "رمز عبور نمی تواند خالی باشد";
      case '"نام" is not allowed to be empty':
        return "نام نمی تواند خالی باشد";
      case '"نام و نام خانوادگی" is not allowed to be empty':
        return "نام و نام خانوادگی نمی تواند خالی باشد";
      case '"نام و نام خانوادگی" length must be at least 3 characters long':
        return "نام و نام خانوادگی نمی تواند کمتر از ۳ کاراکتر باشد";
      case '"نام مدرسه" is not allowed to be empty':
        return "نام مدرسه نمی تواند خالی باشد";
      case '"نام مدرسه" length must be at least 3 characters long':
        return "نام مدرسه نمی تواند کمتر از ۳ کاراکتر باشد";
      case '"نام" length must be at least 3 characters long':
        return "نام نمی تواند کمتر از ۳ کاراکتر باشد";
      case '"نام کاربری" must be a valid email':
        return "نام کاربری باید ایمیل معتبر باشد";
      case '"نام کاربری" must be a number':
        return "نام کاربری باید عدد باشد";
      case '"نام کاربری" length must be 10 characters long':
        return "شماره وارد شده برای کد ملی صحیح نیست";
      case '"تلفن همراه" length must be at least 11 characters long':
        return "شماره تلفن صحیح نیست";

      case '"پایه تحصیلی" is not allowed to be empty':
        return "پایه تحصیلی باید مقداری بین ۱ و ۶ داشته باشد";
      // case `"نام کاربری" with value ${this.state.data.username} fails to match the required pattern: /[0-9]{10}/`:
      //   return "نام کاربری باید مطابق شماره ملی باشد";

      default:
        // console.log(error.details[0].message);

        return "مقدار وارد شده صحیح نمی باشد";
    }
  }

  renderButton(label, className = "btn form__btn") {
    return (
      <button disabled={this.validate()} className={className}>
        {label}
      </button>
    );
  }

  renderOutLineButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-sm rounded-pill">
        {label}
      </button>
    );
  }

  renderTextArea(name, label, maxLength = "200", rows = "2", cols = "100%") {
    const { errors, data } = this.state;
    return (
      <TextArea
        name={name}
        label={label}
        maxLength={maxLength}
        rows={rows}
        cols={cols}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderTextAreaRegistration(
    divClass,
    name,
    label,
    maxLength = "200",
    rows = "2",
    cols = "100%"
  ) {
    const { errors, data } = this.state;
    return (
      <TextAreaRegistration
        divClass={divClass}
        name={name}
        label={label}
        maxLength={maxLength}
        rows={rows}
        cols={cols}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderInput(
    maxLength,
    name,
    label,
    type = "text",
    className = "form__input",
    pattern = "(.*)"
  ) {
    const { errors, data } = this.state;
    return (
      <Input
        className={className}
        maxLength={maxLength}
        pattern={pattern}
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderInputRegister(
    divClass,
    maxLength,
    name,
    label,
    type = "text",
    className = "form__input",
    pattern = "(.*)"
  ) {
    const { errors, data } = this.state;
    return (
      <InputRegister
        divClass={divClass}
        className={className}
        maxLength={maxLength}
        pattern={pattern}
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
