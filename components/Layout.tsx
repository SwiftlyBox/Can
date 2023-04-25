import React from "react";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <SideBar />
      <div className="main-content">
        {children}
      </div>
    </div>
  )
}

export default Layout
