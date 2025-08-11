// components/Hero.tsx
import { Link, useNavigate } from "react-router-dom";
import {
	ArrowRight,
	Star,
	Users,
	Award,
	Zap,
	Target,
	TrendingUp,
	Phone,
	Mail,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface HeroProps {
	isDark: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
	const [isContactVisible, setIsContactVisible] = useState(false);
	const [showFlyingPhone, setShowFlyingPhone] = useState(false);
	const navigate = useNavigate();
	const heroRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;

			// Show contact info after scrolling 30% of viewport height
			setIsContactVisible(scrollY > windowHeight * 0.3);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Flying phone number effect
	useEffect(() => {
		const interval = setInterval(() => {
			setShowFlyingPhone(true);
			setTimeout(() => setShowFlyingPhone(false), 4000);
		}, 8000);

		return () => clearInterval(interval);
	}, []);

	// Smooth scroll to contact
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
				ref={heroRef}
				className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
					isDark ? "bg-gray-900" : "bg-white"
				} mt-10`}>
				{" "}
				{/* Added mt-10 for development banner */}
				{/* Flying Phone Number */}
				{showFlyingPhone && (
					<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40 overflow-hidden">
						<div
							className={`absolute top-1/2 -left-96 transform -translate-y-1/2 ${
								isDark ? "text-orange-400" : "text-teal-600"
							} text-2xl font-bold animate-fly-across flex items-center space-x-3 bg-gradient-to-r ${
								isDark
									? "from-orange-500/20 to-red-500/20"
									: "from-teal-500/20 to-blue-500/20"
							} backdrop-blur-sm px-6 py-3 rounded-full border ${
								isDark ? "border-orange-500/30" : "border-teal-500/30"
							} shadow-2xl`}>
							<Phone className="w-8 h-8 animate-bounce" />
							<span className="text-3xl font-extrabold tracking-wider">
								📞 (657) 217-4737
							</span>
							<div className="text-lg">👈 CALL NOW!</div>
						</div>
					</div>
				)}
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-10">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `radial-gradient(circle at 1px 1px, ${
								isDark ? "#ffffff" : "#000000"
							} 1px, transparent 0)`,
							backgroundSize: "50px 50px",
						}}
					/>
				</div>
				{/* Floating Elements */}
				<div className="absolute inset-0 overflow-hidden">
					<div
						className={`absolute top-20 left-20 w-72 h-72 ${
							isDark ? "bg-purple-600" : "bg-purple-500"
						} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float`}></div>
					<div
						className={`absolute top-40 right-20 w-72 h-72 ${
							isDark ? "bg-cyan-600" : "bg-cyan-500"
						} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed`}></div>
					<div
						className={`absolute -bottom-8 left-40 w-72 h-72 ${
							isDark ? "bg-pink-600" : "bg-pink-500"
						} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow`}></div>
				</div>
				{/* Main Content */}
				<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						{/* Badge */}
						<div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-cyan-100 dark:from-purple-900/50 dark:to-cyan-900/50 px-6 py-3 rounded-full mb-8 animate-slide-down">
							<Star
								className={`w-5 h-5 ${
									isDark ? "text-purple-400" : "text-purple-600"
								} animate-spin-slow`}
							/>
							<span
								className={`text-sm font-semibold ${
									isDark ? "text-gray-200" : "text-gray-700"
								} animate-type-writer`}>
								#1 Web Development Agency in Inland Empire
							</span>
						</div>

						{/* Main Heading */}
						<h1
							className={`text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 ${
								isDark ? "text-white" : "text-gray-900"
							} animate-fade-in-up`}>
							<span className="block animate-slide-in-left">Premium Web</span>
							<span className="block bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-600 bg-clip-text text-transparent animate-gradient-x animate-slide-in-right">
								Solutions
							</span>
						</h1>

						{/* Subtitle */}
						<p
							className={`text-lg sm:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${
								isDark ? "text-gray-300" : "text-gray-600"
							} animate-fade-in-up animation-delay-300`}>
							Transform your digital presence with cutting-edge web design,
							development, and digital marketing. We create stunning, responsive
							websites that convert visitors into customers.
						</p>

						{/* Stats Row */}
						<div className="flex flex-wrap justify-center items-center gap-8 mb-12">
							<div className="flex items-center space-x-2 animate-bounce-in animation-delay-400">
								<Users
									className={`w-6 h-6 ${
										isDark ? "text-cyan-400" : "text-cyan-600"
									} animate-pulse`}
								/>
								<span
									className={`text-lg font-semibold ${
										isDark ? "text-gray-200" : "text-gray-700"
									}`}>
									500+ Satisfied Clients
								</span>
							</div>
							<div className="flex items-center space-x-2 animate-bounce-in animation-delay-500">
								<Award
									className={`w-6 h-6 ${
										isDark ? "text-purple-400" : "text-purple-600"
									} animate-pulse`}
								/>
								<span
									className={`text-lg font-semibold ${
										isDark ? "text-gray-200" : "text-gray-700"
									}`}>
									Award-Winning Designs
								</span>
							</div>
							<div className="flex items-center space-x-2 animate-bounce-in animation-delay-600">
								<Zap
									className={`w-6 h-6 ${
										isDark ? "text-pink-400" : "text-pink-600"
									} animate-pulse`}
								/>
								<span
									className={`text-lg font-semibold ${
										isDark ? "text-gray-200" : "text-gray-700"
									}`}>
									Lightning Fast
								</span>
							</div>
						</div>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
							<button
								onClick={handleGetStarted}
								className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2 animate-button-glow">
								<span>Start Your Project</span>
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</button>

							<Link
								to="/portfolio"
								className={`group px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 border-2 animate-button-glow animation-delay-200 ${
									isDark
										? "border-gray-700 text-gray-300 hover:border-purple-500 hover:text-purple-400"
										: "border-gray-300 text-gray-700 hover:border-purple-600 hover:text-purple-600"
								}`}>
								<span>View Our Work</span>
								<TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</Link>
						</div>

						{/* Service Highlights */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
							<div
								className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-500 hover:scale-105 animate-card-float ${
									isDark
										? "bg-gray-800/50 border border-gray-700"
										: "bg-white/80 border border-gray-200 shadow-lg"
								}`}>
								<Target
									className={`w-12 h-12 mx-auto mb-4 ${
										isDark ? "text-purple-400" : "text-purple-600"
									} animate-icon-bounce`}
								/>
								<h3
									className={`text-xl font-bold mb-2 ${
										isDark ? "text-white" : "text-gray-900"
									} animate-text-dance`}>
									Custom Development
								</h3>
								<p
									className={`${
										isDark ? "text-gray-300" : "text-gray-600"
									} animate-fade-in`}>
									Tailored solutions built with modern technologies for maximum
									performance.
								</p>
							</div>

							<div
								className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-500 hover:scale-105 animate-card-float animation-delay-200 ${
									isDark
										? "bg-gray-800/50 border border-gray-700"
										: "bg-white/80 border border-gray-200 shadow-lg"
								}`}>
								<Star
									className={`w-12 h-12 mx-auto mb-4 ${
										isDark ? "text-cyan-400" : "text-cyan-600"
									} animate-icon-bounce animation-delay-100`}
								/>
								<h3
									className={`text-xl font-bold mb-2 ${
										isDark ? "text-white" : "text-gray-900"
									} animate-text-dance animation-delay-100`}>
									Responsive Design
								</h3>
								<p
									className={`${
										isDark ? "text-gray-300" : "text-gray-600"
									} animate-fade-in animation-delay-100`}>
									Beautiful designs that work perfectly on all devices and
									screen sizes.
								</p>
							</div>

							<div
								className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-500 hover:scale-105 animate-card-float animation-delay-400 ${
									isDark
										? "bg-gray-800/50 border border-gray-700"
										: "bg-white/80 border border-gray-200 shadow-lg"
								}`}>
								<TrendingUp
									className={`w-12 h-12 mx-auto mb-4 ${
										isDark ? "text-pink-400" : "text-pink-600"
									} animate-icon-bounce animation-delay-200`}
								/>
								<h3
									className={`text-xl font-bold mb-2 ${
										isDark ? "text-white" : "text-gray-900"
									} animate-text-dance animation-delay-200`}>
									Digital Marketing
								</h3>
								<p
									className={`${
										isDark ? "text-gray-300" : "text-gray-600"
									} animate-fade-in animation-delay-200`}>
									Comprehensive strategies to increase your online visibility
									and reach.
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* Scroll Indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<div
						className={`w-6 h-10 border-2 rounded-full flex justify-center ${
							isDark ? "border-gray-600" : "border-gray-400"
						}`}>
						<div
							className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
								isDark ? "bg-gray-500" : "bg-gray-600"
							}`}></div>
					</div>
				</div>
			</section>

			{/* Floating Contact Info */}
			<div
				className={`fixed top-1/2 right-6 transform -translate-y-1/2 z-50 transition-all duration-500 ${
					isContactVisible
						? "translate-x-0 opacity-100"
						: "translate-x-full opacity-0"
				}`}>
				<div
					className={`flex flex-col space-y-4 p-4 rounded-xl backdrop-blur-md shadow-2xl ${
						isDark
							? "bg-gray-900/90 border border-gray-700"
							: "bg-white/90 border border-gray-200"
					}`}>
					<a
						href="tel:+16572174737"
						className={`group flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 animate-pulse ${
							isDark
								? "hover:bg-gray-800 text-gray-200 hover:text-purple-400"
								: "hover:bg-gray-50 text-gray-700 hover:text-purple-600"
						}`}>
						<Phone className="w-5 h-5 animate-ring" />
						<span className="text-sm font-medium whitespace-nowrap">
							Call Us
						</span>
					</a>

					<a
						href="mailto:support@bluesproutagency.com"
						className={`group flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
							isDark
								? "hover:bg-gray-800 text-gray-200 hover:text-cyan-400"
								: "hover:bg-gray-50 text-gray-700 hover:text-cyan-600"
						}`}>
						<Mail className="w-5 h-5" />
						<span className="text-sm font-medium whitespace-nowrap">
							Email Us
						</span>
					</a>
				</div>
			</div>

			{/* CSS Animations */}
			<style>{`
				@keyframes fly-across {
					0% { transform: translateX(-100%) translateY(-50%); }
					100% { transform: translateX(calc(100vw + 400px)) translateY(-50%); }
				}
				
				@keyframes float {
					0%, 100% { transform: translate(0px, 0px) scale(1); }
					33% { transform: translate(30px, -50px) scale(1.1); }
					66% { transform: translate(-20px, 20px) scale(0.9); }
				}
				
				@keyframes gradient-x {
					0%, 100% { background-position: 0% 50%; }
					50% { background-position: 100% 50%; }
				}
				
				@keyframes slide-down {
					from { transform: translateY(-20px); opacity: 0; }
					to { transform: translateY(0); opacity: 1; }
				}
				
				@keyframes slide-in-left {
					from { transform: translateX(-50px); opacity: 0; }
					to { transform: translateX(0); opacity: 1; }
				}
				
				@keyframes slide-in-right {
					from { transform: translateX(50px); opacity: 0; }
					to { transform: translateX(0); opacity: 1; }
				}
				
				@keyframes fade-in-up {
					from { transform: translateY(30px); opacity: 0; }
					to { transform: translateY(0); opacity: 1; }
				}
				
				@keyframes bounce-in {
					from { transform: scale(0.3); opacity: 0; }
					50% { transform: scale(1.05); opacity: 0.8; }
					to { transform: scale(1); opacity: 1; }
				}
				
				@keyframes text-dance {
					0%, 100% { transform: translateY(0px); }
					25% { transform: translateY(-5px); }
					50% { transform: translateY(-2px); }
					75% { transform: translateY(-7px); }
				}
				
				@keyframes icon-bounce {
					0%, 100% { transform: translateY(0px) scale(1); }
					50% { transform: translateY(-10px) scale(1.1); }
				}
				
				@keyframes card-float {
					0%, 100% { transform: translateY(0px); }
					50% { transform: translateY(-5px); }
				}
				
				@keyframes button-glow {
					0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
					50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.6); }
				}
				
				@keyframes ring {
					0%, 100% { transform: rotate(0deg); }
					25% { transform: rotate(-15deg); }
					75% { transform: rotate(15deg); }
				}
				
				.animate-fly-across { animation: fly-across 4s linear; }
				.animate-float { animation: float 7s ease-in-out infinite; }
				.animate-float-delayed { animation: float 7s ease-in-out infinite 2s; }
				.animate-float-slow { animation: float 10s ease-in-out infinite 4s; }
				.animate-gradient-x { 
					background-size: 400% 400%;
					animation: gradient-x 8s ease infinite; 
				}
				.animate-slide-down { animation: slide-down 0.8s ease-out; }
				.animate-slide-in-left { animation: slide-in-left 1s ease-out 0.2s both; }
				.animate-slide-in-right { animation: slide-in-right 1s ease-out 0.4s both; }
				.animate-fade-in-up { animation: fade-in-up 1s ease-out; }
				.animate-bounce-in { animation: bounce-in 0.8s ease-out; }
				.animate-text-dance { animation: text-dance 2s ease-in-out infinite; }
				.animate-icon-bounce { animation: icon-bounce 2s ease-in-out infinite; }
				.animate-card-float { animation: card-float 3s ease-in-out infinite; }
				.animate-button-glow { animation: button-glow 2s ease-in-out infinite; }
				.animate-ring { animation: ring 1s ease-in-out infinite; }
				.animate-spin-slow { animation: spin 3s linear infinite; }
				.animate-type-writer { animation: fade-in-up 1s ease-out; }
				.animate-fade-in { animation: fade-in-up 1s ease-out; }
				
				.animation-delay-100 { animation-delay: 0.1s; }
				.animation-delay-200 { animation-delay: 0.2s; }
				.animation-delay-300 { animation-delay: 0.3s; }
				.animation-delay-400 { animation-delay: 0.4s; }
				.animation-delay-500 { animation-delay: 0.5s; }
				.animation-delay-600 { animation-delay: 0.6s; }
			`}</style>
		</>
	);
};
