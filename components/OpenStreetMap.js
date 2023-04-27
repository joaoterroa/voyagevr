import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const OpenStreetMap = ({ destination }) => {
  return (
    <div className="h-96 mb-4 w-full">
      <MapContainer
        center={[destination.latitude, destination.longitude]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[destination.latitude, destination.longitude]}>
          <Popup>{destination.name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default OpenStreetMap;
