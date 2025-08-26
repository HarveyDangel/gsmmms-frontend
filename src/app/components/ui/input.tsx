interface InputProps {
	type?: string;
	placeholder?: string;
	name?: string;
	id?: string;
	className?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
	type = "text",
	placeholder = "",
	name = "",
	id = "",
	className = "",
	value,
	onChange,
}: InputProps) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			name={name}
			id={id}
			className={`border border-gray-400 rounded-md p-1 focus:ring-2 focus:outline-none focus:ring-green-500 ${className}`}
			value={value}
			onChange={onChange}
		/>
	);
}
