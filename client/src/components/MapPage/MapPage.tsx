import './MapPage.css';
import 'leaflet/dist/leaflet.css';
import './FormStyle.css';

import IconUrl from 'leaflet/dist/images/marker-icon.png';
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png';

import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import { MarkerType } from '../../types/MarkerType';
import { fetchAllMarkers, postMarker } from '../../services/Feilds/feild_marker_fetcher';
import useSWRMutation from 'swr/mutation';
import { Icon } from 'leaflet';


const defaultIcon = new Icon({
  iconUrl: IconUrl,
  // iconRetinaUrl: IconRetinaUrl,
  shadowUrl: MarkerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

const MarkerPopup = (props: { setPopUp: Function, newMarker: any }) => {
  const { setPopUp, newMarker } = props
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { trigger: changePhotoTrigger } = useSWRMutation('marker', postMarker);

  if (newMarker === null) {
    setPopUp(false)
    return;
  }
  const onSubmit: any = (data: { name: string }) => {
    const marker: MarkerType = {
      id: newMarker.id,
      name: data.name,
      lat: newMarker.position.lat,
      lng: newMarker.position.lng,
      desc: "dont have the desc yet",
    }
    console.log(marker);
    changePhotoTrigger(marker);
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

const MapEvents = (props: { setPopUp: Function, markers: MarkerType[], setNewMarker: Function }) => {
  const { setPopUp, setNewMarker, markers } = props

  const map = useMapEvents({
    click: (e) => {
      const newMarker = {
        position: e.latlng,
        key: `marker-${markers.length}`,
        popup: "",
      };
      setNewMarker(newMarker)
      setPopUp(true)
    },
  });

  return null;
};

export const MapPage = () => {
  const [isMounted, setIsMounted]: [boolean, Function] = useState(false)
  const [popUp, setPopUp]: [boolean, Function] = useState(false)
  const [newMarker, setNewMarker]: [MarkerType | null, Function] = useState(null)

  const { data: markers, error, isLoading } = useSWR('marker', fetchAllMarkers)


  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
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
        {markers.map((marker: MarkerType) => (
          <Marker key={marker.id} icon={defaultIcon} position={{ lat: marker.lat, lng: marker.lng }}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
        <MapEvents setPopUp={setPopUp} markers={markers} setNewMarker={setNewMarker} />
      </MapContainer>
      {popUp && <MarkerPopup setPopUp={setPopUp} newMarker={newMarker} />}
    </div>
  )
}
