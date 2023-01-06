import React from "react";

function Header() {
  return (
    <header>
      <h2 className="header-text">IP Address Tracker</h2>
      <div className="form-group">
        <input
          type="text"
          name="ipAddress"
          placeholder="Search for any IP address or domain"
        />
        <button className="btn btn-primary" type="submit">
          <span className="icon-arrow-right"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
