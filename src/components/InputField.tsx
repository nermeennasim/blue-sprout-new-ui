import React from "react";

interface InputFieldProps {
	label: string;
	type: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	placeholder?: string;
	isDark?: boolean;
	pattern?: string;
	inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
	maxLength?: number;
}
export const InputField: React.FC<InputFieldProps> = ({
	label,
	type,
	name,
	value,
	onChange,
	required = true,
	placeholder,
	isDark = false,
	pattern,
	inputMode = "text",
	maxLength,
}) => {
	const baseClass =
		"p-3 border rounded-lg w-full bg-gray-50 text-gray-800 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200";

	return (
		<div className="flex flex-col gap-2">
			<label
				htmlFor={name}
				className={`font-semibold ${
					isDark ? "text-gray-500" : "text-gray-800"
				}`}>
				{label}
			</label>
			<input
				type={type}
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				required={required}
				placeholder={placeholder}
				className={baseClass}
				pattern={pattern}
				inputMode={inputMode}
				maxLength={maxLength}
			/>
		</div>
	);
};
