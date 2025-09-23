// components/Hero.tsx - Clean Pattern Background
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Navbar } from "./Navbar";
import { useTheme } from "../context/ThemeContext";

export const HeroStructured1: React.FC = () => {
	const navigate = useNavigate();
	const { theme, isDark } = useTheme();

	const handleGetStarted = (e: React.MouseEvent) => {
		e.preventDefault();
		navigate("/contact");
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 100);
	};

	return (
		<>
			<section
				className="relative min-h-screen flex items-center overflow-hidden pt-20 shadow-2xl pb-20 rounded-b-md"
				style={{
					backgroundColor: isDark ? theme.background : "white",
				}}>
				<Navbar />

				{/* Clean Geometric Pattern Background */}
				<div className="absolute inset-0 opacity-10">
					{/* Pattern for Dark Theme: White lines/dots on dark background */}
					{isDark ? (
						<>
							{/* Diagonal Lines Pattern */}
							<div
								className="absolute inset-0"
								style={{
									backgroundImage: `
										linear-gradient(45deg, white 1px, transparent 1px),
										linear-gradient(-45deg, white 1px, transparent 1px)
									`,
									backgroundSize: "60px 60px",
								}}
							/>
							{/* Dots Pattern Overlay */}
							<div
								className="absolute inset-0"
								style={{
									backgroundImage: `radial-gradient(circle at 1px 1px, white 2px, transparent 0)`,
									backgroundSize: "80px 80px",
								}}
							/>
						</>
					) : (
						<>
							{/* Pattern for Light Theme: Blue lines/dots on white background */}
							{/* Grid Lines Pattern */}
							<div
								className="absolute inset-0"
								style={{
									backgroundImage: `
										linear-gradient(0deg, ${theme.primary} 1px, transparent 1px),
										linear-gradient(90deg, ${theme.primary} 1px, transparent 1px)
									`,
									backgroundSize: "50px 50px",
								}}
							/>
							{/* Geometric Shapes */}
							<div
								className="absolute inset-0"
								style={{
									backgroundImage: `radial-gradient(circle at 2px 2px, ${theme.primary} 2px, transparent 0)`,
									backgroundSize: "100px 100px",
								}}
							/>
						</>
					)}
				</div>

				{/* Additional Subtle Accent Patterns */}
				<div className="absolute inset-0 opacity-3">
					{isDark ? (
						// Light accent pattern for dark theme
						<div
							className="absolute inset-0"
							style={{
								backgroundImage: `linear-gradient(30deg, ${theme.primary} 1px, transparent 1px)`,
								backgroundSize: "120px 120px",
							}}
						/>
					) : (
						// Dark blue accent pattern for light theme
						<div
							className="absolute inset-0"
							style={{
								backgroundImage: `linear-gradient(60deg, #1e40af 1px, transparent 1px)`,
								backgroundSize: "150px 150px",
							}}
						/>
					)}
				</div>

				{/* Bottom Dark Fade - Keep this for depth */}
				<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent"></div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Left: Structured Text Content */}
					<div className="space-y-6">
						{/* Company Badge */}
						<div className="inline-block">
							<span
								className="px-4 py-2 text-sm font-semibold rounded-full border"
								style={{
									backgroundColor: `${theme.primary}15`,
									color: theme.primary,
									borderColor: `${theme.primary}30`,
								}}>
								Blue Sprout Agency • Since 2020
							</span>
						</div>

						{/* Structured Headline */}
						<div>
							<h1
								className="text-5xl lg:text-6xl font-bold mb-4 leading-tight"
								style={{ color: theme.text }}>
								Professional Web Solutions
								<span className="block mt-2" style={{ color: theme.primary }}>
									That Grow Your Business
								</span>
							</h1>
							<div
								className="w-16 h-1 rounded mb-6"
								style={{ backgroundColor: theme.primary }}></div>
						</div>

						{/* Clear Value Proposition */}
						<div className="space-y-4">
							<p
								className="text-lg font-medium"
								style={{ color: theme.primary }}>
								Custom websites • Business automation • Digital marketing
							</p>
							<p
								className="text-lg leading-relaxed"
								style={{ color: theme.textSecondary }}>
								We help small to medium businesses establish powerful digital
								presence through custom web development, automated systems, and
								strategic online growth.
							</p>
						</div>

						{/* Service Highlights - Compact */}
						<div className="space-y-3">
							{[
								"Custom React & TypeScript development",
								"Mobile-responsive design & optimization",
								"Business process automation systems",
								"SEO & digital marketing integration",
							].map((service, index) => (
								<div key={index} className="flex items-center space-x-3">
									<CheckCircle
										className="w-5 h-5 flex-shrink-0"
										style={{ color: theme.primary }}
									/>
									<span className="text-sm" style={{ color: theme.text }}>
										{service}
									</span>
								</div>
							))}
						</div>

						{/* Action Section */}
						<div className="pt-4">
							<div className="flex flex-col sm:flex-row gap-4 mb-4">
								<button
									onClick={handleGetStarted}
									className="px-8 py-3 font-semibold rounded-lg transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
									style={{
										backgroundColor: theme.primary,
										color: "white",
									}}>
									<span>Get Started Today</span>
									<ArrowRight className="w-4 h-4" />
								</button>
								<Link
									to="/about"
									className="px-8 py-3 font-semibold rounded-lg transition-all hover:scale-105 text-center border-2"
									style={{
										borderColor: theme.primary,
										color: theme.primary,
									}}>
									View Portfolio
								</Link>
							</div>
							<p className="text-sm" style={{ color: theme.textSecondary }}>
								Free consultation • 4-6 week delivery • Ongoing support
							</p>
						</div>

						{/* Compact Stats */}
						<div
							className="flex items-center space-x-6 pt-2 border-t"
							style={{ borderColor: theme.border }}>
							<div>
								<span
									className="text-xl font-bold"
									style={{ color: theme.primary }}>
									50+
								</span>
								<span
									className="text-sm ml-1"
									style={{ color: theme.textSecondary }}>
									Projects
								</span>
							</div>
							<div>
								<span
									className="text-xl font-bold"
									style={{ color: theme.primary }}>
									5+
								</span>
								<span
									className="text-sm ml-1"
									style={{ color: theme.textSecondary }}>
									Years
								</span>
							</div>
							<div>
								<span
									className="text-xl font-bold"
									style={{ color: theme.primary }}>
									24/7
								</span>
								<span
									className="text-sm ml-1"
									style={{ color: theme.textSecondary }}>
									Support
								</span>
							</div>
						</div>
					</div>

					{/* Right: Image */}
					<div className="relative">
						<div className="relative z-10">
							<img
								//src="../hero-bg.png"
								src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop"
								alt="Business growth and web development success"
								className="w-full h-96 object-cover rounded-xl shadow-2xl"
							/>

							{/* Floating Badge */}
							<div
								className="absolute -top-3 -right-3 px-3 py-2 text-xs font-semibold rounded-lg shadow-lg"
								style={{
									backgroundColor: theme.primary,
									color: "white",
								}}>
								Trusted by 50+ Businesses
							</div>
						</div>
						<div
							className="absolute top-4 left-4 w-full h-full rounded-xl -z-10"
							style={{ backgroundColor: `${theme.primary}15` }}
						/>
					</div>
				</div>
			</section>
		</>
	);
};
