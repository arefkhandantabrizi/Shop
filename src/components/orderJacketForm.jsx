import React, { Fragment } from "react";
import Joi from "joi-browser";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import Form from "./common/form";
import NavBar from "./navBar";
import Footer from "./footer";
import SideBar from "./sideBar";
import { jacketAdded, totalOrdered } from "../store/order";
import calPriceShirtAndJacket from "../utils/calPriceShirtAndJacket";

class OrderJacketForm extends Form {
  state = {
    data: {
      jacketHeight: this.props.jacketHeight,
      jacketChest: this.props.jacketChest,
      jacketHip: this.props.jacketHip,
      jacketSleeve: this.props.jacketSleeve,
      jacketShoulder: this.props.jacketShoulder,
      jacketQuantity: this.props.jacketQuantity,
    },
    imageSource: "",
    textSource: "",
    errors: {},
  };

  schema = {
    jacketChest: Joi.number().min(65).required().label("jacketChest"),
    jacketSleeve: Joi.number().min(30).required().label("jacketSleeve"),
    jacketHeight: Joi.number()
      .min(61)
      .max(120)
      .required()
      .label("jacketHeight"),
    jacketShoulder: Joi.number().min(24).required().label("jacketShoulder"),
    jacketHip: Joi.number().min(70).required().label("jacketHip"),
    jacketQuantity: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("jacketQuantity"),
  };

  doSubmitt = () => {
    let price = calPriceShirtAndJacket(
      this.state.data.jacketHeight,
      this.props.userSchool
    );
    price = price * parseInt(this.state.data.jacketQuantity);
    this.props.jacketAdded({
      jacketHeight: this.state.data.jacketHeight,
      jacketChest: this.state.data.jacketChest,
      jacketHip: this.state.data.jacketHip,
      jacketShoulder: this.state.data.jacketShoulder,
      jacketSleeve: this.state.data.jacketSleeve,
      quantity: this.state.data.jacketQuantity,
      price,
      name: "مانتو",
    });
    this.props.totalOrdered({});
    const count = this.props.orderList.map((order) => order.name === "مانتو");
    if (this.state.data.jacketQuantity === "0" && count.length === 1)
      toast("مانتو از سبد خرید حذف شد");
    else if (parseInt(this.state.data.jacketQuantity) !== 0)
      toast("مانتو به سبد خرید اضافه شد");
  };

  render() {
    document.title = "تولیدی پوشاک ملینا ترشیز|‌سفارش مانتو";
    return (
      <Fragment>
        <NavBar />
        <SideBar />
        <div className="orderjacket">
          <h1 className="orderjacket__heading heading-2--dark u-margin-top-small">
            سفارش مانتو
          </h1>
          <form onSubmit={this.handleSubmit} className="orderjacket__form">
            <div className="orderjacket__input">
              {this.renderInputOrder(
                "orderjacket__label",
                "form__group orderjacket__input-1",
                "6",
                "jacketHeight",
                "قد مانتو",
                "text",
                "orderjacket__input"
              )}
              {this.renderInputOrder(
                "orderjacket__label",
                "form__group orderjacket__input-2",
                "6",
                "jacketChest",
                "دور سینه",
                "text",
                "orderjacket__input"
              )}
              {this.renderInputOrder(
                "orderjacket__label",
                "form__group orderjacket__input-3",
                "6",
                "jacketHip",
                "دور باسن",
                "text",
                "orderjacket__input"
              )}
              {this.renderInputOrder(
                "orderjacket__label",
                "form__group orderjacket__input-4",
                "6",
                "jacketSleeve",
                "قد آستین",
                "text",
                "orderjacket__input"
              )}
              {this.renderInputOrder(
                "orderjacket__label",
                "form__group orderjacket__input-5",
                "6",
                "jacketShoulder",
                "تمام شانه",
                "text",
                "orderjacket__input"
              )}
              {this.renderInputOrder(
                "orderjacket__label",
                "form__group orderjacket__input-6",
                "2",
                "jacketQuantity",
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
    jacketHeight: state.entities.orders.items.jacket.height,
    jacketChest: state.entities.orders.items.jacket.chest,
    jacketHip: state.entities.orders.items.jacket.hip,
    jacketQuantity: state.entities.orders.items.jacket.quantity,
    jacketShoulder: state.entities.orders.items.jacket.shoulder,
    jacketSleeve: state.entities.orders.items.jacket.sleeve,
    price: state.entities.orders.items.jacket.price,
    userSchool: state.entities.users.data.schoolname,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ jacketAdded, totalOrdered }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(OrderJacketForm);

// export default OrderJacketForm;
