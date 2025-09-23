// components/about/cards/AboutCardImageRight.tsx
import React from "react";
import { useTheme } from "../../../context/ThemeContext";

export interface AboutCardImageRightProps {
	title: string;
	description: string;
	imageUrl: string;
	imageAlt?: string;
	imageCaption?: string;
	highlights?: string[];
	accentColor?: string;
	isDark?: boolean;
}

export const AboutCardImageRight: React.FC<AboutCardImageRightProps> = ({
	title,
	description,
	imageUrl,
	imageAlt = "",
	imageCaption,
	highlights = [],
	accentColor = "primary",
}) => {
	const { theme } = useTheme();

	const getAccentColor = (colorKey: string) => {
		const colorMap: { [key: string]: string } = {
			primary: theme.primary,
			accent: theme.accent,
			success: theme.success,
			secondary: theme.secondary || theme.accent,
		};
		return colorMap[colorKey] || theme.primary;
	};

	const accent = getAccentColor(accentColor);

	// Helper function to render description with bold text
	const renderDescription = (text: string) => {
		return text.split("**").map((part, index) =>
			index % 2 === 1 ? (
				<strong key={index} style={{ color: theme.text }}>
					{part}
				</strong>
			) : (
				part
			)
		);
	};

	return (
		<div className="flex flex-col lg:flex-row items-center gap-16 py-20">
			{/* Text Side - Left */}
			<div className="lg:w-1/2 space-y-6">
				<div>
					<h2 className="text-5xl font-bold" style={{ color: theme.text }}>
						{title}
					</h2>
					<div
						className="w-24 h-1 rounded mt-4"
						style={{ backgroundColor: accent }}
					/>
				</div>

				<div className="text-lg leading-relaxed">
					<p style={{ color: theme.textSecondary }}>
						{renderDescription(description)}
					</p>
				</div>

				{/* Highlights Tags */}
				{highlights.length > 0 && (
					<div className="flex flex-wrap gap-4 mt-8">
						{highlights.map((item, index) => (
							<span
								key={index}
								className="px-4 py-2 rounded-full text-sm font-semibold"
								style={{
									backgroundColor: `${accent}20`,
									color: accent,
									border: `1px solid ${accent}30`,
								}}>
								{item}
							</span>
						))}
					</div>
				)}
			</div>

			{/* Image Side - Right */}
			<div className="lg:w-1/2">
				<div className="relative transform hover:scale-105 hover:rotate-1 transition-all duration-700 ease-out">
					<div
						className="w-full h-96 rounded-l-full overflow-hidden shadow-2xl"
						style={{
							background: `linear-gradient(45deg, ${accent}, ${theme.success})`,
							padding: "4px",
						}}>
						<div className="w-full h-full rounded-l-full overflow-hidden">
							<img
								src={imageUrl}
								alt={imageAlt}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>

					{/* Floating Caption Badge */}
					{imageCaption && (
						<div
							className="absolute -bottom-4 right-8 px-6 py-3 rounded-full shadow-lg"
							style={{ backgroundColor: accent, color: "white" }}>
							<span className="font-bold">{imageCaption}</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
