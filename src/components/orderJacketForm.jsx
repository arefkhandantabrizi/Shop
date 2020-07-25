import React, { Fragment } from "react";
import Form from "./common/form";
// import { Link } from "react-router-dom";
import Joi from "joi-browser";
import NavBar from "./navBar";
import Footer from "./footer";
import SideBar from "./sideBar";

class OrderJacketForm extends Form {
  state = {
    data: {
      height: "",
      chest: "",
      hip: "",
      sleeve: "",
      shoulder: "",
      quantity: "",
    },
    imageSource: "",
    textSource: "",
    errors: {},
  };

  schema = {
    height: Joi.number().min(45).max(100.3).required().label("height"),
    chest: Joi.number().min(45.3).max(100.3).required().label("chest"),
    hip: Joi.number().min(45.3).max(100.3).required().label("hip"),
    sleeve: Joi.number().min(45.3).max(100.3).required().label("sleeve"),
    shoulder: Joi.number().min(45.3).max(100.3).required().label("shoulder"),
    quantity: Joi.number().min(1).max(10).required().label("quantity"),
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
            سفارش مانتو
          </h1>
          <form onSubmit={this.handleSubmit} className="orderjacket__form">
            {this.renderInputOrder(
              "orderjacket__label",
              "form__group orderjacket__input-1",
              "6",
              "height",
              "قد مانتو",
              "text",
              "orderjacket__input",
              "d+.d{1,2}"
            )}
            {this.renderInputOrder(
              "orderjacket__label",
              "form__group orderjacket__input-2",
              "6",
              "chest",
              "دور سینه",
              "text",
              "orderjacket__input"
            )}
            {this.renderInputOrder(
              "orderjacket__label",
              "form__group orderjacket__input-3",
              "6",
              "hip",
              "دور باسن",
              "text",
              "orderjacket__input"
            )}
            {this.renderInputOrder(
              "orderjacket__label",
              "form__group orderjacket__input-4",
              "6",
              "sleeve",
              "قد آستین",
              "text",
              "orderjacket__input"
            )}
            {this.renderInputOrder(
              "orderjacket__label",
              "form__group orderjacket__input-5",
              "6",
              "shoulder",
              "تمام شانه",
              "text",
              "orderjacket__input"
            )}
            {this.renderInputOrder(
              "orderjacket__label",
              "form__group orderjacket__input-6",
              "2",
              "quantity",
              "تعداد",
              "number",
              "orderjacket__input"
            )}
            {this.renderButton("ثبت سفارش", "btn orderjacket__btn")}

            <div className="orderjacket__extra">
              <img
                src={this.state.imageSource}
                alt=""
                className="orderjacket__extra--image"
              />
              <p className="orderjacket__extra--text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
                labore rem odit sed. Dolorem aliquam at recusandae libero!
                Fugiat eius quaerat, molestias earum veritatis ratione quae
                cumque molestiae tempore commodi?
              </p>
            </div>
          </form>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default OrderJacketForm;
