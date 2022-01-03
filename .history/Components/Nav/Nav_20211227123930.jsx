import React from "react";
import { withRouter } from "next/router";
import styles from "./Nav.module.css";
import Search from "./Search/Search";
const logo = require("../../public/Assets/solvent.svg");
import Account from "./UserAccount/Account";
import Link from "next/link";
import DropDown from "./DropDown/DropDown";
import BurgerMenu from "../BurgerMenu";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shownMenu: false,
    };
    this.menuRef = React.createRef();
    this.buttonRef = React.createRef();
  }
  handleShowMenu = (e) => {
    const newVal = !this.state.shownMenu;

    this.setState({ shownMenu: newVal }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };
  closeMenu = (e) => {
    const menu = this.menuRef;
    const button = this.buttonRef;

    if (button && e.target.className !== button.current.className) {
      this.setState({ shownMenu: false });
    }
  };
  handleActiveLink = () => {
    console.log(this.props);
    // if (
    //   window.location.pathname.includes("WebDev") ||
    //   window.location.pathname.includes("Crypto") ||
    //   window.location.pathname.includes("BooksAndResources")
    // )
    return {
      color: "#01DFD3",
      fontWeight: "9000",
    };
    // else return {};
  };
  componentDidMount() {
    document.addEventListener("click", this.closeMenu);
    this.handleActiveLink();
  }

  render() {
    return (
      <nav className={styles.Nav}>
        <Link href="/">
          <img className={styles.logo} src={logo} alt="Logo" />
        </Link>
        <ul>
          <li className={styles.outerMenu}>
            <ul className={styles.innerMenu}>
              <li
                className={styles.MenuButton}
                onClick={this.handleShowMenu}
                ref={this.buttonRef}
                style={this.handleActiveLink()}
              >
                Web Dev &#11206;
              </li>
              {this.state.shownMenu ? <DropDown ref={this.menuRef} /> : null}
            </ul>
          </li>
          <Link href="/Crypto" style={this.handleActiveLink()}>
            <li>Crypto Currency</li>
          </Link>
          <Link href="/BooksAndResources" style={this.handleActiveLink()}>
            <li>Books and resources</li>
          </Link>
        </ul>
        <Search />
        <Account />
        <BurgerMenu />
      </nav>
    );
  }
}

export default withRouter(Nav);
