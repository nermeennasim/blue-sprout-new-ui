import React from "react";

interface SectionProps {
	id: string;
	children: React.ReactNode;
	className?: string; // Optional className for additional styling
}

const Section: React.FC<SectionProps> = ({ id, children, className = "" }) => {
	return (
		<section
			id={id}
			className={`py-20 px-6 transition-all duration-300 scroll-mt-24 ${className} `}>
			<div className="max-w-4xl mx-auto text-center space-y-6">{children}</div>
		</section>
	);
};

export default Section;
