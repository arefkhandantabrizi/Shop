import React, { Fragment } from "react";
import Joi from "joi-browser";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "./common/form";
import Table from "./common/table";
import NavBar from "./navBar";
import Footer from "./footer";
import { requestPayment } from "../store/order";
import { addInvoice } from "../store/invoice";

class Cart extends Form {
  state = {
    data: {
      address: "",
      phone: "",
    },
    errors: {},
  };

  schema = {
    address: Joi.string().required().label("آدرس"),
    phone: Joi.string().required().label("تلفن"),
  };

  // handleClick = () => {};

  columns = [
    {
      path: "name",
      label: "نام محصول",
    },

    { path: "quantity", label: "تعداد" },

    { path: "price", label: "قیمت" },
  ];

  doSubmitt = () => {
    this.props.requestPayment({
      Amount: this.props.totalPrice + 3000,
      username: this.props.user,
      phone: this.state.data.phone,
    });
  };

  render() {
    if (this.props.url !== "" && this.props.invoiceID === "") {
      this.props.addInvoice(
        {
          name: this.props.name,
          username: this.props.user,
          schoolname: this.props.schoolname,
          schoolgrade: this.props.schoolgrade,
          items: this.props.orderList,
          address: this.state.data.address,
          phone: this.state.data.phone,
          totalprice: this.props.totalPrice + 3000,
          ispayed: false,
          paymentcode: this.props.authority,
        },
        this.props.jwt
      );
    } else if (this.props.url !== "" && this.props.invoiceID !== "")
      return window.location.assign(this.props.url);

    return (
      <Fragment>
        <NavBar />
        <div className="cart">
          <form onSubmit={this.handleSubmit} className="orderJacket__form">
            <Table columns={this.columns} data={this.props.orderList} />
            <div className="cart__text">
              لطفا آدرس خود را با دقت وارد نمایید چرا که لباس بعد از آماده شدن
              توسط پیک، به این آدرس ارسال خواهد شد. هماهنگی لازم قبل از ارسال با
              شما انجام می شود پس منتظر تماس از طرف تولیدی باشید.
            </div>
            {this.renderInputOrder(
              "cart__label",
              "form__group",
              "200",
              "address",
              "آدرس",
              "text",
              "cart__Input"
            )}
            {this.renderInputOrder(
              "cart__label",
              "form__group",
              "11",
              "phone",
              "تلفن",
              "text",
              "cart__Input"
            )}
            {this.renderButton("ثبت و پرداخت")}
            <span className="cart__text--payment">
              توجه هزینه ارسال معادل ۳۰۰۰ تومان به قیمت کل اضافه می شود
            </span>
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
    orderPrice: state.entities.orders.totalPrice,
    orderQuantity: state.entities.orders.totalCount,
    totalPrice: state.entities.orders.totalPrice,
    url: state.entities.orders.url,
    authority: state.entities.orders.authority,
    user: state.entities.users.data.username,
    name: state.entities.users.data.name,
    schoolgrade: state.entities.users.data.schoolgrade,
    schoolname: state.entities.users.data.schoolname,
    jwt: state.entities.users.jwt,
    invoiceID: state.entities.invoices._id,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ requestPayment, addInvoice }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Cart);
