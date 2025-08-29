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
				<Card className="shadow-2xl shadow-green-400/50 p-10 min-w-sm">
					<h1>Login</h1>
					<p className="info">Please enter your credentials to log in.</p>
					<br />
					<form onSubmit={handleSubmit} className="flex flex-col gap-5">
						
						<Input
							label="email"
							placeholder="example@email.com"
							className="placeholder:text-[14px]"
							type="email"
							id="email"
							name="email"
							onChange={handleChange}
							autoComplete="email"
							required/>

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
					
						<Button type="submit">Login</Button>
					</form>
					<p className="mt-3 info">{`Don't have an account yet?`} <a href="/auth/register" className="hover:underline text-green-500 info">Register Here</a></p>
				</Card>
			</div>
		</>
	);
}
