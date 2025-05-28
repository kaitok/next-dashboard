"use client";
import { InputField } from "@/app/components/ui/input-field/input-field";
import { InputLabel } from "@/app/components/ui/input-label/input-label";
import { useState } from "react";

type InputProps = {
	name: string;
	value: string;
	errorMessage?: string;
	placeholder?: string;
};

export default function HomeComponent() {
	const [email, setEmail] = useState<InputProps>({
		name: "email",
		value: "",
		errorMessage: "",
		placeholder: "メールアドレスを入力してください",
	});
	const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
		setEmail({
			...email,
			value,
			errorMessage: isValidEmail
				? ""
				: "メールアドレスの形式が正しくありません",
		});
	};
	return (
		<div className="flex justify-center py-32">
			<div className="flex flex-col gap-1">
				<InputLabel label="ラベル" name={email.name} />
				<InputField
					name={email.name}
					value={email.value}
					onChange={onChangeEmail}
					errorMessage={email.errorMessage}
				/>
			</div>
		</div>
	);
}
