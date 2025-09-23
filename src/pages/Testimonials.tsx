// pages/Testimonials.tsx - Updated with Theme Context
import React from "react";
import Section from "../components/Section";
import { Star, Quote } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Testimonials: React.FC = () => {
	const { theme, isDark } = useTheme();

	return (
		<Section id="testimonials-page" className="pt-32 pb-20">
			<div className="text-center mb-16">
				<h1 className="text-4xl font-bold mb-8" style={{ color: theme.text }}>
					Client Success Story
				</h1>
				<p
					className="text-xl max-w-3xl mx-auto"
					style={{ color: theme.textSecondary }}>
					Real results from a local business we helped grow in Chino, California
				</p>
			</div>

			<div className="max-w-4xl mx-auto">
				<div
					className="p-8 md:p-12 rounded-2xl shadow-2xl border"
					style={{
						backgroundColor: theme.surface,
						borderColor: theme.border,
					}}>
					<div className="flex flex-col md:flex-row items-center md:items-start gap-8">
						<div className="flex-shrink-0">
							<div
								className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg"
								style={{
									background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`,
								}}>
								BT
							</div>
						</div>

						<div className="flex-1 text-center md:text-left">
							<Quote
								className="w-8 h-8 mb-4 mx-auto md:mx-0"
								style={{ color: theme.primary }}
							/>

							<div className="flex justify-center md:justify-start mb-4">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="w-5 h-5 text-yellow-400 fill-current"
									/>
								))}
							</div>

							<p
								className="text-lg md:text-xl mb-6 italic leading-relaxed"
								style={{ color: theme.textSecondary }}>
								"Blue Sprout Agency transformed our online presence completely!
								As a local DJ service in Chino, we were struggling to reach new
								clients. Their social media strategy and professional website
								helped us book 3x more events. The team really understands the
								local market and knows how to make small businesses shine
								online."
							</p>

							<div
								className="inline-flex items-center px-4 py-2 mb-6 text-white rounded-full text-sm font-bold"
								style={{
									background: `linear-gradient(45deg, ${theme.success}, #34d399)`,
								}}>
								🚀 3x More Event Bookings
							</div>

							<div>
								<div
									className="font-bold text-xl"
									style={{ color: theme.text }}>
									BlackTie Events Founder
								</div>
								<div className="text-lg" style={{ color: theme.primary }}>
									Local DJ Service
								</div>
								<div className="text-sm" style={{ color: theme.textSecondary }}>
									📍 Chino, California
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="text-center mt-16 p-8 rounded-2xl border"
				style={{
					background: isDark
						? `linear-gradient(45deg, ${theme.primary}20, ${theme.accent}20)`
						: `linear-gradient(45deg, ${theme.primary}10, ${theme.accent}10)`,
					borderColor: `${theme.primary}50`,
				}}>
				<h2
					className="text-2xl md:text-3xl font-bold mb-4"
					style={{ color: theme.text }}>
					Ready to Grow Like BlackTie Events?
				</h2>
				<p
					className="text-lg mb-6 max-w-2xl mx-auto"
					style={{ color: theme.textSecondary }}>
					Let's create your success story next. Get the same results for your
					business.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="tel:+16572174737"
						className="px-8 py-4 rounded-lg font-bold transition-colors text-white"
						style={{ backgroundColor: theme.primary }}>
						📞 Call: (657) 217-4737
					</a>
					<a
						href="sms:+16572174737?&body=Hi%20Blue%20Sprout%20Agency!%20I'd%20like%20to%20discuss%20growing%20my%20business%20like%20BlackTie%20Events%20did."
						className="px-8 py-4 border-2 rounded-lg font-bold transition-colors"
						style={{
							borderColor: theme.primary,
							color: theme.primary,
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.backgroundColor = theme.primary;
							e.currentTarget.style.color = "white";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.backgroundColor = "transparent";
							e.currentTarget.style.color = theme.primary;
						}}>
						💬 Text Us
					</a>
				</div>
			</div>
		</Section>
	);
};

export default Testimonials;
