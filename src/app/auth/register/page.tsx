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

	const [error, setError] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === 'password') {
      if (e.target.value.length < 8) {
        setError('Password must be 8 character');
      } else {
        setError('');
      }
    }

		if (e.target.name === "password2") {
			if (e.target.value !== formData.password) {
				setError("Passwords do not match");
			} else {
				setError("");
			}
		}
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
				<Card className="p-10 min-w-sm">
					<h1>Register account</h1>
					<p className="info">Please fill in the form to create an account.</p>
					<br />
					<form onSubmit={handleSubmit} className="flex flex-col gap-5 [&_input]:bg-gray-100">
            {/* CSRF */}
						<Input
							label="name"
							placeholder="Juan Dela Cruz"
							className="placeholder:text-[14px] "
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
							required
						/>
            {error && <p className="text-red-500 text-sm -mt-4">{error}</p>}

						<Input
							label="confirm password"
							placeholder="••••••••"
							className="placeholder:text-gray-400 placeholder:tracking-widest"
							type="password"
							id="password2"
							name="password2"
							onChange={handleChange}
							autoComplete="current-password"
							required
						/>
						{error && <p className="text-red-500 text-sm -mt-4">{error}</p>}
						<Button type="submit">Sign Up</Button>
					</form>

					<p className="mt-3 info">
						{`Already have an account?`}{" "}
						<a
							href="/auth/login"
							className="hover:underline text-green-500 info"
						>
							Login Here
						</a>
					</p>
				</Card>
			</div>
		</>
	);
}


// "use client";

// import Card from "@/app/components/ui/card";
// import Input from "@/app/components/ui/input";
// import Button from "@/app/components/ui/button";

// import { useForm } from "react-hook-form";

// export default function Register() {
//   // initialize the form
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       name: "",
//       email: "",
//       password: "",
//       password2: "",
//     },
//   });

//   // watch password for confirm password validation
//   const password = watch("password");

//   const onSubmit = async (data: any) => {
//     const response = await fetch("/api/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();
//     console.log(result);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <Card className="p-10 min-w-sm">
//         <h1>Register account</h1>
//         <p className="info">Please fill in the form to create an account.</p>
//         <br />

//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="flex flex-col gap-5 [&_input]:bg-gray-100"
//         >
//           {/* Name */}
//           <Input
//             label="name"
//             placeholder="Juan Dela Cruz"
//             className="placeholder:text-[14px]"
//             type="text"
//             {...register("name", { required: "Full name is required" })}
//             autoComplete="name"
//           />
//           {errors.name && (
//             <p className="text-red-500 text-sm -mt-4">{errors.name.message}</p>
//           )}

//           {/* Email */}
//           <Input
//             label="email"
//             placeholder="example@email.com"
//             className="placeholder:text-[14px]"
//             type="email"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^\S+@\S+$/i,
//                 message: "Invalid email format",
//               },
//             })}
//             autoComplete="email"
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm -mt-4">{errors.email.message}</p>
//           )}

//           {/* Password */}
//           <Input
//             label="password"
//             placeholder="••••••••"
//             className="placeholder:text-gray-400 placeholder:tracking-widest"
//             type="password"
//             {...register("password", {
//               required: "Password is required",
//               minLength: {
//                 value: 6,
//                 message: "Password must be at least 6 characters",
//               },
//             })}
//             autoComplete="current-password"
//           />
//           {errors.password && (
//             <p className="text-red-500 text-sm -mt-4">
//               {errors.password.message}
//             </p>
//           )}

//           {/* Confirm Password */}
//           <Input
//             label="confirm password"
//             placeholder="••••••••"
//             className="placeholder:text-gray-400 placeholder:tracking-widest"
//             type="password"
//             {...register("password2", {
//               required: "Please confirm your password",
//               validate: (value) =>
//                 value === password || "Passwords do not match",
//             })}
//             autoComplete="current-password"
//           />
//           {errors.password2 && (
//             <p className="text-red-500 text-sm -mt-4">
//               {errors.password2.message}
//             </p>
//           )}

//           <Button type="submit">Sign Up</Button>
//         </form>

//         <p className="mt-3 info">
//           Already have an account?{" "}
//           <a href="/auth/login" className="hover:underline text-green-500 info">
//             Login Here
//           </a>
//         </p>
//       </Card>
//     </div>
//   );
// }
