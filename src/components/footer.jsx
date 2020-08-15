import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul className="footernav">
          {!this.props.submited && (
            <li className="footernav__item">
              <Link to="/login" className="footernav__link">
                ورود به سایت
              </Link>
            </li>
          )}
          {this.props.submited && (
            <li className="footernav__item">
              <Link className="footernav__link" to={this.props.routeto}>
                سفارش لباس
              </Link>
            </li>
          )}
          <li className="footernav__item">
            <Link to="#" className="footernav__link">
              راهنمای استفاده از سایت
            </Link>
          </li>
          <li className="footernav__item">
            <Link to="/about-us" className="footernav__link">
              ارتباط با ما
            </Link>
          </li>
        </ul>
        <p className="copyright">
          &copy; تمامی حق و حقوق این وب سایت به تولیدی پوشاک ملینا ترشیز تعلق
          دارد. هرگونه کپی برداری پیگرد قانونی دارد.
        </p>
        <p className="copyright">تابستان ۱۳۹۹</p>
        <p className="copyright"> ۰.۳.۰</p>
      </footer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    routeto: state.entities.bugs.sidebar.routeto,
    submited: state.entities.users.submited,
  };
};

export default connect(mapStateToProps)(Footer);
