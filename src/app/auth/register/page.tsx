"use client";

import Card from "@/app/components/ui/card";
import Input from "@/app/components/ui/input";
import Button from "@/app/components/ui/button";

import { ChangeEvent, FormEvent, useState } from "react";

export default function Register() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const response = await fetch("/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});
		const result = await response.json();
		console.log(result);
	};

	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-screen">
				<Card className="shadow-2xl shadow-green-400/50 p-10 min-w-sm">
					<h1>Register account</h1>
					<p className="info">Please fill in the form to create an account.</p>
					<br />
					<form onSubmit={handleSubmit} className="flex flex-col gap-5">
						<div className="flex flex-col gap-1">
							<label htmlFor="name">Name</label>
							<Input type="text" id="name" name="name" placeholder="Name" onChange={handleChange} />
						</div>
						<div className="flex flex-col gap-1">
							<label htmlFor="email">Email</label>
							<Input
								type="email"
								id="email"
								name="email"
								placeholder="example@email.com"
                        onChange={handleChange}
							/>
						</div>
						<div className="flex flex-col gap-1">
							<label htmlFor="passsword">Password</label>
							<Input
								type="password"
								id="password"
								name="password"
								placeholder="********"
                        onChange={handleChange}
							/>
						</div>
						<Button type="submit">Sign Up</Button>
					</form>
				</Card>
			</div>
		</>
	);
}
