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
	return (
		<div className="flex flex-col gap-2">
			<label
				htmlFor={name}
				className={`font-semibold ${
					isDark ? "text-gray-300" : "text-gray-800"
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
				pattern={pattern}
				inputMode={inputMode}
				maxLength={maxLength}
				className={`p-3 border rounded-lg w-full transition-colors ${
					isDark
						? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500"
						: "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-teal-500"
				} focus:outline-none focus:ring-2 focus:ring-opacity-20 ${
					isDark ? "focus:ring-orange-500" : "focus:ring-teal-500"
				}`}
			/>
		</div>
	);
};
