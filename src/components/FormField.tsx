// components/FormField.tsx - Updated with Theme Context
import React from "react";
import { useTheme } from "../context/ThemeContext";

interface FormFieldProps {
	label: string;
	htmlFor: string;
	children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
	label,
	htmlFor,
	children,
}) => {
	const { theme } = useTheme();

	return (
		<div className="flex flex-col gap-2">
			<label
				htmlFor={htmlFor}
				className="font-semibold"
				style={{ color: theme.text }}>
				{label}
			</label>
			{children}
		</div>
	);
};
