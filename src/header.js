import React from "react";
import "./header.css";

function Header({ children }) {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grip">
          <div>
            <h1>Classroom Panel</h1>
            <p className="header-total">Mecatrónica 2</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
