// components/Section.tsx
import React from "react";

interface SectionProps {
	id?: string; // Made optional with default value
	children: React.ReactNode;
	className?: string;
	title?: string;
	subtitle?: string;
	isDark?: boolean;
}

export const Section: React.FC<SectionProps> = ({
	id = "", // Default empty string
	children,
	className = "",
	title,
	subtitle,
	isDark = false,
}) => {
	return (
		<section
			id={id}
			className={`py-20 px-6 transition-all duration-300 scroll-mt-24 ${className}`}>
			<div className="max-w-6xl mx-auto">
				{/* Title and Subtitle Header */}
				{(title || subtitle) && (
					<div className="text-center mb-16">
						{title && (
							<h2
								className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								{title}
							</h2>
						)}
						{subtitle && (
							<p
								className={`text-lg md:text-xl max-w-3xl mx-auto ${
									isDark ? "text-gray-300" : "text-gray-600"
								}`}>
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
