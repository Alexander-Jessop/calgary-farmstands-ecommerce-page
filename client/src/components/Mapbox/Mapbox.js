import React, { Fragment } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FaStore } from "react-icons/fa";

function Mapbox(props) {
  return (
    <Fragment>
      <Map
        initialViewState={{
          longitude: props.long,
          latitude: props.lat,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        <Marker longitude={props.long} latitude={props.lat} anchor="bottom">
          <FaStore style={{ fontSize: "30px" }} />
        </Marker>
      </Map>
    </Fragment>
  );
}

export default Mapbox;
