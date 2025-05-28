import type { ChangeEventHandler } from "react";

type InputFieldProps = {
	name: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	errorMessage?: string;
	placeholder?: string;
};

export const InputField = ({
	name,
	value,
	onChange,
	errorMessage,
	placeholder,
}: InputFieldProps) => {
	return (
		<>
			<input
				type="text"
				name={name}
				value={value}
				onChange={onChange}
				className="border-1 border-gray-300 rounded-sm p-1"
				placeholder={placeholder}
			/>
			{value && <span className="text-red-600">{errorMessage}</span>}
		</>
	);
};
