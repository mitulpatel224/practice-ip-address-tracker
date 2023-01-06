import React, { useEffect, useState } from "react";

function Header() {
  const [form, setForm] = useState({
    ipAddress: "",
  });
  const [ipAddressError, setipAddressError] = useState(false);

  const handleUserInput = (e) => {
    const value = e.target.value;
    setForm({ ipAddress: value });
  };

  const validateForm = () => {
    const ipAddressValid = form.ipAddress.match(
      /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    );
    return ipAddressValid ? "" : "Invalid IP Address!";
  };

  const submitForm = (event) => {
    setipAddressError(validateForm());
    event.preventDefault();
    if (!ipAddressError) {
      fetchIpAddressDetail(form.ipAddress);
    }
  };

  /**
   * Fetch location details using geo-ipify API call
   * @param {ip} ip ip address
   */
  const fetchIpAddressDetail = (ip) => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IP_API_KEY}&ipAddress=${ip}`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((data) => {
        const { code, messages, location } = data;
        if (code) alert(`Code: ${code}\n${messages}`);
        else {
          console.log(location);
        }
      });
  };

  return (
    <header>
      <h2 className="header-text">IP Address Tracker</h2>
      <form>
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
            onClick={(e) => submitForm(e)}
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
