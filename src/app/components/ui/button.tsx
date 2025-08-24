// import { Children } from "react";

import { ReactNode } from "react";

interface ButtonProps {
   type?: "button" | "submit" | "reset";
	onClick?: () => void;
	disabled?: boolean;
	id?: string;
	className?: String;
	children: ReactNode;
}

export default function Button({
   type,
	onClick,
	disabled,
	id,
	className = "",
	children,
}: ButtonProps) {
	return (
		<>
			<button
				type={type}
				onClick={onClick}
				disabled={disabled}
				id={id}
				className={`bg-green-600 text-white px-3 py-2 rounded-md shadow-md ${className}`}
			>
				{children}
			</button>
		</>
	);
}
