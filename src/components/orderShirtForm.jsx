import React, { Fragment } from "react";
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import Footer from "./footer";
import NavBar from "./navBar";
import SideBar from "./sideBar";
import Form from "./common/form";
import { shirtAdded, totalOrdered } from "../store/order";
import calPriceShirtAndJacket from "../utils/calPriceShirtAndJacket";

class OrderShirtForm extends Form {
  state = {
    data: {
      shirtHeight: this.props.shirtHeight,
      shirtChest: this.props.shirtChest,
      shirtHip: this.props.shirtHip,
      shirtSleeve: this.props.shirtSleeve,
      shirtShoulder: this.props.shirtShoulder,
      shirtQuantity: this.props.shirtQuantity,
    },
    imageSource: "",
    textSource: "",
    errors: {},
  };

  schema = {
    shirtChest: Joi.number().min(0).required().label("shirtChest"),
    shirtSleeve: Joi.number().min(0).required().label("shirtSleeve"),
    shirtHeight: Joi.number().min(0).max(75).required().label("shirtHeight"),
    shirtShoulder: Joi.number().min(0).required().label("shirtShoulder"),
    shirtHip: Joi.number().min(0).required().label("shirtHip"),
    shirtQuantity: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("shirtQuantity"),
  };

  doSubmitt = () => {
    let price = calPriceShirtAndJacket(
      this.state.data.shirtHeight,
      this.props.userSchool
    );
    price = price * parseInt(this.state.data.shirtQuantity);
    this.props.shirtAdded({
      shirtHeight: this.state.data.shirtHeight,
      shirtChest: this.state.data.shirtChest,
      shirtHip: this.state.data.shirtHip,
      shirtShoulder: this.state.data.shirtShoulder,
      shirtSleeve: this.state.data.shirtSleeve,
      quantity: this.state.data.shirtQuantity,
      price,
      name: "بلوز",
    });
    this.props.totalOrdered({});
    const count = this.props.orderList.map((order) => order.name === "بلوز");
    if (this.state.data.shirtQuantity === "0" && count.length === 1)
      toast("بلوز 👕 از سبد خرید حذف شد");
    else if (parseInt(this.state.data.shirtQuantity) !== 0)
      toast("بلوز 👕 به سبد خرید اضافه شد");
  };

  render() {
    document.title = "تولیدی پوشاک ملینا ترشیز|‌سفارش بلوز";
    if (this.props.gender !== "Male") return <Redirect to="/access-denied" />;

    return (
      <Fragment>
        <NavBar />
        <SideBar />
        <div className="orderjacket">
          <div className="alert alert__danger alert--order">
            در طول ثبت سفارش برای ثبت اعداد از صفحه کلید انگلیسی استفاده کنید
          </div>
          {/* <h1 className="orderjacket__heading heading-2--dark u-margin-top-small">
            سفارش بلوز
          </h1> */}
          <form onSubmit={this.handleSubmit} className="orderjacket__form">
            <div className="orderjacket__input">
              {this.renderInputOrder(
                "orderjacket__label",
                "form__group orderjacket__input-1",
                "6",
                "shirtHeight",
                "قد بلوز",
                "text",
                "orderjacket__input"
              )}
              {this.renderInputOrder(
                "orderjacket__label",
                "form__group orderjacket__input-2",
                "6",
                "shirtChest",
                "دور سینه",
                "text",
                "orderjacket__input"
              )}
              {this.renderInputOrder(
                "orderjacket__label",
                "form__group orderjacket__input-3",
                "6",
                "shirtHip",
                "دور باسن",
                "text",
                "orderjacket__input"
              )}
              {this.renderInputOrder(
                "orderjacket__label",
                "form__group orderjacket__input-4",
                "6",
                "shirtSleeve",
                "قد آستین",
                "text",
                "orderjacket__input"
              )}
              {this.renderInputOrder(
                "orderjacket__label",
                "form__group orderjacket__input-5",
                "6",
                "shirtShoulder",
                "تمام شانه",
                "text",
                "orderjacket__input"
              )}
              {this.renderInputOrder(
                "orderjacket__label",
                "form__group orderjacket__input-6",
                "2",
                "shirtQuantity",
                "تعداد",
                "number",
                "orderjacket__input"
              )}
              {this.renderButton("افزودن به سبد خرید", "btn orderjacket__btn")}
            </div>
            {this.state.imageSource && (
              <div className="orderjacket__extra">
                <img
                  src={this.state.imageSource}
                  alt=""
                  className="orderjacket__extra--image"
                />
                <p className="orderjacket__extra--text">
                  {this.state.textSource}
                </p>
              </div>
            )}
          </form>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    orderList: state.entities.orders.list,
    shirtHeight: state.entities.orders.items.shirt.height,
    shirtChest: state.entities.orders.items.shirt.chest,
    shirtHip: state.entities.orders.items.shirt.hip,
    shirtQuantity: state.entities.orders.items.shirt.quantity,
    shirtShoulder: state.entities.orders.items.shirt.shoulder,
    shirtSleeve: state.entities.orders.items.shirt.sleeve,
    price: state.entities.orders.items.shirt.price,
    userSchool: state.entities.users.data.schoolname,
    gender: state.entities.users.data.gender,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ shirtAdded, totalOrdered }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(OrderShirtForm);
