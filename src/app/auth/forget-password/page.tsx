"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import Button from "@/app/components/ui/button";
import Card from "@/app/components/ui/card";
import Input from "@/app/components/ui/input";

export default function ForgetPasswordPage() {
   const [formData, setFormData] = useState({ email: "" });
   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   }

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const response = await fetch("/api/forget-password", { 
         method : "POST",
         headers : {
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
               <h1>Forget Password</h1>
               <p className="info">Enter your email to recieve the verification code</p>
               <br />
               <form action="" className="flex flex-col gap-5">
                  <Input
                     label="Email"
                     placeholder="example@email.com"
                     className="placeholder:text-[14px]"
                     type="email"
                     id="email"
                     name="email"
                     onChange={(e: ChangeEvent<HTMLInputElement>) => {}}
                     autoComplete="email"
                     required
                  />
                  <Button type="submit">Send Reset Link</Button>
               </form>
            </Card>
         </div>
      </>
      );
   }