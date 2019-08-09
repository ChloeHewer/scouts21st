import * as React from "react";
import styles from "./header.module.scss";
import scoutsWhiteLogo from "../../assets/logos/scoutsWhite.png";

export interface IProps {}

export interface IState {}

class Header extends React.Component<IProps, IState> {
  render() {
    return (
      <header className={styles.header}>
        <section>
          <img src={scoutsWhiteLogo} alt="" className={styles.logo} />
          <h1>21st Bristol</h1>
        </section>
        <ul>
          <li>Home</li>
          <li>Scouts</li>
          <li>Cubs</li>
          <li>Beavers</li>
          <li>Volunteer</li>
          <li>Contact</li>
        </ul>
      </header>
    );
  }
}

export default Header;
