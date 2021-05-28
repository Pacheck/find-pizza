import { useState } from "react";

import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";

import SideBar from "../SideBar";
import { TileLayer, Popup, useMapEvents, useMap } from "react-leaflet";

import "./index.css";

import { Container, CustomizedMap, CustomizedMarker } from "./styles";
interface HotChocolate {
  productName: string;
  englishProductName: string;
  vendor: string;
  location: string;
  lat: number;
  lon: number;
  description?: string;
}

const list: HotChocolate[] = [
  {
    productName: "Varm belgisk sjokolade",
    englishProductName: "Belgian hot chocolate",
    vendor: "Steam kaffebar",
    location: "Jernbanetorget 1, Østbanehallen",
    lat: 59.91088362120013,
    lon: 10.752799203777597,
  },
  {
    productName: "Varm sjokolade",
    englishProductName: "Hot chocolate",
    vendor: "Kaffebrenneriet",
    location: "Karl Johans gate 7, Arkaden",
    lat: 59.91181003626315,
    lon: 10.747782602301388,
  },
  {
    productName: "Sjokolade på pinne",
    englishProductName: "Hot chocolate on a stick",
    vendor: "Espresso House",
    location: "Jernbanetorget 1, Østbanehallen",
    lat: 59.91201090441835,
    lon: 10.751298468298101,
    description: "Seasonally available",
  },
];

const Map = () => {
  const [position, setPosition] = useState<LatLngExpression>([
    41.89397177663592, 12.48252868652344,
  ]);
  const zoom: number = 15;

  function HandleLocationMarker() {
    const map = useMapEvents({
      click(event) {
        // const data = map.getCenter();
        // console.log(event.latlng);
        // map.on("click", (e: any) => console.log(e.latlng));
        setPosition(Object.values(event.latlng) as LatLngExpression);
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    const icon: L.DivIcon = L.divIcon({
      className: "hot-chocolate-icon",
      iconSize: [30, 30],
      iconAnchor: [0, 0],
      popupAnchor: [15, 0],
    });

    return position === null ? null : (
      <CustomizedMarker position={position}>
        <Popup>You are here</Popup>
      </CustomizedMarker>
    );
  }

  return (
    <Container>
      <SideBar location={position} />
      <CustomizedMap center={position} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <HandleLocationMarker />

        {/* <Marker
        position={[59.90757, 10.753253]}
        icon={icon}
        key={Math.random()}
        title="Pizza"
      >
        <Popup>Pizza glub glub</Popup>
      </Marker>

      {list.map((item, index) => (
        <Marker
          icon={icon}
          key={index}
          position={[item.lat, item.lon]}
          title={`${item.englishProductName} at ${item.vendor}`}
        >
          <Popup>
            <strong>
              {item.englishProductName} at {item.vendor}
            </strong>
            <br />
            <p>
              Look for <strong>{item.productName}</strong> on the menu.
            </p>
            <p>{item.location}</p>
            {item.description && <em>{item.description}</em>}
          </Popup>
        </Marker>
      ))} */}
      </CustomizedMap>
    </Container>
  );
};

export default Map;
