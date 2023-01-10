import React, { useEffect } from "react";

let map;
let marker;

/**
 * Map layout component
 * @returns Map layout
 */
function MapView({ addMarker }) {
  /** Extract Leaflet object */
  const { L } = window;

  useEffect(() => {
    if ((addMarker, map)) {
      const { lat, lng } = addMarker;
      console.log(addMarker);
      marker = L.marker([lat, lng]).addTo(map);
      console.log(marker);
      map.setView([lat, lng], 13);
    }
    return () => {};
  }, [addMarker]);

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
