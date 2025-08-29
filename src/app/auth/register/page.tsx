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
		password2: "",
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

						<Input
							label="name"
							placeholder="Juan Dela Cruz"
							className="placeholder:text-[14px]"
							type="text"
							id="name"
							name="name"
							onChange={handleChange}
							autoComplete="name"
							required
							/>

						<Input
							label="email"
							placeholder="example@email.com"
							className="placeholder:text-[14px]"
							type="email"
							id="email"
							name="email"
							onChange={handleChange}
							autoComplete="email"
							required
							/>

						<Input
							label="password"
							placeholder="••••••••"
							className="placeholder:text-gray-400 placeholder:tracking-widest"
							type="password"
							id="password"
							name="password"
							onChange={handleChange}
							autoComplete="current-password"
							required/>

						<Input
							label="confirm password"
							placeholder="••••••••"
							className="placeholder:text-gray-400 placeholder:tracking-widest"
							type="password"
							id="confirm password"
							name="confirm password"
							onChange={handleChange}
							autoComplete="current-password"
							required/>

						<Button type="submit">Sign Up</Button>
					</form>

					<p className="mt-3 info">{`Already have an account?`} <a href="/auth/login" className="hover:underline text-green-500 info">Login Here</a></p>
				</Card>
			</div>
		</>
	);
}
