import Card from "./ui/card";
import InteractiveMap from "./ui/map";

export default function MapPage() {
	return (
		<>
			<h1 className="text-2xl font-bold">Map</h1>
			<Card className="mt-4 p-2">
				{/* Placeholder for map (Leaflet, Mapbox, etc.) */}
				<InteractiveMap/>
			</Card>
		</>
	);
}
