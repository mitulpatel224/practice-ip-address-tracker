import "./App.scss";
// import Footer from "./Components/Footer";
import Header from "./Components/Header";
import IPCard from "./Components/IPCard";
import MapView from "./Components/MapView";

function App() {
  return (
    <main className="App">
      <Header />
      <div className="card-wrapper">
        <IPCard label="IP ADDRESS">123.123.123.123</IPCard>
        <IPCard label="Location">Brooklyn, NY 10001</IPCard>
        <IPCard label="Timezone">UTC-50:00</IPCard>
        <IPCard label="ISP">SpaceX Starlink</IPCard>
      </div>
      <MapView />
      {/* <Footer /> */}
    </main>
  );
}

export default App;
