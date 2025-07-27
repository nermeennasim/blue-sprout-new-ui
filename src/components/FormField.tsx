import React from "react";

interface FormFieldProps {
	label: string;
	htmlFor: string;
	isDark: boolean;
	children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
	label,
	htmlFor,
	isDark,
	children,
}) => {
	return (
		<div className="flex flex-col gap-2">
			<label
				htmlFor={htmlFor}
				className={`font-semibold ${
					isDark ? "text-gray-300" : "text-gray-800"
				}`}>
				{label}
			</label>
			{children}
		</div>
	);
};
