// components/InputField.tsx - Updated with Theme Context
import React from "react";
import { useTheme } from "../context/ThemeContext";

interface InputFieldProps {
	label: string;
	type: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	placeholder?: string;
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
	pattern,
	inputMode = "text",
	maxLength,
}) => {
	const { theme } = useTheme();

	return (
		<div className="flex flex-col gap-2">
			<label
				htmlFor={name}
				className="font-semibold"
				style={{ color: theme.text }}>
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
				className="p-3 border rounded-lg w-full transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-20"
				style={{
					backgroundColor: theme.surface,
					borderColor: theme.border,
					color: theme.text,
				}}
				onFocus={(e) => {
					e.target.style.borderColor = theme.primary;
					e.target.style.boxShadow = `0 0 0 3px ${theme.primary}20`;
				}}
				onBlur={(e) => {
					e.target.style.borderColor = theme.border;
					e.target.style.boxShadow = "none";
				}}
			/>
		</div>
	);
};
