'use client';

import { useState } from "react";

// import Card from "./ui/card";
import Button from "./ui/button";
import ChildrenList from "./childrenList";
import AddChild from "./addChild";


export default function Children() {
const [showAdd, setShowAdd] = useState(false);


	return (
		<>
			<div>	
				<h1 className="font-bold mb-4">Children</h1>
				{!showAdd ? ( 
					<>
					<Button className={`mb-4`} onClick={() => setShowAdd(true)}>Add Child</Button>
					<ChildrenList/>

					</>
				 ) : (
					<>
						<Button className={`mb-4`} onClick={() => setShowAdd(false)}>Back</Button>
						<AddChild />
					</>
				 )}
			</div>
		</>
	);
}
