import React from "react";
import "./Header.css";

const Header = ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="netflix-logo"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
            alt="user-logo"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
