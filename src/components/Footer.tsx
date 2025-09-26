// components/Footer.tsx - Updated Footer with Background Image
import React from "react";
import { useNavigate } from "react-router-dom";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaMapMarkerAlt,
	FaEnvelope,
	FaPhone,
	FaGlobe,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { FaXTwitter } from "react-icons/fa6";

export const Footer: React.FC = () => {
	const { theme, isDark } = useTheme();
	const currentYear = new Date().getFullYear();
	const navigate = useNavigate();

	// Handle navigation with smooth scroll
	const handleNavigation = (path: string) => {
		navigate(path);
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 100);
	};

	// Dynamic logo source based on theme
	const logoSrc = isDark ? "/blueWhiteLogo.png" : "/bluelightbluelogo.png";

	// Background image URL
	const backgroundImageUrl =
		"https://www.rvigroup.com/wp-content/uploads/2017/05/home-1200x577.jpg";

	return (
		<footer className="relative z-10 overflow-hidden">
			{/* Background Image with Theme Overlay */}
			<div className="absolute inset-0">
				{/* Background Image */}
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: `url('${backgroundImageUrl}')`,
					}}
				/>

				{/* Theme-based Overlay */}
				<div
					className="absolute inset-0"
					style={{
						backgroundColor: isDark
							? `${theme.surface}D9` // 85% opacity for dark theme
							: `${theme.surface}E6`, // 90% opacity for light theme
					}}
				/>

				{/* Additional gradient overlay for better text readability */}
				<div
					className="absolute inset-0"
					style={{
						background: isDark
							? `linear-gradient(135deg, ${theme.background}80 0%, ${theme.surface}90 50%, ${theme.background}80 100%)`
							: `linear-gradient(135deg, ${theme.surface}85 0%, ${theme.background}95 50%, ${theme.surface}85 100%)`,
					}}
				/>
			</div>

			{/* Main Footer Content with padding */}
			<div className="py-16 relative z-10">
				<div className="max-w-7xl mx-auto px-6">
					{/* Main Footer Content */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
						{/* Column 1: Logo & Company Description */}
						<div className="md:col-span-1">
							{/* Logo and Company Name - Aligned horizontally like Canada Cloud Solution */}
							<div className="flex items-center space-x-3 mb-4">
								<button
									onClick={() => handleNavigation("/")}
									className="hover:opacity-80 transition-opacity top-0">
									<img
										src={logoSrc}
										alt="Blue Sprout Agency Logo"
										className="h-20 mt-0 w-auto transition-all duration-300 hover:scale-105 object-contain"
									/>
									{/* Fallback text logo */}
								</button>
							</div>

							{/* Company Description */}
							<p
								className="text-sm leading-relaxed mb-6 max-w-xs"
								style={{ color: theme.textSecondary }}>
								We help small businesses grow their digital presence with
								professional web development, social media management, and video
								content creation.
							</p>

							{/* Contact Information */}
							<div className="space-y-3 text-sm">
								<div
									className="flex items-center space-x-3"
									style={{ color: theme.textSecondary }}>
									<FaMapMarkerAlt
										style={{ color: theme.primary }}
										className="w-4 h-4 flex-shrink-0"
									/>
									<span>California, USA</span>
								</div>
								<div
									className="flex items-center space-x-3"
									style={{ color: theme.textSecondary }}>
									<FaEnvelope
										style={{ color: theme.primary }}
										className="w-4 h-4 flex-shrink-0"
									/>
									<a
										href="mailto:support@bluesproutagency.com"
										className="hover:underline transition-colors"
										style={{ color: theme.primary }}>
										support@bluesproutagency.com
									</a>
								</div>
								<div
									className="flex items-center space-x-3"
									style={{ color: theme.textSecondary }}>
									<FaPhone
										style={{ color: theme.primary }}
										className="w-4 h-4 flex-shrink-0"
									/>
									<a
										href="tel:+16572174737"
										className="hover:underline transition-colors"
										style={{ color: theme.primary }}>
										(657) 217-4737
									</a>
								</div>
								<div
									className="flex items-center space-x-3"
									style={{ color: theme.textSecondary }}>
									<FaGlobe
										style={{ color: theme.primary }}
										className="w-4 h-4 flex-shrink-0"
									/>
									<span>www.bluesproutagency.com</span>
								</div>
							</div>
						</div>

						{/* Column 2: Quick Links */}
						<div className="md:col-span-1">
							<h3
								className="text-lg font-bold mb-6"
								style={{ color: theme.text }}>
								Quick Links
							</h3>
							<ul className="space-y-3">
								{[
									{ name: "Home", path: "/" },
									{ name: "About", path: "/about" },
									{ name: "Services", path: "/services" },
									//{ name: "Portfolio", path: "/portfolio" },
									{ name: "Our Clients", path: "/clients" },
									{ name: "Testimonials", path: "/testimonials" },
									{ name: "FAQs", path: "/faqs" },
									{ name: "Contact", path: "/contact" },
								].map((link, index) => (
									<li key={index}>
										<button
											onClick={() => handleNavigation(link.path)}
											className="text-left transition-colors hover:underline text-sm"
											style={{ color: theme.textSecondary }}
											onMouseEnter={(e) => {
												e.currentTarget.style.color = theme.primary;
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.color = theme.textSecondary;
											}}>
											{link.name}
										</button>
									</li>
								))}
							</ul>
						</div>

						{/* Column 3: Follow Us */}
						<div className="md:col-span-1">
							<h3
								className="text-lg font-bold mb-6"
								style={{ color: theme.text }}>
								Follow Us
							</h3>
							<div className="space-y-3">
								{/* Facebook */}
								<a
									href="https://facebook.com/bluesproutagency"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center space-x-3 transition-colors group text-sm"
									style={{ color: theme.textSecondary }}>
									<FaFacebook
										className="w-4 h-4 transition-colors flex-shrink-0"
										style={{ color: theme.primary }}
									/>
									<span className="group-hover:underline">
										bluesproutagency
									</span>
								</a>

								{/* Instagram */}
								<a
									href="https://instagram.com/bluesproutagency"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center space-x-3 transition-colors group text-sm"
									style={{ color: theme.textSecondary }}>
									<FaInstagram
										className="w-4 h-4 transition-colors flex-shrink-0"
										style={{ color: theme.primary }}
									/>
									<span className="group-hover:underline">
										bluesproutagency
									</span>
								</a>

								{/* Twitter */}
								<a
									href="https://twitter.com/blusproutagency"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center space-x-3 transition-colors group text-sm"
									style={{ color: theme.textSecondary }}>
									<FaXTwitter
										className="w-4 h-4 transition-colors flex-shrink-0"
										style={{ color: theme.primary }}
									/>
									<span className="group-hover:underline">blusproutagency</span>
								</a>

								{/* LinkedIn */}
								<a
									href="https://www.linkedin.com/company/blue-sprout-agency/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center space-x-3 transition-colors group text-sm"
									style={{ color: theme.textSecondary }}>
									<FaLinkedin
										className="w-4 h-4 transition-colors flex-shrink-0"
										style={{ color: theme.primary }}
									/>
									<span className="group-hover:underline">
										blue-sprout-agency
									</span>
								</a>
							</div>

							{/* Resources Section */}
							<div className="mt-8">
								<h4
									className="text-md font-semibold mb-4"
									style={{ color: theme.text }}>
									Resources
								</h4>
								<div className="space-y-3">
									<div className="flex items-center space-x-2">
										<span
											className="text-sm"
											style={{ color: theme.textSecondary }}>
											Blog & Tips
										</span>
										<span
											className="text-xs px-2 py-1 rounded-full"
											style={{
												backgroundColor: theme.primary + "20",
												color: theme.primary,
											}}>
											Coming Soon
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Column 4: Get Started */}
						<div className="md:col-span-1">
							<h3
								className="text-lg font-bold mb-6"
								style={{ color: theme.text }}>
								Get Started
							</h3>
							<p
								className="text-sm mb-4"
								style={{ color: theme.textSecondary }}>
								Ready to grow your business? Let's discuss your project today.
							</p>

							{/* CTA Buttons */}
							<div className="space-y-3">
								<button
									onClick={() => handleNavigation("/contact")}
									className="w-full text-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-white text-sm"
									style={{ backgroundColor: theme.primary }}>
									Get Started Today
								</button>
								<button
									onClick={() => handleNavigation("/contact")}
									className="w-full text-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-solid text-sm"
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
									Contact Us
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Copyright Bar - Darker Section - Full Width */}
			<div
				className="w-full pt-8 pb-4 text-center text-sm border-t relative z-10"
				style={{
					borderColor: theme.border,
					backgroundColor: isDark ? `rgba(0, 0, 0, 0.5)` : `rgba(0, 0, 0, 0.1)`,
					color: theme.textSecondary,
				}}>
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p>© {currentYear} Blue Sprout Agency LLC. All rights reserved.</p>
						<div className="flex space-x-6 text-xs">
							<button
								onClick={() => handleNavigation("/privacy")}
								className="hover:underline transition-colors"
								style={{ color: theme.textSecondary }}
								onMouseEnter={(e) => {
									e.currentTarget.style.color = theme.primary;
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.color = theme.textSecondary;
								}}>
								Privacy Policy
							</button>
							<button
								onClick={() => handleNavigation("/terms")}
								className="hover:underline transition-colors"
								style={{ color: theme.textSecondary }}
								onMouseEnter={(e) => {
									e.currentTarget.style.color = theme.primary;
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.color = theme.textSecondary;
								}}>
								Terms of Service
							</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
