import React, { Fragment } from "react";
import Joi from "joi-browser";
// import { Link } from "react-router-dom";
import Form from "./common/form";
import NavBar from "./navBar";
import Footer from "./footer";
import SideBar from "./sideBar";

class OrderJacketForm extends Form {
  state = {
    data: {
      jacketHeight: "",
      jacketChest: "",
      jacketHip: "",
      jacketSleeve: "",
      jacketShoulder: "",
      jacketQuantity: "",
    },
    imageSource: "",
    textSource: "",
    errors: {},
  };

  schema = {
    jacketChest: Joi.number().min(65).max(100).required().label("jacketChest"),
    jacketSleeve: Joi.number().min(30).max(68).required().label("jacketSleeve"),
    jacketHeight: Joi.number()
      .min(61)
      .max(105)
      .required()
      .label("jacketHeight"),
    jacketShoulder: Joi.number()
      .min(24)
      .max(40)
      .required()
      .label("jacketShoulder"),
    jacketHip: Joi.number().min(70).max(110).required().label("jacketHip"),
    jacketQuantity: Joi.number()
      .min(1)
      .max(10)
      .required()
      .label("jacketQuantity"),
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur numquam reiciendis molestiae nam officiis, eius
                  officia dicta culpa
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

export default OrderJacketForm;
