import L from 'leaflet';
import icon from '../Images/bus.png';

const IconBus = new L.Icon({
	iconUrl: icon,
	iconRetinaUrl: icon,
	iconAnchor: null,
	popupAnchor: null,
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(60 * 0.7, 75 * 0.7),
});

export default IconBus;
