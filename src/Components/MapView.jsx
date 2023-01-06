import React, { useEffect } from "react";

/**
 * Map layout component
 * @returns Map layout
 */
function MapView() {
  /** Extract Leaflet object */
  const { L } = window;

  let map;

  useEffect(() => {
    // create map view
    map = L.map("map").setView([51.505, -0.09], 13);

    // load map layer
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    return () => {
      map.remove(); // remove map instance
    };
  }, []);

  return <div id="map"></div>;
}

export default MapView;
