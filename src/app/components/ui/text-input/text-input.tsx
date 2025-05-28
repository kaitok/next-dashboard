import type { ChangeEventHandler } from "react";

type TextInputProps = {
	name: string;
	label: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
};

const TextInput = ({ name, label, value, onChange }: TextInputProps) => {
	return (
		<>
			<div className="flex flex-col gap-1">
				<label htmlFor={name} className="font-bold text-sm">
					{label}
				</label>
				<input
					type="text"
					name={name}
					value={value}
					onChange={onChange}
					className="border-1 border-gray-300 rounded-sm p-1"
				/>
			</div>
		</>
	);
};
export default TextInput;
