import useState from "react";

import Card from "./ui/card";
// import Button from "./ui/button";

export default function ChildrenList() {
	return (
		<>
			<Card className="p-4 shadow">
				<table className="w-full border">
					<thead className="[&_th]:border [&_th]:border-gray-700 [&_th]:p-2">
						<tr className="bg-green-600 text-white text-left text-sm">
							<th className="">ID</th>
							<th className="">Name of Child</th>
							{/* <th className="">Name of Caregiver</th> */}
							{/* <th className="">Belong to IP</th> */}
							<th className="">Sex</th>
							{/* <th className="">Date of Birth</th> */}
							<th className="">Date Measured</th>
							<th className="">Age in Months</th>
							<th className="">Weight</th>
							<th className="">Height</th>
							<th className="">Nutritional Status WFA</th>
							<th className="">Nutritional Status HFA</th>
							<th className="">Nutritional Status WFH</th>
						</tr>
					</thead>
					<tbody className="[&_td]:border [&_td]:border-gray-700 [&_td]:p-2 [&_td]:text-sm">
						<tr>
							<td className="">1</td>
							<td className="">Apple, Orange D.</td>
							{/* <td className="">Apple, Mango C.</td> */}
							{/* <td className="">No</td> */}
							<td className="">Male</td>
							{/* <td className="">Jan. 14,2023</td> */}
							<td className="">Jan. 14,2025</td>
							<td className="">24</td>
							<td className="">18 kg.</td>
							<td className="">132 cm.</td>
							<td className="">Normal</td>
							<td className="">Normal</td>
							<td className="">Normal</td>
						</tr>
					</tbody>
				</table>
			</Card>
		</>
	);
}
