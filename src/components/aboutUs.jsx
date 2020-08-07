import React, { Component, Fragment } from "react";
import NavBar from "./navBar";
import Footer from "./footer";

class AboutUs extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="aboutus">
          <p className="aboutus__phone">تلفن تماس :‌۰۹۰۲۲۸۵۹۸۴۶</p>
          <p className="abutus__time">
            لطفا در ساعات ۹ الی ۱۳ و ۱۷ الی ۲۰ و از روز شنبه الی پنج شنبه تماس
            بگیرید و یا در تلگرام پیام بگذارید
          </p>
          <p className="aboutus__telegram">کانال تلگرام:‌@tolidi_melina</p>
          <p className="aboutus__attention">
            توجه:‌ امکان مراجعه حضوری برای اندازه گیری و یا تحویل لباس وجود
            ندارد. لطفا به سلامتی خود و دیگران احترام گذاشته و درخواست مراجعه
            حضوری نفرمایید. از همکاری شما متشکریم.
          </p>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default AboutUs;
