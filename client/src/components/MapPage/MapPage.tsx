import './MapPage.css';
import 'leaflet/dist/leaflet.css';
import './FormStyle.css';

import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useForm } from 'react-hook-form';
import useSWR from 'swr';


const MarkerPopup = (props: { setPopUp: any, marker: any }) => {
  const { setPopUp, marker } = props
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit: any = (data: {name: string}) => {
    console.log(data);
    console.log(marker);
    setPopUp(false);
  };

  return (
    <>
      <div className="form-container">
        <div className="form-content">
          <h1>create a new pesticide marker</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input required placeholder='field name' defaultValue="" {...register("name")} />
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
            <button id='cancel-button' onClick={() => setPopUp(false)}>Close</button>
          </form>
        </div>
      </div>
    </>
  );
}

const MapEvents = (props: { setPopUp: any, markers: any[], setMarkers: any }) => {

  const { setPopUp, markers, setMarkers } = props

  const map = useMapEvents({
    click: (e) => {
      const newMarker = {
        position: e.latlng,
        key: `marker-${markers.length}`,
        popup: `Marker ${markers.length + 1}`,
      };
      setMarkers([...markers, newMarker]);
      setPopUp(true)
    },
  });

  return null;
};

export const MapPage = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [newMarkers, setNewMarkers] = useState([]);
  const [popUp, setPopUp] = useState(false)

  // const {} = useSWR()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="map-container">
      <MapContainer center={[31.628674, -7.992047]} zoom={8}
        style={{
          // INFO: inline css is used by the react-leaflet library
          height: '100%',
          width: '100%',
          justifySelf: "center",
          borderRadius: "15px",
          cursor: "pointer",
        }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {newMarkers.map((marker: any) => (
          <Marker key={marker.key} position={marker.position}>
            <Popup>{marker.popup}</Popup>
          </Marker>
        ))}
        <MapEvents setPopUp={setPopUp} markers={newMarkers} setMarkers={setNewMarkers} />
      </MapContainer>
      {popUp && <MarkerPopup setPopUp={setPopUp} marker={newMarkers[newMarkers.length - 1]} />}
    </div>
  )
}
