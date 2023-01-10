import React, { useState } from "react";

function Header({ onIpSubmit }) {
  const [form, setForm] = useState({
    ipAddress: "",
  });
  const [ipAddressError, setIpAddressError] = useState(false);

  const handleUserInput = (e) => {
    const value = e.target.value;
    setForm({ ipAddress: value });
  };

  const validateForm = async () => {
    const ipAddressValid = form.ipAddress.match(
      /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    );
    return ipAddressValid ? "" : "Invalid IP Address!";
  };

  const submitForm = async (event) => {
    event.preventDefault();
    validateForm().then((data) => {
      setIpAddressError(data);
      if (!data) {
        onIpSubmit(form.ipAddress);
      }
    });
  };

  return (
    <header>
      <h2 className="header-text">IP Address Tracker</h2>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <input
            type="text"
            name="ipAddress"
            placeholder="Search for any IP address or domain"
            className={`form-control ${
              ipAddressError && "form-control-invalid"
            }`}
            value={form.ipAddress}
            onChange={handleUserInput}
          />
          <button
            className="btn btn-primary"
            type="submit"
            // onClick={(e) => submitForm(e)}
          >
            <span className="icon-arrow-right"></span>
          </button>
        </div>
        <div className="form-control-error">{ipAddressError}</div>
      </form>
    </header>
  );
}

export default Header;
