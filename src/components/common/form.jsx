import React, { Component } from "react";
// import { connect } from "react-redux";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
import TextArea from "./textArea";
import InputRegister from "./inputRegister";
import TextAreaRegistration from "./textAreaRegistration";
import InputOrder from "./inputOrder";
import JacketHipPicture from "../../img/hip.jpg";
import JacketShoulderPicture from "../../img/shoulder.jpg";
import JacketHeightPicture from "../../img/jacketheight.jpg";
import JacketSleevePicture from "../../img/sleeve.jpg";
import JacketChestPicture from "../../img/chest.jpg";
import PantsHeightPicture from "../../img/pantsheight.jpg";
import PantsLegPicture from "../../img/leg.jpg";

class Form extends Component {
  state = {
    data: {},
    imageSource: "",
    textSource: "",
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

  // onValueChange = (input) => {
  //   console.log(input);
  // };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    // if (input.name === "schoolName") this.onValueChange(input);

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleClick = ({ currentTarget: input }) => {
    const { id } = input;
    const jacketHeightText =
      "ابتدای متر خیاطی را در کنار گردن قرار دهید. متر را از روی برجستگی سینه دانش آموز عبور دهید و عدد روی متر خیاطی را در محل مورد نظر (زیر زانو) بخوانید.";
    const shirtHeightText =
      "متر را کنار گردن گذاشته و قد لباس را تا برآمدگی انگشت شصت دانش آموز اندازه بگیرید. متداول است قد لباس فرم پسرانه تا انگشت شصت ایشان (زمانی که دست خود را کنار بدن قرار می دهند) اندازه گیری شود.";

    const jacketChestText =
      "ابتدا متر خیاطی را از زیر بغل تا روی برجستگی سینه قرار داده و آن را بین دوسینه به هم می رسانیم به گونه ای که سینه فشرده نشود و متر چرخش مختصری داشته باشد. لازم نیست متر خیاطی را خیلی آزاد و یا خیلی چسب بگیرید به طوری که فرم سینه تغییر کند";

    const shirtChestText =
      "ابتدا متر خیاطی را از زیر بغل تا روی برجستگی سینه قرار داده و آن را بین دوسینه به هم می رسانیم به گونه ای که سینه فشرده نشود و متر چرخش مختصری داشته باشد";

    const hipText =
      "متر را روی برجستگی باسن قرار داده و جلو اندام به هم حلقه کنید. دقت کنید. اگر دانش آموز شکم بزرگ تر از باسن دارد، متر خیاطی را پس از رد کردن از دور باسن، اندکی به سمت بالا بکشید تا جلوی متر به صورت مورب قرار بگیرد و حجم شکم را نیز شامل شود";

    const sleeveText =
      " دست را کمی خم کرده، ابتدای متر را روی نقطه برآمده سرشانه قرار داده و تا برآمدگی مچ اندازه گیری کنید";

    const shoulderText =
      "هنگام اندازه گیری تمام شانه ، از روی نقطه برآمدگی سرشانه چپ تا نقطه برآمدگی سر شانه راست را از پشت اندازه گیری کنید و اجازه دهید متر روی بدن به راحتی قرار بگیرد";

    const pantsHeightText =
      "از خطی که کمر شلوار مورد نظر قرار می گیرد تا قد دلخواه را اندازه گیری کنید. توصیه می کنیم قد شلوار را تا روی زمین اندازه گیری کنید که قد شلوار تا انتهای سال تحصیلی برای دانش آموز مناسب باشد.";

    const pantLegText =
      "دور برآمده ترین قسمت ران را اندازه گیری کنید. نه خیلی آزاد و نه خیلی چسب. متر باید اندکی چرخض داشته باشد";

    switch (id) {
      case "jacketHip":
        this.setState({ imageSource: JacketHipPicture, textSource: hipText });
        break;
      case "jacketChest":
        this.setState({
          imageSource: JacketChestPicture,
          textSource: jacketChestText,
        });
        break;
      case "jacketSleeve":
        this.setState({
          imageSource: JacketSleevePicture,
          textSource: sleeveText,
        });
        break;
      case "jacketHeight":
        this.setState({
          imageSource: JacketHeightPicture,
          textSource: jacketHeightText,
        });
        break;
      case "jacketShoulder":
        this.setState({
          imageSource: JacketShoulderPicture,
          textSource: shoulderText,
        });
        break;
      case "shirtHip":
        this.setState({ imageSource: JacketHipPicture, textSource: hipText });
        break;
      case "shirtChest":
        this.setState({
          imageSource: JacketChestPicture,
          textSource: shirtChestText,
        });
        break;
      case "shirtSleeve":
        this.setState({
          imageSource: JacketSleevePicture,
          textSource: sleeveText,
        });
        break;
      case "shirtHeight":
        this.setState({
          imageSource: JacketHeightPicture,
          textSource: shirtHeightText,
        });
        break;
      case "shirtShoulder":
        this.setState({
          imageSource: JacketShoulderPicture,
          textSource: shoulderText,
        });
        break;
      case "pantsHeight":
        this.setState({
          imageSource: PantsHeightPicture,
          textSource: pantsHeightText,
        });
        break;
      case "pantsLeg":
        this.setState({
          imageSource: PantsLegPicture,
          textSource: pantLegText,
        });
        break;
      case "pantsHip":
        this.setState({ imageSource: JacketHipPicture, textSource: hipText });
        break;

      default:
        break;
    }
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

  renderSelect(
    divClass,
    labelClass,
    className,
    name,
    label,
    options,
    multiple = false
  ) {
    const { data, errors } = this.state;

    return (
      <Select
        multiple={multiple}
        divClass={divClass}
        labelClass={labelClass}
        className={className}
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
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
    labelClass,
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
        labelClass={labelClass}
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
  renderInputOrder(
    labelClass,
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
      <InputOrder
        labelClass={labelClass}
        divClass={divClass}
        className={className}
        maxLength={maxLength}
        pattern={pattern}
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        onClick={this.handleClick}
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
      case '"آدرس" is not allowed to be empty':
        return "آدرس نمی تواند خالی باشد";
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
      case '"تلفن" length must be at least 11 characters long':
        return "شماره تلفن صحیح نیست";
      case '"پایه تحصیلی" is not allowed to be empty':
        return "پایه تحصیلی باید مقداری بین ۱ و ۱۲ داشته باشد";

      case '"jacketHeight" must be a number':
        return "قد مانتو باید مقداری عددی داشته باشد";
      case '"jacketHeight" must be larger than or equal to 0':
        return "قد مانتو باید بزرگتر یا مساوی ۰ باشد";
      case '"jacketHeight" must be less than or equal to 105':
        return "قد مانتو باید کمتر یا مساوی ۱۰۵ باشد ";

      case '"jacketSleeve" must be a number':
        return "قد آستین باید مقداری عددی داشته باشد";
      case '"jacketSleeve" must be larger than or equal to 0':
        return "قد آستین باید بزرگتر یا مساوی ۰ باشد";
      case '"jacketSleeve" must be less than or equal to 68':
        return "قد آستین باید کمتر یا مساوی ۶۸ باشد ";

      case '"jacketChest" must be a number':
        return "دور سینه باید مقداری عددی داشته باشد";
      case '"jacketChest" must be larger than or equal to 0':
        return "دور سینه باید بزرگتر یا مساوی ۰ باشد";
      case '"jacketChest" must be less than or equal to 100':
        return "دور سینه باید کمتر یا مساوی ۱۰۰ باشد ";

      case '"jacketShoulder" must be a number':
        return "تمام شانه باید مقداری عددی داشته باشد";
      case '"jacketShoulder" must be larger than or equal to 0':
        return "تمام شانه باید بزرگتر یا مساوی ۰ باشد";
      case '"jacketShoulder" must be less than or equal to 40':
        return "تمام شانه باید کمتر یا مساوی ۴۰ باشد ";

      case '"jacketHip" must be a number':
        return "دور باسن باید مقداری عددی داشته باشد";
      case '"jacketHip" must be larger than or equal to 0':
        return "دور باسن باید بزرگتر یا مساوی ۰ باشد";
      case '"jacketHip" must be less than or equal to 110':
        return "دور باسن باید کمتر یا مساوی ۱۱۰ باشد ";

      case '"jacketQuantity" must be a number':
        return "تعداد مانتو باید مقداری عددی داشته باشد";
      case '"jacketQuantity" must be larger than or equal to 0':
        return "تعداد مانتو باید بزرگتر یا مساوی ۰ باشد";
      case '"jacketQuantity" must be less than or equal to 10':
        return "تعداد مانتو باید کمتر یا مساوی ۱۰ باشد ";

      case '"shirtHeight" must be a number':
        return "قد بلوز باید مقداری عددی داشته باشد";
      case '"shirtHeight" must be larger than or equal to 0':
        return "قد بلوز باید بزرگتر یا مساوی ۰ باشد";
      case '"shirtHeight" must be less than or equal to 75':
        return "قد بلوز باید کمتر یا مساوی ۷۵ باشد ";

      case '"shirtSleeve" must be a number':
        return "قد آستین باید مقداری عددی داشته باشد";
      case '"shirtSleeve" must be larger than or equal to 0':
        return "قد آستین باید بزرگتر یا مساوی ۰ باشد";
      case '"shirtSleeve" must be less than or equal to 70':
        return "قد آستین باید کمتر یا مساوی ۷۰ باشد ";

      case '"shirtChest" must be a number':
        return "دور سینه باید مقداری عددی داشته باشد";
      case '"shirtChest" must be larger than or equal to 0':
        return "دور سینه باید بزرگتر یا مساوی ۰ باشد";
      case '"shirtChest" must be less than or equal to 125':
        return "دور سینه باید کمتر یا مساوی ۱۲۵ باشد ";

      case '"shirtShoulder" must be a number':
        return "تمام شانه باید مقداری عددی داشته باشد";
      case '"shirtShoulder" must be larger than or equal to 0':
        return "تمام شانه باید بزرگتر یا مساوی ۰ باشد";
      case '"shirtShoulder" must be less than or equal to 45':
        return "تمام شانه باید کمتر یا مساوی ۴۵ باشد ";

      case '"shirtHip" must be a number':
        return "دور باسن باید مقداری عددی داشته باشد";
      case '"shirtHip" must be larger than or equal to 0':
        return "دور باسن باید بزرگتر یا مساوی ۰ باشد";
      case '"shirtHip" must be less than or equal to 125':
        return "دور باسن باید کمتر یا مساوی ۱۲۵ باشد ";

      case '"shirtQuantity" must be a number':
        return "تعداد بلوز باید مقداری عددی داشته باشد";
      case '"shirtQuantity" must be larger than or equal to 0':
        return "تعداد بلوز باید بزرگتر یا مساوی ۰ باشد";
      case '"shirtQuantity" must be less than or equal to 10':
        return "تعداد بلوز باید کمتر یا مساوی ۱۰ باشد ";

      case '"pantsHeight" must be a number':
        return "قد شلوار باید مقداری عددی داشته باشد";
      case '"pantsHeight" must be larger than or equal to 0':
        return "قد شلوار باید بزرگتر یا مساوی ۰ باشد";
      case '"pantsHeight" must be less than or equal to 110':
        return "قد شلوار باید کمتر یا مساوی ۱۱۰ باشد ";

      case '"pantsLeg" must be a number':
        return "دور ران باید مقداری عددی داشته باشد";
      case '"pantsLeg" must be larger than or equal to 0':
        return "دور ران باید بزرگتر یا مساوی ۰ باشد";
      case '"pantsLeg" must be less than or equal to 75':
        return "دور ران باید کمتر یا مساوی ۷۵ باشد ";

      case '"pantsHip" must be a number':
        return "دور باسن باید مقداری عددی داشته باشد";
      case '"pantsHip" must be larger than or equal to 0':
        return "دور باسن باید بزرگتر یا مساوی ۰ باشد";
      case '"pantsHip" must be less than or equal to 125':
        return "دور باسن باید کمتر یا مساوی ۱۲۵ باشد ";

      case '"pantsQuantity" must be a number':
        return "تعداد شلوار باید مقداری عددی داشته باشد";
      case '"pantsQuantity" must be larger than or equal to 0':
        return "تعداد شلوار باید بزرگتر یا مساوی ۰ باشد";
      case '"pantsQuantity" must be less than or equal to 10':
        return "تعداد شلوار باید کمتر یا مساوی ۱۰ باشد ";

      case '"scarfQuantity" must be a number':
        return "تعداد مقنعه باید مقداری عددی داشته باشد";
      case '"scarfQuantity" must be larger than or equal to 0':
        return "تعداد مقنعه باید بزرگتر یا مساوی ۰ باشد";
      case '"scarfQuantity" must be less than or equal to 10':
        return "تعداد مقنعه باید کمتر یا مساوی ۱۰ باشد ";

      // case `"نام کاربری" with value ${this.state.data.username} fails to match the required pattern: /[0-9]{10}/`:
      //   return "نام کاربری باید مطابق شماره ملی باشد";

      default:
        // console.log(error.details[0].message);

        return "مقدار وارد شده صحیح نمی باشد";
    }
  }
}

export default Form;
