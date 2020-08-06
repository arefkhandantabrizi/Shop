import React, { Fragment } from "react";
import Joi from "joi-browser";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import Footer from "./footer";
import NavBar from "./navBar";
import SideBar from "./sideBar";
import Form from "./common/form";
import { scarfAdded, totalOrdered } from "../store/order";
import calPriceScarf from "../utils/calPriceScarf";

class OrderScarfFrom extends Form {
  state = {
    data: {
      scarfQuantity: this.props.scarfQuantity,
    },

    errors: {},
  };

  schema = {
    scarfQuantity: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("scarfQuantity"),
  };

  doSubmitt = () => {
    let price = calPriceScarf(this.props.userSchool);
    price = price * parseInt(this.state.data.scarfQuantity);
    this.props.scarfAdded({
      quantity: this.state.data.scarfQuantity,
      price,
      name: "مقنعه",
    });
    this.props.totalOrdered({});
    const count = this.props.orderList.map((order) => order.name === "مقنعه");
    if (this.state.data.scarfQuantity === "0" && count.length === 1)
      toast("مقنعه از سبد خرید حذف شد");
    else if (parseInt(this.state.data.scarfQuantity) !== 0)
      toast("مقنعه به سبد خرید اضافه شد");
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

const mapStateToProps = (state) => {
  return {
    orderList: state.entities.orders.list,
    scarfQuantity: state.entities.orders.items.scarf.quantity,
    price: state.entities.orders.items.scarf.price,
    userSchool: state.entities.users.data.schoolname,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ scarfAdded, totalOrdered }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(OrderScarfFrom);
