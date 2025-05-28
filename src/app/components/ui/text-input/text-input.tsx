import type { ChangeEventHandler } from "react";

const TextInput = ({
	value,
	onChange,
}: { value: string; onChange: ChangeEventHandler<HTMLInputElement> }) => {
	return <input type="text" value={value} onChange={onChange} />;
};
export default TextInput;
