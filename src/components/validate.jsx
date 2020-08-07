import React, { Component } from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Icon from "./common/icon";
import { validatePayment } from "../store/order";
import { updateInvoice } from "../store/invoice";

class Validate extends Component {
  render() {
    const value = queryString.parse(this.props.location.search);
    const status = value.Status;
    const authority = value.Authority;
    if (status === "OK" && this.props.authority === authority) {
      this.props.validatePayment({
        Amount: this.props.totalPrice + 3000,
        Authority: this.props.authority,
      });
      if (this.props.submited)
        this.props.updateInvoice(
          {
            _id: this.props.invoiceID,
            ispayed: true,
            paymentcode: this.props.authority,
          },
          this.props.jwt
        );
      return (
        <div className="validate">
          <Icon
            name="icon-check-square"
            className="validate__icon validate__icon--success"
          />
          <div>
            <p className="validate__text">
              سفارش شما با موفقیت ثبت شد. ضمن تشکر از خرید شما، توصیه میکنیم
              برای اطلاع از وضعیت لباس در کانال تلگرام تولیدی ملینا به آدرس
              @tolidi_melina عضو شوید
            </p>
          </div>
          <Link to="/" className="btn validate__btn">
            بازگشت به سایت
          </Link>
        </div>
      );
    }
    return (
      <div className="validate">
        <Icon
          name="icon-cancel-circle"
          className="validate__icon validate__icon--failed"
        />
        <div>
          <p className="validate__text">پرداخت سفارش موفق نبود</p>
        </div>
        <Link to="/" className="btn validate__btn">
          بازگشت به سایت
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalPrice: state.entities.orders.totalPrice,
    authority: state.entities.orders.authority,
    jwt: state.entities.users.jwt,
    invoiceID: state.entities.invoices._id,
    submmit: state.entities.orders.submited,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ validatePayment, updateInvoice }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Validate);
