import { useEffect, useState } from 'react';
import {
	Polyline,
} from 'react-leaflet';
import ReactLeafletDriftMarker from 'react-leaflet-drift-marker';
import IconBus from './IconBus';

function Path({ positions }) {
	const limeOptions = { color: 'lime' };
	const each = 6000; // 6 seconds

	const [busPosition, setBusPosition] = useState(0);

	const updatePosition = () => {
		setBusPosition((curr) => {
			let pos;
			if (curr + 1 < positions.length) {
				pos = curr + 1;
			} else {
				pos = 0;
			}
			return pos;
		});
	};

	useEffect(() => {
		const interval = setInterval(updatePosition, each);

		return () => {
			clearInterval(interval);
		};
	}, []);

	// const sum = positions.reduce((a, b) => [a[0] + b[0], a[1] + b[1]], [0, 0]);
	// const mean = [sum[0] / positions.length, sum[1] / positions.length];
	// const center = { lat: mean[0], lng: mean[1] };
	// map.flyTo(center, map.getZoom());

	return (
		<>
			<ReactLeafletDriftMarker position={positions[busPosition]} duration={each} icon={IconBus} />
			<Polyline pathOptions={limeOptions} positions={positions} />
		</>
	);
}

export default Path;
