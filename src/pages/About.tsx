// pages/About.tsx - Cleaned Version
import React from "react";
import Section from "../components/Section";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { AboutCardsSection } from "../components/about/AboutCardsSection";

const About: React.FC = () => {
	const navigate = useNavigate();
	const { theme, isDark } = useTheme();

	const handleCalendarOpen = () => {
		navigate("/contact");
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 100);
	};

	return (
		<>
			<Section id="about-page" className="pt-32 pb-20">
				{/* Hero Section */}
				<div className="text-center mb-20">
					<h1
						className="text-4xl md:text-5xl font-bold mb-8"
						style={{ color: theme.text }}>
						About Blue Sprout Agency
					</h1>
					<p
						className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
						style={{ color: theme.textSecondary }}>
						We don't believe in one-size-fits-all solutions. Tell us about your
						business - your workflows, your challenges, your goals. We'll build
						the custom web platforms and automation that fit exactly how you
						operate. BlueSprout plants the digital seeds, your business enjoys
						the harvest.
					</p>
				</div>

				{/* About Cards Section */}
				<AboutCardsSection />

				{/* Call to Action */}
				<div
					className="text-center mt-20 p-8 rounded-3xl max-w-4xl mx-auto"
					style={{
						background: isDark
							? `linear-gradient(45deg, ${theme.primary}20, ${theme.secondary}20)`
							: `linear-gradient(45deg, ${theme.primary}10, ${theme.secondary}10)`,
						borderColor: theme.border,
						border: "1px solid",
					}}>
					<h3 className="text-2xl font-bold mb-4" style={{ color: theme.text }}>
						Ready to Transform Your Business?
					</h3>
					<p className="text-lg mb-6" style={{ color: theme.textSecondary }}>
						Every business is unique. Let's discuss how we can automate your
						specific workflows and build solutions that grow with you.
					</p>
					<button
						onClick={handleCalendarOpen}
						className="px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white"
						style={{
							background: `linear-gradient(45deg, ${theme.primary}, ${theme.accent})`,
						}}>
						Start Your Digital Transformation
					</button>
				</div>
			</Section>
		</>
	);
};

export default About;
