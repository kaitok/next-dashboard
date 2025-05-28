export const InputLabel = ({
	name,
	label,
}: {
	name: string;
	label: string;
}) => {
	return (
		<label htmlFor={name} className="font-bold text-sm">
			{label}
		</label>
	);
};
