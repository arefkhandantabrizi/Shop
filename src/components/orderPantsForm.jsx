import React, { Fragment } from "react";
import Joi from "joi-browser";

import Footer from "./footer";
import NavBar from "./navBar";
import SideBar from "./sideBar";
import Form from "./common/form";

class OrderPantsForm extends Form {
  state = {
    data: {
      pantsHeight: "",
      pantsHip: "",
      pantsLeg: "",
      pantsQuantity: "",
    },
    imageSource: "",
    textSource: "",
    errors: {},
  };

  schema = {
    pantsHeight: Joi.number().min(60).max(110).required().label("pantsHeight"),
    pantsLeg: Joi.number().min(45).max(75).required().label("pantsLeg"),
    pantsHip: Joi.number().min(70).max(125).required().label("pantsHip"),
    pantsQuantity: Joi.number()
      .min(1)
      .max(10)
      .required()
      .label("pantsQuantity"),
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
        <SideBar />
        <div className="orderpants">
          <h1 className="orderpants__heading heading-2--dark u-margin-top-small">
            سفارش شلوار
          </h1>
          <form onSubmit={this.handleSubmit} className="orderpants__form">
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

export default OrderPantsForm;
