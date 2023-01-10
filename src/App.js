import { useState } from "react";
import "./App.scss";
// import Footer from "./Components/Footer";
import Header from "./Components/Header";
import IPCard from "./Components/IPCard";
import MapView from "./Components/MapView";

function App() {
  const [ipDetail, setIpDetail] = useState(null);
  const onIpSubmit = (ip) => {
    if (ip) {
      fetchIpAddressDetail(ip);
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
        const { code, messages } = data;
        if (code) alert(`Code: ${code}\n${messages}`);
        else {
          setIpDetail(data);
        }
      });
  };
  return (
    <main className="App">
      <Header onIpSubmit={onIpSubmit} />
      <div className="card-wrapper">
        <IPCard label="IP ADDRESS">{ipDetail?.ip}</IPCard>
        <IPCard label="Location">
          {ipDetail?.location.city}, {ipDetail?.location.country},{" "}
          {ipDetail?.location.postalCode}
        </IPCard>
        <IPCard label="Timezone">UTC{ipDetail?.location.timezone}</IPCard>
        <IPCard label="ISP">{ipDetail?.isp}</IPCard>
      </div>
      <MapView addMarker={ipDetail?.location} />
      {/* <Footer /> */}
    </main>
  );
}

export default App;
