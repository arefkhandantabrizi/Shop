import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bugAdded } from "../store/bugs";

class SideBar extends Component {
  handleClick = ({ currentTarget: sidenav }) => {
    const { id } = sidenav;
    const simple = "side-nav__item";
    const activeClass = this.props.activeClass;

    switch (id) {
      case "jacket":
        let Class1 = this.props.class1;
        if (this.props.activeClass !== id) {
          Class1 += " side-nav__item--active";
          this.props.bugAdded({
            routeto: "/order-jacket",
            activeClass,
            class1: Class1,
            class2: simple,
            class3: simple,
            class4: simple,
          });
        }

        break;

      case "pants":
        let Class2 = this.props.class2;
        if (this.props.activeClass !== id) {
          Class2 += " side-nav__item--active";
          this.props.bugAdded({
            routeto: "/order-pants",
            activeClass,
            class1: simple,
            class2: Class2,
            class3: simple,
            class4: simple,
          });
        }
        break;

      case "shirt":
        let Class3 = this.props.class3;
        if (this.props.activeClass !== id) {
          Class3 += " side-nav__item--active";
          this.props.bugAdded({
            routeto: "/order-shirt",
            activeClass,
            class1: simple,
            class2: simple,
            class3: Class3,
            class4: simple,
          });
        }

        break;

      case "scarf":
        let Class4 = this.props.class4;
        if (this.props.activeClass !== id) {
          Class4 += " side-nav__item--active";
          this.props.bugAdded({
            routeto: "/order-scarf",
            activeClass,
            class1: simple,
            class2: simple,
            class3: simple,
            class4: Class4,
          });
        }
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div className="sidebar">
        <ul className="side-nav">
          {this.props.gender === "Female" && (
            <li
              id="jacket"
              onClick={this.handleClick}
              className={this.props.class1}
            >
              <Link className="side-nav__link" to="/order-jacket">
                مانتو
              </Link>
            </li>
          )}

          {this.props.gender === "Male" && (
            <li
              onClick={this.handleClick}
              id="shirt"
              className={this.props.class3}
            >
              <Link className="side-nav__link" to="/order-shirt">
                بلوز
              </Link>
            </li>
          )}
          <li
            onClick={this.handleClick}
            id="pants"
            className={this.props.class2}
          >
            <Link className="side-nav__link" to="/order-pants">
              شلوار
            </Link>
          </li>
          {this.props.gender === "Female" && (
            <li
              onClick={this.handleClick}
              id="scarf"
              className={this.props.class4}
            >
              <Link className="side-nav__link" to="/order-scarf">
                مقنعه
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeClass: state.entities.bugs.sidebar.activeClass,
    routeto: state.entities.bugs.sidebar.routeto,
    class1: state.entities.bugs.sidebar.class1,
    class2: state.entities.bugs.sidebar.class2,
    class3: state.entities.bugs.sidebar.class3,
    class4: state.entities.bugs.sidebar.class4,
    gender: state.entities.users.data.gender,
  };
};

export default connect(mapStateToProps, { bugAdded })(SideBar);
