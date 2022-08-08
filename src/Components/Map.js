import { useState } from 'react';
import {
	MapContainer, TileLayer, Marker, Popup, useMapEvents,
} from 'react-leaflet';
import Path from './Path';
import { path1, stations } from '../Data/Data';
import Stations from './Stations';

function LocationMarker() {
	const [position, setPosition] = useState(null);

	const map = useMapEvents({
		click() {
			map.locate();
		},
		locationfound(e) {
			setPosition(e.latlng);
			map.flyTo(e.latlng, map.getZoom());
		},
	});

	return position === null ? null : (
		<Marker position={position}>
			<Popup>You are here</Popup>
		</Marker>
	);
}

function Map() {
	const [passengers, setPassengers] = useState(stations.map(() => 0));
	const center = {
		lat: 48.78166783486849,
		lng: 2.2153474224385263,
	};

	return (
		<MapContainer
			style={{ width: '100%', height: '100vh' }}
			center={center}
			zoom={17}
			scrollWheelZoom
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{/* <LocationMarker /> */}
			<Stations stations={stations} passengers={passengers} />
			<Path positions={[...path1]} />
		</MapContainer>
	);
}

export default Map;
