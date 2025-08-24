'use client';

import Button from "@/app/components/ui/button";
import Card from "@/app/components/ui/card";
import Input from "@/app/components/ui/input";

import { ChangeEvent, FormEvent, useState } from "react";

export default function Login() {
	const [formData, setFormData] = useState({ email: "", password: "" });

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const response = await fetch("/api/login", {
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
				<Card className="shadow-2xl shadow-green-400/50 p-10">
					<h1>Login</h1>
					<p>Please enter your credentials to log in.</p>
					<br />
					<form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
							<label htmlFor="password">Password</label>
							<Input
								type="password"
								id="password"
								name="password"
								placeholder="**********"
                        onChange={handleChange}
							/>
						</div>
						<Button type="submit">Login</Button>
					</form>
				</Card>
			</div>
		</>
	);
}
