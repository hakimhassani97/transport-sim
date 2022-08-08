import L from 'leaflet';
import icon from '../Images/station.png';

const IconStation = new L.Icon({
	iconUrl: icon,
	iconRetinaUrl: icon,
	// iconAnchor: null,
	// popupAnchor: null,
	// shadowUrl: null,
	// shadowSize: null,
	// shadowAnchor: null,
	iconSize: new L.Point(60 * 0.5, 75 * 0.5),
});

export default IconStation;
