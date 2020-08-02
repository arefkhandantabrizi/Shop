import React, { Fragment } from "react";
import Joi from "joi-browser";

import Footer from "./footer";
import NavBar from "./navBar";
import SideBar from "./sideBar";
import Form from "./common/form";

class OrderScarfFrom extends Form {
  state = {
    data: {
      scarfQuantity: "",
    },

    errors: {},
  };

  schema = {
    scarfQuantity: Joi.number()
      .min(1)
      .max(10)
      .required()
      .label("scarfQuantity"),
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
    document.title = "تولیدی پوشاک ملینا ترشیز|‌سفارش مقنعه";

    return (
      <Fragment>
        <NavBar />
        <SideBar />
        <div className="orderscarf">
          <h1 className="orderscarf__heading heading-2--dark u-margin-top-small">
            سفارش مقنعه
          </h1>
          <form onSubmit={this.handleSubmit} className="orderscarf__form">
            <div className="orderscarf__input">
              {this.renderInputOrder(
                "orderscarf__label",
                "form__group orderscarf__input-1",
                "2",
                "scarfQuantity",
                "تعداد",
                "number",
                "orderscarf__input"
              )}
              {this.renderButton("افزودن به سبد خرید", "btn orderjacket__btn")}
            </div>
          </form>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default OrderScarfFrom;
