// components/Section.tsx - Updated with Theme Context
import React from "react";
import { useTheme } from "../context/ThemeContext";

interface SectionProps {
	id?: string;
	children: React.ReactNode;
	className?: string;
	title?: string;
	subtitle?: string;
	style?: React.CSSProperties;
}

export const Section: React.FC<SectionProps> = ({
	id = "",
	children,
	className = "",
	title,
	subtitle,
	style,
}) => {
	const { theme } = useTheme();

	return (
		<section
			id={id}
			className={`py-20 px-6 transition-all duration-300 scroll-mt-24 ${className}`}
			style={style}>
			<div className="max-w-6xl mx-auto">
				{/* Title and Subtitle Header */}
				{(title || subtitle) && (
					<div className="text-center mb-16">
						{title && (
							<h2
								className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
								style={{ color: theme.text }}>
								{title}
							</h2>
						)}
						{subtitle && (
							<p
								className="text-lg md:text-xl max-w-3xl mx-auto"
								style={{ color: theme.textSecondary }}>
								{subtitle}
							</p>
						)}
					</div>
				)}

				{/* Section Content */}
				<div className={title || subtitle ? "" : "text-center"}>{children}</div>
			</div>
		</section>
	);
};

export default Section;
