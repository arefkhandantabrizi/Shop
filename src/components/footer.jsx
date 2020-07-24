import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footernav">
        <li className="footernav__item">
          <Link to="/login" className="footernav__link">
            ورود به سایت
          </Link>
        </li>
        <li className="footernav__item">
          <Link to="#" className="footernav__link">
            سفارش لباس
          </Link>
        </li>
        <li className="footernav__item">
          <Link to="#" className="footernav__link">
            راهنمای استفاده از سایت
          </Link>
        </li>
        <li className="footernav__item">
          <Link to="#" className="footernav__link">
            ارتباط با ما
          </Link>
        </li>
      </ul>
      <p className="copyright">
        &copy; تمامی حق و حقوق این وب سایت به تولیدی پوشاک ملینا ترشیز تعلق
        دارد. هرگونه کپی برداری پیگرد قانونی دارد.
      </p>
      <p className="copyright">تابستان ۱۳۹۹</p>
    </footer>
  );
};

export default Footer;
