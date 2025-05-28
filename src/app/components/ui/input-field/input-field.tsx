import type { ChangeEventHandler } from "react";

type InputFieldProps = {
	name: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	message?: string;
};

export const InputField = ({
	name,
	value,
	onChange,
	message,
}: InputFieldProps) => {
	return (
		<>
			<input
				type="text"
				name={name}
				value={value}
				onChange={onChange}
				className="border-1 border-gray-300 rounded-sm p-1"
			/>
			<span>{message}</span>
		</>
	);
};
