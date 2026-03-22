import Card from "./ui/card";
import Input from "./ui/input";
import Foreground from "./ui/foreground";
import Button from "./ui/button";

export default function AddChild() {
	return (
		<>
			<Foreground>
				<h2 className="mb-4">Add Child</h2>
				<form action="" className="grid grid-cols-2 gap-4">
					<Card className="p-4 [&_input]:mb-4">
						<h5 className="mb-3">Personal Information</h5>
						<Input
							label="Name of child"
							placeholder="Juan Dela Cruz"
							className=""
							type="text"
							id="name-of-child"
							name="name-of-child"
							required
						/>
						<Input
							label="Name of Caregiver"
							placeholder="Juan Dela Cruz"
							className=""
							type="text"
							id="name-of-caregiver"
							name="name-of-caregiver"
							required
						/>
						<Input
							label="Date of Birth"
							placeholder=""
							className=""
							type="date"
							id="date-of-birth"
							name="date-of-birth"
							required
						/>
					</Card>
					<Card className="p-4 [&_input]:mb-4">
						<h5 className="mb-3">Health Information</h5>
						<Input
							label="Weight"
							placeholder="00.0kg."
							className=""
							type="number"
							id="weight"
							name="weight"
							required
						/>
						<Input
							label="Height"
							placeholder="000.0cm."
							className=""
							type="number"
							id="weight"
							name="weight"
							required
						/>
						<Input
							label="Date Measured"
							placeholder=""
							className=""
							type="date"
							id="date-measured"
							name="date-measured"
							required
						/>
					</Card>
					<Button className={``}>Save</Button>
				</form>
			</Foreground>
		</>
	);
}
