import React from "react";
import NavBar from "../navBar/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="top-0 sticky">
        <NavBar />
      </div>
      {children}
    </div>
  );
};

export default Layout;
