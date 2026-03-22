import Card from "./ui/card";

export default function MapPage() {
	return (
		<>
			<div>
				<h1 className="text-2xl font-bold">Map</h1>
				<Card className="mt-4 p-4 h-110">
					{/* Placeholder for map (Leaflet, Mapbox, etc.) */}
					Map goes here
				</Card>
			</div>
		</>
	);
}
