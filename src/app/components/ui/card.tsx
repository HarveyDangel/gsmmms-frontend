"use client";

import { ReactNode } from "react";

interface CardProps {
	children: ReactNode;
	className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
	return (
		<>
			<div className={`bg-[#fdfdfd] rounded-lg overflow-auto shadow-md shadow-gray-800/50 inset-shadow-sm inset-shadow-white ${className}`}>{children}</div>
		</>
	)
}
