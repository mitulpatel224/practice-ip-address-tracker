import React, { useRef, useEffect } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

function MapView() {
  const key = process.env.REACT_APP_GMAP_API_KEY;
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 8;
  return (
    <div className="map-wrapper">
      <Wrapper apiKey={key} render={render}>
        <MyMapComponent center={center} zoom={zoom} />
      </Wrapper>
    </div>
  );
}

/**
 * Create Map view
 * @param {center, zoom} param0 Map configurations
 * @returns Map View
 */
function MyMapComponent({ center, zoom }) {
  const ref = useRef();

  useEffect(() => {
    console.log(process.env.REACT_APP_GMAP_API_KEY)
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  });

  return <div ref={ref} id="map" />;
}

export default MapView;
