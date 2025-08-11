// components/ui/PolaroidCard.tsx
import React from "react";

interface PolaroidCardProps {
	src: string;
	alt: string;
	caption: string;
	className?: string;
	rotation?: "left" | "right" | "none";
	size?: "small" | "medium" | "large";
	isDark?: boolean;
}

export const PolaroidCard: React.FC<PolaroidCardProps> = ({
	src,
	alt,
	caption,
	className = "",
	rotation = "left",
	size = "medium",
	isDark = false,
}) => {
	const rotationClasses = {
		left: "-rotate-2 group-hover:rotate-0",
		right: "rotate-2 group-hover:rotate-0",
		none: "rotate-0",
	};

	const sizeClasses = {
		small: "h-24",
		medium: "h-32",
		large: "h-40",
	};

	return (
		<div className={`relative ${className}`}>
			<div
				className={`p-3 rounded-2xl transform ${
					rotationClasses[rotation]
				} transition-transform duration-300 ${
					isDark ? "bg-gray-700" : "bg-gray-100"
				}`}>
				<img
					src={src}
					alt={alt}
					className={`w-full ${sizeClasses[size]} object-cover rounded-xl`}
				/>
				<div
					className={`text-center mt-2 text-sm italic ${
						isDark ? "text-gray-400" : "text-gray-600"
					}`}>
					{caption}
				</div>
			</div>
			{/* Decorative pins */}
			<div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
			<div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
		</div>
	);
};
