import {
  MapContainer,
  TileLayer,
  ZoomControl,
  Popup,
  Marker,
} from "react-leaflet";
import React, { useState } from "react";
import "./Css/mapView.scss";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";

function MapView(props) {
  const [isOnTablet, setIsOnTablet] = useState(false);
  const [isOnDesktop, setIsOnDesktop] = useState(true);
  const { locationArrey } = props;

  let listviewClass = "list-view";
  let tabletIconClass = "icon is-medium";
  let desktopIconClass = "icon is-medium";
  if (isOnTablet) {
    listviewClass += " is-on-tablet";
    tabletIconClass += " is-rotate-180";
  }
  if (isOnDesktop) {
    listviewClass += " is-on-desktop";
    desktopIconClass += " is-rotate-180";
  }

  const markerMap = locationArrey.map((location) => {
    const {
      project_id,
      project_name,
      project_latitude,
      project_longitude,
      user_idcard,
    } = location;
    let title = project_name;

    return (
      <Marker
        key={`${project_id}-${user_idcard}`}
        position={[+project_latitude, project_longitude]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>{title}</Popup>
      </Marker>
    );
  });

  return (
    <div className={listviewClass}>
      <div className="list-view__menu">
        <div
          className="list-view__menu-item list-view__switch is-hidden-desktop"
          onClick={(_) => setIsOnTablet((prev) => !prev)}
        >
          <span className={tabletIconClass}>
            <i className="fas fa-angle-double-right fa-lg"></i>
          </span>
        </div>
        <div
          className="list-view__menu-item list-view__switch is-hidden-touch"
          onClick={(_) => setIsOnDesktop((prev) => !prev)}
        >
          <span className={desktopIconClass}>
            <i className="fas fa-angle-double-right fa-lg"></i>
          </span>
        </div>
      </div>

      <div className="map-view__container">
        <MapContainer
          className="map-view"
          center={[13, 100]}
          zoom={7}
          scrollWheelZoom={true}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomControl position="topright" />
          {markerMap}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapView;
