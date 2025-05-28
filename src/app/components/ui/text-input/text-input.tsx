import type { ChangeEventHandler } from "react";

const TextInput = ({
	name,
	label,
	value,
	onChange,
}: {
	name: string;
	label: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<input type="text" name={name} value={value} onChange={onChange} />
		</>
	);
};
export default TextInput;
