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
			<label htmlFor={name}>{label}</label>
			<input type="text" name={name} value={value} onChange={onChange} />
		</>
	);
};
export default TextInput;
