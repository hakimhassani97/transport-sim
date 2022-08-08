import {
	Marker, Popup,
} from 'react-leaflet';
import IconStation from './IconStation';

function Stations({ stations, passengers }) {
	return (
		stations.map((s, i) => (
			<Marker key={s.name} position={s} icon={IconStation}>
				<Popup>
					<div>
						Station
						{' '}
						{s.name}
					</div>
					<div>
						Passengers :
						{' '}
						{passengers[i]}
					</div>
				</Popup>
			</Marker>
		))
	);
}

export default Stations;
