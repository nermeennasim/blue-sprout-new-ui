// pages/Home.tsx - Redesigned with Theme Consistency and Strategic Content
import React from "react";
import { Link } from "react-router-dom";
import { HeroStructured1 } from "../components/Hero";
import {
	FaLaptopCode,
	FaSearch,
	FaPalette,
	FaHome,
	FaGraduationCap,
	FaShoppingCart,
	FaUtensils,
	FaStethoscope,
	FaUser,
	FaCalendarAlt,
	FaBalanceScale,
	FaDumbbell,
	FaBook,
	FaCut,
	FaBriefcase,
} from "react-icons/fa";
import ScrollAnimatedSection from "../components/ScrollAnimatedSection";
import { useTheme } from "../context/ThemeContext";
import { WhyChooseUsSection } from "../components/WhyChooseUs";

const Home: React.FC = () => {
	const { theme, isDark } = useTheme();

	// Add smooth scroll behavior
	React.useEffect(() => {
		document.documentElement.style.scrollBehavior = "smooth";
		return () => {
			document.documentElement.style.scrollBehavior = "auto";
		};
	}, []);

	// Dynamic icon color based on theme
	const getIconColor = () => (isDark ? "#ffffff" : theme.primary);

	// Card styling function
	const getCardStyle = () => ({
		backgroundColor: theme.surface,
		borderColor: theme.border,
		color: theme.text,
	});

	const getTextStyle = (type: "primary" | "secondary" = "primary") => ({
		color: type === "primary" ? theme.text : theme.textSecondary,
	});

	return (
		<div
			className="min-h-screen transition-colors duration-300"
			style={{ backgroundColor: theme.background }}>
			{/* Hero Section */}
			<HeroStructured1 />

			{/*  */}

			{/* Trust Indicators - Why Choose Us */}
			<WhyChooseUsSection />

			{/* Core Services Preview - Simplified */}
			<ScrollAnimatedSection
				id="services-preview"
				title="Our Core Services"
				subtitle="End-to-end digital solutions for your business"
				className="py-20"
				animationType="slide-right">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Web Development */}
					<div
						className="p-8 rounded-xl transition-all duration-300 hover:scale-105 border shadow-lg text-center"
						style={getCardStyle()}>
						<div className="flex items-center justify-center w-16 h-16 mx-auto mb-6">
							<FaLaptopCode size={32} color={getIconColor()} />
						</div>
						<h3 className="text-2xl font-bold mb-4" style={getTextStyle()}>
							Web Development
						</h3>
						<p className="mb-6" style={getTextStyle("secondary")}>
							Custom websites, dashboards, booking systems, and payment
							platforms.
						</p>
						<Link
							to="/services"
							className="inline-flex items-center font-semibold transition-colors hover:underline"
							style={{ color: theme.primary }}>
							Learn More →
						</Link>
					</div>

					{/* UI/UX Design */}
					<div
						className="p-8 rounded-xl transition-all duration-300 hover:scale-105 border shadow-lg text-center"
						style={getCardStyle()}>
						<div className="flex items-center justify-center w-16 h-16 mx-auto mb-6">
							<FaPalette size={32} color={getIconColor()} />
						</div>
						<h3 className="text-2xl font-bold mb-4" style={getTextStyle()}>
							UI/UX Design
						</h3>
						<p className="mb-6" style={getTextStyle("secondary")}>
							Beautiful, user-friendly designs that convert visitors into
							customers.
						</p>
						<Link
							to="/services"
							className="inline-flex items-center font-semibold transition-colors hover:underline"
							style={{ color: theme.primary }}>
							Learn More →
						</Link>
					</div>

					{/* SEO & Growth */}
					<div
						className="p-8 rounded-xl transition-all duration-300 hover:scale-105 border shadow-lg text-center"
						style={getCardStyle()}>
						<div className="flex items-center justify-center w-16 h-16 mx-auto mb-6">
							<FaSearch size={32} color={getIconColor()} />
						</div>
						<h3 className="text-2xl font-bold mb-4" style={getTextStyle()}>
							SEO & Growth
						</h3>
						<p className="mb-6" style={getTextStyle("secondary")}>
							Digital marketing strategies that help you reach more customers
							online.
						</p>
						<Link
							to="/services"
							className="inline-flex items-center font-semibold transition-colors hover:underline"
							style={{ color: theme.primary }}>
							Learn More →
						</Link>
					</div>
				</div>
			</ScrollAnimatedSection>

			{/* Social Proof - Single Testimonial Highlight */}
			<ScrollAnimatedSection
				id="social-proof"
				title="Client Success Story"
				subtitle="Real results from real businesses"
				className="py-20"
				animationType="fade-up">
				<div
					className="py-8 px-4 rounded-2xl"
					style={{ backgroundColor: isDark ? theme.surface : "#f8fafc" }}>
					<div className="max-w-4xl mx-auto">
						<div
							className="p-12 rounded-2xl border shadow-2xl text-center"
							style={getCardStyle()}>
							<div className="mb-6">
								<div className="flex justify-center mb-4">
									{[...Array(5)].map((_, i) => (
										<span key={i} className="text-yellow-400 text-2xl">
											★
										</span>
									))}
								</div>
								<blockquote
									className="text-xl italic mb-6"
									style={getTextStyle("secondary")}>
									"Nermeen, Senior Engineer at Blue Sprout completely automated
									our event booking system, Scheduling and transformed our web
									presence. Now clients can book DJ services directly online,
									and we get automated email notifications instantly. The
									professional website helped us land bigger events and
									corporate clients."
								</blockquote>
							</div>
							<div className="mb-6">
								<div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
									<img
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
										alt="Oscar Perez - Black Tie Events"
										className="w-full h-full object-cover"
									/>
								</div>
								<h4 className="text-lg font-bold" style={getTextStyle()}>
									Oscar Perez
								</h4>
								<p style={getTextStyle("secondary")}>Owner, Black Tie Events</p>
								<p className="text-sm mt-2" style={getTextStyle("secondary")}>
									DJ and Event Services
								</p>
								<a
									href="https://blktieevents.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm underline hover:no-underline transition-all"
									style={{ color: theme.primary }}>
									blktieevents.com
								</a>
							</div>
						</div>
					</div>
				</div>
			</ScrollAnimatedSection>

			{/* Industries We Serve */}
			<ScrollAnimatedSection
				id="industries"
				title="Industries We Serve"
				subtitle="Specialized solutions for diverse business sectors"
				className="py-20"
				animationType="slide-up">
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
					{[
						{ name: "Real Estate", IconComponent: FaHome },
						{ name: "Education", IconComponent: FaGraduationCap },
						{ name: "E-commerce", IconComponent: FaShoppingCart },
						{ name: "Restaurants", IconComponent: FaUtensils },
						{ name: "Healthcare", IconComponent: FaStethoscope },
						{ name: "Personal Portfolio", IconComponent: FaUser },
						{ name: "Event Services", IconComponent: FaCalendarAlt },
						{ name: "Legal Services", IconComponent: FaBalanceScale },
						{ name: "Fitness & Wellness", IconComponent: FaDumbbell },
						{ name: "Learning Management", IconComponent: FaBook },
						{ name: "Beauty & Salon", IconComponent: FaCut },
						{ name: "Consulting", IconComponent: FaBriefcase },
					].map((industry, index) => (
						<div
							key={index}
							className="p-6 rounded-xl border shadow-lg text-center transition-all duration-300 hover:scale-105"
							style={getCardStyle()}>
							<div className="flex items-center justify-center w-12 h-12 mx-auto mb-3">
								<industry.IconComponent size={34} color={getIconColor()} />
							</div>
							<h4 className="font-semibold text-sm" style={getTextStyle()}>
								{industry.name}
							</h4>
						</div>
					))}
				</div>
				<div className="text-center mt-8">
					<p className="text-lg mb-4" style={getTextStyle("secondary")}>
						Don't see your industry? We work with businesses of all types.
					</p>
					<Link
						to="/contact"
						className="inline-flex items-center font-semibold transition-colors hover:underline"
						style={{ color: theme.primary }}>
						Let's discuss your specific needs →
					</Link>
				</div>
			</ScrollAnimatedSection>

			{/* Strong CTA Section */}
			<ScrollAnimatedSection
				id="cta"
				title="Ready to Grow Your Business?"
				subtitle="Let's discuss how we can help you succeed online"
				className="py-20"
				animationType="bounce">
				<div className="text-center max-w-3xl mx-auto">
					<p className="text-xl mb-8" style={getTextStyle("secondary")}>
						Join 50+ businesses that trust Blue Sprout Agency for their digital
						growth.
					</p>

					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
						<Link
							to="/contact"
							className="px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white"
							style={{
								background: `linear-gradient(45deg, ${theme.primary}, ${theme.accent})`,
							}}>
							Start Your Project Today
						</Link>

						<Link
							to="/about"
							className="px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 border-2"
							style={{
								borderColor: theme.primary,
								color: theme.primary,
							}}>
							Learn About Us
						</Link>
					</div>

					<p className="mt-6 text-sm" style={getTextStyle("secondary")}>
						Free consultation • No obligation • Quick response
					</p>
				</div>
			</ScrollAnimatedSection>
		</div>
	);
};

export default Home;
