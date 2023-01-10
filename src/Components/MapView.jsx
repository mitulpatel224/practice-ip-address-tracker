import React, { useEffect } from "react";
import iconMarker from "../assets/images/icon-location.svg";
let map;
let marker;
let markerIcon;

/**
 * Map layout component
 * @returns Map layout
 */
function MapView({ addMarker }) {
  /** Extract Leaflet object */
  const { L } = window;
  markerIcon = L.icon({
    iconUrl: iconMarker,
    iconSize: [, 27],
  });

  useEffect(() => {
    if ((addMarker, map)) {
      const { lat, lng } = addMarker;
      if (marker) marker.remove();
      marker = L.marker([lat, lng], { icon: markerIcon }).addTo(map);
      map.flyTo([lat, lng], 15);
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
