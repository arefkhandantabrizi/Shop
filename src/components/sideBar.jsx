import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <Link className="side-nav__link" to="/order-manto">
            مانتو
          </Link>
        </li>
        <li className="side-nav__item">
          <Link className="side-nav__link" to="#">
            شلوار
          </Link>
        </li>
        <li className="side-nav__item">
          <Link className="side-nav__link" to="#">
            بلوز
          </Link>
        </li>
        <li className="side-nav__item">
          <Link className="side-nav__link" to="#">
            مقنعه
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
