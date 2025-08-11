// pages/NotFound.tsx - Custom 404 Page
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Section from "../components/Section";

interface NotFoundProps {
	isDark: boolean;
}

const NotFound: React.FC<NotFoundProps> = ({ isDark }) => {
	const navigate = useNavigate();
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
				{/* Animated Background Shapes */}
				<div
					className={`absolute top-20 left-10 w-32 h-32 rounded-full ${
						isDark ? "bg-purple-500/10" : "bg-purple-200/30"
					} blur-xl animate-pulse`}></div>
				<div
					className={`absolute top-40 right-20 w-24 h-24 rounded-full ${
						isDark ? "bg-blue-500/10" : "bg-blue-200/30"
					} blur-xl animate-pulse`}
					style={{ animationDelay: "1s" }}></div>
				<div
					className={`absolute bottom-20 left-1/4 w-40 h-40 rounded-full ${
						isDark ? "bg-green-500/10" : "bg-green-200/30"
					} blur-xl animate-pulse`}
					style={{ animationDelay: "2s" }}></div>
			</div>

			<div className="relative w-full max-w-6xl mx-auto text-center px-6">
				{/* Large 404 with Floating Animation */}
				<div
					className={`mb-8 transform transition-transform duration-1000 ${
						isFloating ? "translate-y-[-10px]" : "translate-y-[10px]"
					}`}>
					<h1
						className={`text-8xl md:text-9xl font-bold ${
							isDark
								? "bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent"
								: "bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent"
						} mb-4`}>
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
						className={`text-3xl md:text-4xl font-bold mb-6 ${
							isDark ? "text-white" : "text-gray-900"
						}`}>
						Oops! This Page Got Lost in the Digital Garden
					</h2>
					<p
						className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-6 ${
							isDark ? "text-gray-300" : "text-gray-700"
						}`}>
						Don't worry - even the best websites have pages that sprout in
						unexpected places! Let's get you back to where the business magic
						happens.
					</p>

					{/* Fun Error Messages */}
					<div
						className={`inline-block px-6 py-3 rounded-full mb-8 ${
							isDark
								? "bg-orange-900/30 border border-orange-700 text-orange-300"
								: "bg-orange-100 border border-orange-200 text-orange-700"
						}`}>
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
							className={`p-6 rounded-3xl border-2 border-dashed transition-all duration-300 group-hover:border-solid group-hover:scale-105 ${
								isDark
									? "border-gray-600 hover:border-purple-500 hover:bg-purple-900/20"
									: "border-gray-300 hover:border-purple-500 hover:bg-purple-50"
							}`}>
							<div className="text-4xl mb-4">🏠</div>
							<h3
								className={`text-lg font-bold mb-2 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Go Home
							</h3>
							<p
								className={`text-sm ${
									isDark ? "text-gray-400" : "text-gray-600"
								}`}>
								Back to our main page where all the good stuff lives
							</p>
						</div>
					</Link>

					{/* Services Card */}
					<Link to="/about" className="group">
						<div
							className={`p-6 rounded-3xl border-2 border-dashed transition-all duration-300 group-hover:border-solid group-hover:scale-105 ${
								isDark
									? "border-gray-600 hover:border-blue-500 hover:bg-blue-900/20"
									: "border-gray-300 hover:border-blue-500 hover:bg-blue-50"
							}`}>
							<div className="text-4xl mb-4">💼</div>
							<h3
								className={`text-lg font-bold mb-2 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Our Services
							</h3>
							<p
								className={`text-sm ${
									isDark ? "text-gray-400" : "text-gray-600"
								}`}>
								See how we help businesses automate and grow
							</p>
						</div>
					</Link>

					{/* Contact Card */}
					<Link to="/contact" className="group">
						<div
							className={`p-6 rounded-3xl border-2 border-dashed transition-all duration-300 group-hover:border-solid group-hover:scale-105 ${
								isDark
									? "border-gray-600 hover:border-green-500 hover:bg-green-900/20"
									: "border-gray-300 hover:border-green-500 hover:bg-green-50"
							}`}>
							<div className="text-4xl mb-4">📞</div>
							<h3
								className={`text-lg font-bold mb-2 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Get In Touch
							</h3>
							<p
								className={`text-sm ${
									isDark ? "text-gray-400" : "text-gray-600"
								}`}>
								Let's discuss your automation needs
							</p>
						</div>
					</Link>
				</div>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
					<button
						onClick={handleGoHome}
						className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
							isDark
								? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
								: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
						} shadow-lg hover:shadow-xl`}>
						🏠 Take Me Home
					</button>

					<button
						onClick={handleScheduleCall}
						className={`px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300 ${
							isDark
								? "border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white"
								: "border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900"
						}`}>
						📅 Schedule a Call Instead
					</button>
				</div>

				{/* Auto-redirect Notice */}
				<div
					className={`p-4 rounded-xl ${
						isDark
							? "bg-gray-800/50 border border-gray-700"
							: "bg-gray-100 border border-gray-200"
					} max-w-md mx-auto`}>
					<div className="flex items-center justify-center space-x-2 mb-2">
						<div
							className={`w-3 h-3 rounded-full animate-pulse ${
								isDark ? "bg-blue-400" : "bg-blue-500"
							}`}></div>
						<span
							className={`text-sm font-medium ${
								isDark ? "text-gray-300" : "text-gray-700"
							}`}>
							Auto-redirecting to home page
						</span>
					</div>
					<div
						className={`text-2xl font-bold ${
							isDark ? "text-blue-400" : "text-blue-600"
						}`}>
						{countdown}
					</div>
					<div
						className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>
						seconds remaining
					</div>
				</div>

				{/* Contact Info */}
				<div className="mt-12 text-sm opacity-75">
					<p className={isDark ? "text-gray-400" : "text-gray-600"}>
						Still can't find what you're looking for?
					</p>
					<div className="mt-2 space-x-4">
						<span>📧 hello@bluesproutagency.com</span>
						<span>•</span>
						<span>📞 (909) 555-0123</span>
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

// App.tsx - Add this route to your router
/*
import NotFound from './pages/NotFound';

// In your Routes:
<Routes>
	<Route path="/" element={<Home isDark={isDark} />} />
	<Route path="/about" element={<About isDark={isDark} />} />
	<Route path="/clients" element={<Clients isDark={isDark} />} />
	<Route path="/contact" element={<Contact isDark={isDark} />} />
	
	// Add the 404 route - MUST be last
	<Route path="*" element={<NotFound isDark={isDark} />} />
</Routes>
*/

// Alternative: Simpler 404 Component
export const Simple404: React.FC<{ isDark: boolean }> = ({ isDark }) => {
	const navigate = useNavigate();

	return (
		<div
			className={`min-h-screen flex items-center justify-center px-6 ${
				isDark ? "bg-gray-900" : "bg-gray-50"
			}`}>
			<div className="text-center">
				<h1
					className={`text-6xl font-bold mb-4 ${
						isDark
							? "bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
							: "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
					}`}>
					404
				</h1>
				<h2
					className={`text-2xl font-bold mb-4 ${
						isDark ? "text-white" : "text-gray-900"
					}`}>
					Page Not Found
				</h2>
				<p
					className={`text-lg mb-8 ${
						isDark ? "text-gray-300" : "text-gray-700"
					}`}>
					The page you're looking for doesn't exist.
				</p>
				<button
					onClick={() => navigate("/")}
					className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
						isDark
							? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
							: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
					} shadow-lg hover:shadow-xl`}>
					Go Home
				</button>
			</div>
		</div>
	);
};
