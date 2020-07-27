import React, { Fragment } from "react";
import Joi from "joi-browser";

import Footer from "./footer";
import NavBar from "./navBar";
import SideBar from "./sideBar";
import Form from "./common/form";

class OrderShirtForm extends Form {
  state = {
    data: {
      shirtHeight: "",
      shirtChest: "",
      shirtHip: "",
      shirtSleeve: "",
      shirtShoulder: "",
      shirtQuantity: "",
    },
    imageSource: "",
    textSource: "",
    errors: {},
  };

  schema = {
    shirtChest: Joi.number().min(70).max(125).required().label("shirtChest"),
    shirtSleeve: Joi.number().min(30).max(70).required().label("shirtSleeve"),
    shirtHeight: Joi.number().min(45).max(75).required().label("shirtHeight"),
    shirtShoulder: Joi.number()
      .min(28)
      .max(48)
      .required()
      .label("shirtShoulder"),
    shirtHip: Joi.number().min(70).max(125).required().label("shirtHip"),
    shirtQuantity: Joi.number()
      .min(1)
      .max(10)
      .required()
      .label("shirtQuantity"),
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
        <div className="orderjacket">
          <h1 className="orderjacket__heading heading-2--dark u-margin-top-small">
            سفارش بلوز
          </h1>
          <form onSubmit={this.handleSubmit} className="orderjacket__form">
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

export default OrderShirtForm;
