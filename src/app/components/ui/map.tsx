"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Next.js
// const icon = L.icon({ iconUrl: "/marker-icon.png" }); 

export default function InteractiveMap() {
  const position: [number, number] = [11.576, 124.4753 ];

  return (
    <div className="h-110 w-full rounded-lg overflow-hidden z-0">
      <MapContainer center={position} zoom={11} scrollWheelZoom={true} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap|MMSGSM</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> */}
        </Marker>
      </MapContainer>
    </div>
  );
}