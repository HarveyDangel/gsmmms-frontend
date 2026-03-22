import Card from "./ui/card";
import { BarGraph } from "./ui/barGraph";
import MyPieChart from "./ui/pieChart";


export default function Dashboard() {
	return (
		<div>
			<h1 className="text-2xl font-bold">Dashboard</h1>
			<div className="grid grid-cols-4 gap-4 mt-4 [&_div]:shadow [&_div]:p-4">
				<Card>Provice</Card>
				<Card>Municipality</Card>
				<Card>Barangay</Card>
				<Card>Population</Card>
			</div>
			<br />
			<div className="w-full grid grid-cols-4 gap-4">
				<div className="col-span-3">
					<BarGraph/>
				</div>
				<div>
					<MyPieChart/>
				</div>
			</div>
		</div>
	);
}
