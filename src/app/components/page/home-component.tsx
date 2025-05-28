"use client";
import { InputField } from "@/app/components/ui/input-field/input-field";
import { InputLabel } from "@/app/components/ui/input-label/input-label";
import { useState } from "react";

type InputProps = {
	name: string;
	value: string;
	errorMessage?: string;
};

export default function HomeComponent() {
	const [value, setValue] = useState("Hello, World!");
	const email: InputProps = {
		name: "email",
		value: "email@example.com",
		errorMessage: "メールアドレスが不正です",
	};
	return (
		<div className="flex justify-center py-32">
			<div className="flex flex-col gap-1">
				<InputLabel label="ラベル" name={email.name} />
				<InputField
					name={email.name}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
		</div>
	);
}
