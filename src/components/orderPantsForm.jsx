import React, { Fragment } from "react";
import Joi from "joi-browser";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import Footer from "./footer";
import NavBar from "./navBar";
import SideBar from "./sideBar";
import Form from "./common/form";
import { pantsAdded, totalOrdered } from "../store/order";
import calPricePants from "../utils/calPricePants";

class OrderPantsForm extends Form {
  state = {
    data: {
      pantsHeight: this.props.pantsHeight,
      pantsHip: this.props.pantsHip,
      pantsLeg: this.props.pantsLeg,
      pantsQuantity: this.props.pantsQuantity,
    },
    imageSource: "",
    textSource: "",
    price: "",
    errors: {},
  };

  schema = {
    pantsHeight: Joi.number().min(60).max(120).required().label("pantsHeight"),
    pantsLeg: Joi.number().min(45).required().label("pantsLeg"),
    pantsHip: Joi.number().min(70).required().label("pantsHip"),
    pantsQuantity: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("pantsQuantity"),
  };

  doSubmitt = () => {
    let price = calPricePants(
      this.state.data.pantsHeight,
      this.props.userSchool
    );
    price = price * parseInt(this.state.data.pantsQuantity);
    this.props.pantsAdded({
      pantsHeight: this.state.data.pantsHeight,
      pantsLeg: this.state.data.pantsLeg,
      pantsHip: this.state.data.pantsHip,
      quantity: this.state.data.pantsQuantity,
      price,
      name: "شلوار",
    });
    this.props.totalOrdered({});
    const count = this.props.orderList.map((order) => order.name === "شلوار");
    if (this.state.data.pantsQuantity === "0" && count.length === 1)
      toast("شلوار 👖 از سبد خرید حذف شد");
    else if (parseInt(this.state.data.pantsQuantity) !== 0)
      toast("شلوار 👖 به سبد خرید اضافه شد");
  };

  render() {
    document.title = "تولیدی پوشاک ملینا ترشیز|سفارش شلوار";

    return (
      <Fragment>
        <NavBar />
        <SideBar />
        <div className="orderpants">
          <div className="alert alert__danger alert--order">
            در طول ثبت سفارش برای ثبت اعداد از صفحه کلید انگلیسی استفاده کنید
          </div>
          <h1 className="orderpants__heading heading-2--dark u-margin-top-small">
            سفارش شلوار
          </h1>
          <form onSubmit={this.handleSubmit} className="orderpants__form">
            <div className="orderpants__input">
              {this.renderInputOrder(
                "orderpants__label",
                "form__group orderpants__input-1",
                "6",
                "pantsHeight",
                "قد شلوار",
                "text",
                "orderpants__input"
              )}
              {this.renderInputOrder(
                "orderpants__label",
                "form__group orderpants__input-2",
                "6",
                "pantsHip",
                "دور باسن",
                "text",
                "orderpants__input"
              )}
              {this.renderInputOrder(
                "orderpants__label",
                "form__group orderpants__input-3",
                "6",
                "pantsLeg",
                "دور ران",
                "text",
                "orderpants__input"
              )}
              {this.renderInputOrder(
                "orderpants__label",
                "form__group orderpants__input-4",
                "2",
                "pantsQuantity",
                "تعداد",
                "number",
                "orderpants__input"
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
    pantsHeight: state.entities.orders.items.pants.height,
    pantsHip: state.entities.orders.items.pants.hip,
    pantsLeg: state.entities.orders.items.pants.leg,
    pantsQuantity: state.entities.orders.items.pants.quantity,
    price: state.entities.orders.items.pants.price,
    userSchool: state.entities.users.data.schoolname,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ pantsAdded, totalOrdered }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(OrderPantsForm);
