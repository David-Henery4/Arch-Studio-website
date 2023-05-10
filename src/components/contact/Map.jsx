import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <section className="col-start-1 col-end-13 w-full h-[365px] pb-16 smTab:pb-44 smTab:h-[560px] mdTab:col-start-2 mdTab:col-end-12">
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        className="h-full w-full relative"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default Map;
