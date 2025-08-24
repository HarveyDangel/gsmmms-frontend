import { ReactNode } from "react";

interface NavigationProps {
	children: ReactNode;
	className?: String;
}

export default function Navigation({
	children,
	className = "",
}: NavigationProps) {
	return (
		<>
			<div className={`flex items-center justify-between gap-5 p-2 ${className}`}>
				{children}
			</div>
		</>
	);
}
