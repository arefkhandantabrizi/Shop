import React, { Component } from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Icon from "./common/icon";
import {
  validatePayment,
  orderListEmptied,
  orderCanceled,
} from "../store/order";
import { updateInvoice, invoiceCanceled } from "../store/invoice";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class Validate extends Component {
  handleError = () => {
    this.props.orderCanceled({
      url: "",
      authority: "",
      status: "",
      paymentcode: "",
    });
    this.props.invoiceCanceled({
      _id: "",
    });
  };

  handleClick = () => {
    this.props.orderListEmptied({
      list: [],
      authority: "",
      status: "",
      paymentcode: "",
      submited: "",
      totalCount: 0,
      totalPrice: 0,
      url: "",
      jacketPrice: 0,
      jacketQuantity: 0,
      jacketChest: "",
      jacketHeight: "",
      jacketHip: "",
      jacketShoulder: "",
      jacketSleeve: "",
      pantsHeight: "",
      pantsHip: "",
      pantsLeg: "",
      pantsPrice: 0,
      pantsQuantity: 0,
      scarfPrice: 0,
      scarfQuantity: 0,
      shirtChest: "",
      shirtHeight: "",
      shirtHip: "",
      shirtPrice: 0,
      shirtQuantity: 0,
      shirtShoulder: "",
      shirtSleeve: "",
    });
    this.props.invoiceCanceled({
      _id: "",
    });
  };

  render() {
    const value = queryString.parse(this.props.location.search);
    const authority = value.Authority;
    if (this.props.authority === authority) {
      this.props.validatePayment({
        Amount: this.props.totalPrice + 3000,
        Authority: this.props.authority,
      });
      if (this.props.submited && this.props.status === 100) {
        this.props.updateInvoice(
          {
            _id: this.props.invoiceID,
            ispayed: true,
            paymentcode: this.props.paymentcode,
          },
          this.props.jwt
        );
      }
      return (
        <div className="validate">
          {this.props.loading && (
            <div className="cart__loader">
              <Loader type="Grid" color="#c69963" height={80} width={80} />
            </div>
          )}
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
          <Link
            to="/"
            className="btn validate__btn"
            onClick={this.handleClick}
            replace
          >
            بازگشت به سایت
          </Link>
        </div>
      );
    } else if (this.props.status !== 100) {
      return (
        <div className="validate">
          {this.props.loading && (
            <div className="cart__loader">
              <Loader type="Grid" color="#c69963" height={80} width={80} />
            </div>
          )}
          <Icon
            name="icon-cancel-circle"
            className="validate__icon validate__icon--failed"
          />
          <div>
            <p className="validate__text">پرداخت سفارش موفق نبود</p>
          </div>
          <Link
            to="/"
            className="btn validate__btn"
            onClick={this.handleError}
            replace
          >
            بازگشت به سایت
          </Link>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.entities.orders.status,
    totalPrice: state.entities.orders.totalPrice,
    authority: state.entities.orders.authority,
    paymentcode: state.entities.orders.paymentcode,
    failedAuthority: state.entities.orders.failedAuthority,
    jwt: state.entities.users.jwt,
    invoiceID: state.entities.invoices._id,
    submited: state.entities.orders.submited,
    loading: state.entities.orders.loading,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      validatePayment,
      updateInvoice,
      orderListEmptied,
      orderCanceled,
      invoiceCanceled,
    },
    dispatch
  );
};

export default connect(mapStateToProps, matchDispatchToProps)(Validate);
