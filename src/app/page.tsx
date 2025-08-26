"use client";

import { CLIENT_STATIC_FILES_RUNTIME_AMP } from "next/dist/shared/lib/constants";
// import { useEffect, useState } from "react";
// import axios from "axios";

import Hero from "./components/hero";
import Navigation from "./components/navigation";
import Button from "./components/ui/button";

export default function Home() {
	// const [message, setMessage] = useState("");

	// useEffect(() => {
	//   axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/test`, {
	//     withCredentials: true
	//   })
	//   .then(res => setMessage(res.data.message))
	//   .catch(console.error);
	// }, []);

	return (
		<>
			<div className="flex flex-col items-center mx-auto min-h-screen">
        <Navigation>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Contact</a>
          <Button><a href={`/auth/register`}>Sign Up</a></Button>
        </Navigation>
				<Hero />
        
			</div>
		</>
	);
}
