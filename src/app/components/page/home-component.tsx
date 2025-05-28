"use client";
import TextInput from "@/app/components/ui/text-input/text-input";
import { useState } from "react";

export default function HomeComponent() {
	const [value, setValue] = useState("Hello, World!");
	return (
		<div className="flex justify-center py-32">
			<TextInput
				name={"input"}
				label={"ラベルテキスト"}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
}
