import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideBar extends Component {
  state = {
    Class1: "side-nav__item side-nav__item--active",
    Class2: "side-nav__item",
    Class3: "side-nav__item",
    Class4: "side-nav__item",
    activeClass: "Class1",
  };

  handleClick = ({ currentTarget: sidenav }) => {
    const { id } = sidenav;
    const simple = "side-nav__item";
    const activeClass = this.state.activeClass;

    switch (id) {
      case "pants":
        let Class2 = this.state.Class2;
        if (activeClass !== "Class2") Class2 += " side-nav__item--active";
        this.setState({
          Class2,
          Class1: simple,
          Class3: simple,
          Class4: simple,
          activeClass: "Class2",
        });
        break;
      case "jacket":
        let Class1 = this.state.Class1;
        if (activeClass !== "Class1") Class1 += " side-nav__item--active";
        this.setState({
          Class2: simple,
          Class1,
          Class3: simple,
          Class4: simple,
          activeClass: "Class1",
        });
        break;
      case "shirt":
        let Class3 = this.state.Class3;
        if (activeClass !== "Class3") Class3 += " side-nav__item--active";
        this.setState({
          Class2: simple,
          Class1: simple,
          Class3,
          Class4: simple,
          activeClass: "Class3",
        });
        break;
      case "scarf":
        let Class4 = this.state.Class4;
        if (activeClass !== "Class4") Class4 += " side-nav__item--active";
        this.setState({
          Class2: simple,
          Class1: simple,
          Class3: simple,
          Class4,
          activeClass: "Class4",
        });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div className="sidebar">
        <ul className="side-nav">
          <li
            id="jacket"
            onClick={this.handleClick}
            className={this.state.Class1}
          >
            <Link className="side-nav__link" to="/order-jacket">
              مانتو
            </Link>
          </li>
          <li
            onClick={this.handleClick}
            id="pants"
            className={this.state.Class2}
          >
            <Link className="side-nav__link" to="#">
              شلوار
            </Link>
          </li>
          <li
            onClick={this.handleClick}
            id="shirt"
            className={this.state.Class3}
          >
            <Link className="side-nav__link" to="#">
              بلوز
            </Link>
          </li>
          <li
            onClick={this.handleClick}
            id="scarf"
            className={this.state.Class4}
          >
            <Link className="side-nav__link" to="#">
              مقنعه
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
