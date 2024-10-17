import React from "react";
import styles from "./navBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navBarContainer}>
      <div className={styles.navBarContent}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logoImage}
            src="/images/logo.png"
            alt="Company logo"
          />
        </div>
        <div className={styles.userProfileContainer}>
          <img
            className={styles.userProfileImage}
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User Profile"
          />
          <div>
            <h1 className={styles.text}>David Cooper</h1>
            <h1 className={styles.text}>Calicut</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
