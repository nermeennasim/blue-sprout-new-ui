// pages/NotFound.tsx - Fixed with Theme Context
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Section from "../components/Section";
import { useTheme } from "../context/ThemeContext";

const NotFound: React.FC = () => {
	const navigate = useNavigate();
	const { theme, isDark } = useTheme();
	const [countdown, setCountdown] = useState(10);
	const [isFloating, setIsFloating] = useState(false);

	// Auto-redirect countdown
	useEffect(() => {
		const timer = setInterval(() => {
			setCountdown((prev) => {
				if (prev <= 1) {
					navigate("/");
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [navigate]);

	// Floating animation for the 404 number
	useEffect(() => {
		const floatTimer = setInterval(() => {
			setIsFloating((prev) => !prev);
		}, 2000);

		return () => clearInterval(floatTimer);
	}, []);

	const handleGoHome = () => {
		navigate("/");
	};

	const handleScheduleCall = () => {
		navigate("/contact");
	};

	return (
		<Section
			id="not-found-page"
			className="pt-32 pb-20 min-h-screen flex items-center">
			{/* Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div
					className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl animate-pulse"
					style={{ backgroundColor: `${theme.primary}20` }}
				/>
				<div
					className="absolute top-40 right-20 w-24 h-24 rounded-full blur-xl animate-pulse"
					style={{
						backgroundColor: `${theme.secondary}20`,
						animationDelay: "1s",
					}}
				/>
				<div
					className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full blur-xl animate-pulse"
					style={{
						backgroundColor: `${theme.success}20`,
						animationDelay: "2s",
					}}
				/>
			</div>

			<div className="relative w-full max-w-6xl mx-auto text-center px-6">
				{/* Large 404 with Floating Animation */}
				<div
					className={`mb-8 transform transition-transform duration-1000 ${
						isFloating ? "translate-y-[-10px]" : "translate-y-[10px]"
					}`}>
					<h1
						className="text-8xl md:text-9xl font-bold mb-4"
						style={{
							background: `linear-gradient(45deg, ${theme.primary}, ${theme.accent}, ${theme.success})`,
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
						}}>
						404
					</h1>

					{/* Decorative Elements Around 404 */}
					<div className="relative inline-block">
						<div className="absolute -top-4 -left-4 text-2xl animate-bounce">
							🌱
						</div>
						<div
							className="absolute -top-4 -right-4 text-2xl animate-bounce"
							style={{ animationDelay: "0.5s" }}>
							✨
						</div>
						<div
							className="absolute -bottom-4 -left-4 text-2xl animate-bounce"
							style={{ animationDelay: "1s" }}>
							🚀
						</div>
						<div
							className="absolute -bottom-4 -right-4 text-2xl animate-bounce"
							style={{ animationDelay: "1.5s" }}>
							💡
						</div>
					</div>
				</div>

				{/* Main Message */}
				<div className="mb-12">
					<h2
						className="text-3xl md:text-4xl font-bold mb-6"
						style={{ color: theme.text }}>
						Oops! This Page Got Lost in the Digital Garden
					</h2>
					<p
						className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-6"
						style={{ color: theme.textSecondary }}>
						Don't worry - even the best websites have pages that sprout in
						unexpected places! Let's get you back to where the business magic
						happens.
					</p>

					{/* Fun Error Messages */}
					<div
						className="inline-block px-6 py-3 rounded-full mb-8 border"
						style={{
							backgroundColor: `${theme.warning}20`,
							borderColor: theme.warning,
							color: isDark ? theme.warning : "#d97706",
						}}>
						<span className="text-sm font-medium">
							🔍 The page you're looking for might have been moved, deleted, or
							is taking a coffee break
						</span>
					</div>
				</div>

				{/* Quick Navigation Options */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
					{/* Home Card */}
					<Link to="/" className="group">
						<div
							className="p-6 rounded-3xl border-2 border-dashed transition-all duration-300 group-hover:border-solid group-hover:scale-105"
							style={{
								borderColor: theme.border,
								backgroundColor: `${theme.primary}10`,
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.borderColor = theme.primary;
								e.currentTarget.style.backgroundColor = `${theme.primary}20`;
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.borderColor = theme.border;
								e.currentTarget.style.backgroundColor = `${theme.primary}10`;
							}}>
							<div className="text-4xl mb-4">🏠</div>
							<h3
								className="text-lg font-bold mb-2"
								style={{ color: theme.text }}>
								Go Home
							</h3>
							<p className="text-sm" style={{ color: theme.textSecondary }}>
								Back to our main page where all the good stuff lives
							</p>
						</div>
					</Link>

					{/* Services Card */}
					<Link to="/services" className="group">
						<div
							className="p-6 rounded-3xl border-2 border-dashed transition-all duration-300 group-hover:border-solid group-hover:scale-105"
							style={{
								borderColor: theme.border,
								backgroundColor: `${theme.secondary}10`,
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.borderColor = theme.secondary;
								e.currentTarget.style.backgroundColor = `${theme.secondary}20`;
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.borderColor = theme.border;
								e.currentTarget.style.backgroundColor = `${theme.secondary}10`;
							}}>
							<div className="text-4xl mb-4">💼</div>
							<h3
								className="text-lg font-bold mb-2"
								style={{ color: theme.text }}>
								Our Services
							</h3>
							<p className="text-sm" style={{ color: theme.textSecondary }}>
								See how we help businesses grow and thrive
							</p>
						</div>
					</Link>

					{/* Contact Card */}
					<Link to="/contact" className="group">
						<div
							className="p-6 rounded-3xl border-2 border-dashed transition-all duration-300 group-hover:border-solid group-hover:scale-105"
							style={{
								borderColor: theme.border,
								backgroundColor: `${theme.success}10`,
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.borderColor = theme.success;
								e.currentTarget.style.backgroundColor = `${theme.success}20`;
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.borderColor = theme.border;
								e.currentTarget.style.backgroundColor = `${theme.success}10`;
							}}>
							<div className="text-4xl mb-4">📞</div>
							<h3
								className="text-lg font-bold mb-2"
								style={{ color: theme.text }}>
								Get In Touch
							</h3>
							<p className="text-sm" style={{ color: theme.textSecondary }}>
								Let's discuss your business needs
							</p>
						</div>
					</Link>
				</div>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
					<button
						onClick={handleGoHome}
						className="px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white"
						style={{
							background: `linear-gradient(45deg, ${theme.primary}, ${theme.accent})`,
						}}>
						🏠 Take Me Home
					</button>

					<button
						onClick={handleScheduleCall}
						className="px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300"
						style={{
							borderColor: theme.border,
							color: theme.text,
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.borderColor = theme.primary;
							e.currentTarget.style.color = theme.primary;
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.borderColor = theme.border;
							e.currentTarget.style.color = theme.text;
						}}>
						📅 Schedule a Call Instead
					</button>
				</div>

				{/* Auto-redirect Notice */}
				<div
					className="p-4 rounded-xl max-w-md mx-auto border"
					style={{
						backgroundColor: `${theme.surface}f0`,
						borderColor: theme.border,
					}}>
					<div className="flex items-center justify-center space-x-2 mb-2">
						<div
							className="w-3 h-3 rounded-full animate-pulse"
							style={{ backgroundColor: theme.primary }}
						/>
						<span className="text-sm font-medium" style={{ color: theme.text }}>
							Auto-redirecting to home page
						</span>
					</div>
					<div className="text-2xl font-bold" style={{ color: theme.primary }}>
						{countdown}
					</div>
					<div className="text-xs" style={{ color: theme.textSecondary }}>
						seconds remaining
					</div>
				</div>

				{/* Contact Info */}
				<div className="mt-12 text-sm opacity-75">
					<p style={{ color: theme.textSecondary }}>
						Still can't find what you're looking for?
					</p>
					<div
						className="mt-2 space-x-4"
						style={{ color: theme.textSecondary }}>
						<a
							href="mailto:support@bluesproutagency.com"
							className="hover:underline"
							style={{ color: theme.primary }}>
							📧 support@bluesproutagency.com
						</a>
						<span>•</span>
						<a
							href="tel:+16572174737"
							className="hover:underline"
							style={{ color: theme.primary }}>
							📞 (657) 217-4737
						</a>
					</div>
				</div>
			</div>

			{/* CSS Animations */}
			<style>{`
				@keyframes float {
					0%, 100% { transform: translateY(0px); }
					50% { transform: translateY(-20px); }
				}
				
				.animate-float {
					animation: float 3s ease-in-out infinite;
				}
				
				@keyframes wiggle {
					0%, 7%, 14%, 21%, 28%, 35%, 42%, 49%, 56%, 63%, 70%, 77%, 84%, 91%, 98%, 100% {
						transform: rotate(0deg);
					}
					3.5%, 10.5%, 17.5%, 24.5%, 31.5%, 38.5%, 45.5%, 52.5%, 59.5%, 66.5%, 73.5%, 80.5%, 87.5%, 94.5% {
						transform: rotate(2deg);
					}
				}
				
				.animate-wiggle {
					animation: wiggle 2s ease-in-out infinite;
				}
			`}</style>
		</Section>
	);
};

export default NotFound;
