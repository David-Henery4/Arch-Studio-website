import { MapContainer, TileLayer, Marker, Popup, useMap} from "react-leaflet";


function SetViewOnClick({ coords, activeZoomLevel }) {
  const map = useMap();
  map.setView(coords, activeZoomLevel);
  //
  return null;
}

const Map = ({ centerCoords, activeZoomLevel }) => {
  //
  return (
    <section className="col-start-1 col-end-13 w-full h-[365px] pb-16 smTab:pb-44 smTab:h-[560px] mdTab:col-start-2 mdTab:col-end-12">
      <MapContainer
        id="map-section"
        style={{ height: "100%", width: "100%" }}
        className="h-full w-full relative"
        center={centerCoords}
        zoom={activeZoomLevel}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[32.11579138622649, -96.34709602636889]}>
          <Popup>Main Office</Popup>
        </Marker>
        <SetViewOnClick
          coords={centerCoords}
          activeZoomLevel={activeZoomLevel}
        />
        <Marker position={[35.97417483866054, -83.36125730935075]}>
          <Popup>Office II</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default Map;
