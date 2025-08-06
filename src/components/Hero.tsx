// components/Hero.tsx
import { Link } from "react-router-dom";
import {
	ArrowRight,
	Star,
	Users,
	Award,
	Zap,
	Target,
	TrendingUp,
} from "lucide-react";

// Import your logo files - REMOVED, not needed in Hero
// import sprtLogoSvg from '../assets/sprout.svg';
// import sprtLogo192 from '../assets/sprout-logo-192.png';
// import sprtLogo512 from '../assets/sprout-logo-512.png';

export interface HeroProps {
	isDark: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
	return (
		<section
			className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
				isDark
					? "bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
					: "bg-gradient-to-br from-blue-50 via-white to-purple-50"
			}`}>
			{/* Animated Background Elements */}
			<div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
			<div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
			<div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
			<div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

			{/* Floating Elements for Animation */}
			<div className="absolute top-32 right-20 animate-bounce-gentle delay-300">
				<div
					className={`p-3 rounded-lg ${
						isDark ? "bg-orange-500/20" : "bg-teal-500/20"
					} backdrop-blur-sm`}>
					<TrendingUp
						className={`w-6 h-6 ${
							isDark ? "text-orange-400" : "text-teal-600"
						}`}
					/>
				</div>
			</div>
			<div className="absolute bottom-32 left-20 animate-bounce-gentle delay-700">
				<div
					className={`p-3 rounded-lg ${
						isDark ? "bg-purple-500/20" : "bg-blue-500/20"
					} backdrop-blur-sm`}>
					<Target
						className={`w-6 h-6 ${
							isDark ? "text-purple-400" : "text-blue-600"
						}`}
					/>
				</div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
				{/* Announcement Banners - Fixed positioning */}
				<div className="text-center mb-12 space-y-4">
					{/* Contact Form Banner */}
					<div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-bold animate-pulse-glow shadow-lg text-sm md:text-base">
						🚧 Contact Form Under Development - Call Us Directly!
					</div>

					{/* Special Offer Banner */}
					<div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-bold animate-bounce-gentle shadow-lg text-sm md:text-base">
						🔥 Lowest Pricing Offer - Limited Time Only!
					</div>
				</div>

				{/* Main Hero Content */}
				<div className="text-center mb-16">
					{/* Brand Tagline - No Logo Needed Here */}
					<div className="mb-8">
						<p
							className={`text-lg font-medium ${
								isDark ? "text-gray-400" : "text-gray-500"
							}`}>
							Your Growth Partner in Chino, CA
						</p>
					</div>

					{/* Animated Main Headlines */}
					<div className="space-y-6 mb-8">
						<h1
							className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in ${
								isDark ? "text-white" : "text-gray-900"
							}`}>
							At Blue Sprout Agency
							<span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
								We Transform Small Businesses
							</span>
							<span
								className={`block text-2xl md:text-3xl lg:text-4xl font-normal mt-4 animate-slide-up ${
									isDark ? "text-gray-300" : "text-gray-600"
								}`}>
								Into Online Visibility Powerhouses
							</span>
						</h1>

						{/* Problem Statement with Animation */}
						<div
							className={`p-6 rounded-2xl backdrop-blur-sm border animate-fade-in-delayed ${
								isDark
									? "bg-red-900/30 border-red-500/30 text-red-200"
									: "bg-red-50 border-red-200 text-red-700"
							}`}>
							<h2 className="text-xl md:text-2xl font-bold mb-2">
								🤔 Ever Wondered Why Your Clients Won't Reach You?
							</h2>
							<p className="text-lg">
								<strong>They're finding your competitors instead...</strong>
								<br />
								While you're working hard in your business, they're dominating
								online!
							</p>
						</div>

						{/* Solution Statement */}
						<div
							className={`p-6 rounded-2xl backdrop-blur-sm border animate-fade-in-delayed-more ${
								isDark
									? "bg-green-900/30 border-green-500/30 text-green-200"
									: "bg-green-50 border-green-200 text-green-700"
							}`}>
							<h2 className="text-xl md:text-2xl font-bold mb-2">
								✨ We Fix That Problem
							</h2>
							<p className="text-lg">
								<strong>
									📱 Social Media Management • 🌐 Professional Websites • 🎬
									Viral Videos
								</strong>
								<br />
								Get found first, get chosen first, grow faster than ever!
							</p>
						</div>
					</div>

					{/* CTA Buttons with Animation */}
					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up-delayed">
						<Link
							to="/contact"
							className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse">
							Transform My Business Now
							<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</Link>

						<a
							href="tel:+16572174737"
							className={`inline-flex items-center px-8 py-4 border-2 border-blue-600 font-bold text-lg rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 ${
								isDark ? "text-blue-400" : "text-blue-600"
							}`}>
							📞 Call: (657) 217-4737
						</a>
					</div>

					{/* Trust Indicators with Animation */}
					<div className="flex flex-wrap justify-center items-center gap-8 mb-16 text-sm animate-fade-in-slow">
						<div className="flex items-center space-x-2">
							<Star className="w-5 h-5 text-yellow-400 animate-spin-slow" />
							<span className={isDark ? "text-gray-300" : "text-gray-600"}>
								4.9/5 Rating
							</span>
						</div>
						<div className="flex items-center space-x-2">
							<Users className="w-5 h-5 text-blue-500 animate-bounce" />
							<span className={isDark ? "text-gray-300" : "text-gray-600"}>
								50+ Happy Clients
							</span>
						</div>
						<div className="flex items-center space-x-2">
							<Zap className="w-5 h-5 text-purple-500 animate-pulse" />
							<span className={isDark ? "text-gray-300" : "text-gray-600"}>
								24hr Response
							</span>
						</div>
						<div className="flex items-center space-x-2">
							<Award className="w-5 h-5 text-green-500 animate-bounce delay-300" />
							<span className={isDark ? "text-gray-300" : "text-gray-600"}>
								Chino, CA Local
							</span>
						</div>
					</div>
				</div>

				{/* Results Preview with Animation */}
				<div className="grid md:grid-cols-3 gap-8 mb-16">
					{[
						{
							number: "300%",
							label: "Average Growth",
							description: "Social media engagement boost",
							icon: <TrendingUp className="w-8 h-8" />,
							color: "blue",
							delay: "animate-slide-up",
						},
						{
							number: "50+",
							label: "Success Stories",
							description: "Local businesses transformed",
							icon: <Users className="w-8 h-8" />,
							color: "purple",
							delay: "animate-slide-up-delayed",
						},
						{
							number: "$1M+",
							label: "Revenue Generated",
							description: "Additional sales for clients",
							icon: <Star className="w-8 h-8" />,
							color: "pink",
							delay: "animate-slide-up-delayed-more",
						},
					].map((stat, index) => (
						<div
							key={index}
							className={`text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl ${
								stat.delay
							} ${
								isDark
									? "bg-gray-800/50 border border-gray-700"
									: "bg-white/80 border border-gray-200"
							} backdrop-blur-sm`}>
							<div
								className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 animate-bounce ${
									stat.color === "blue"
										? "bg-blue-100 dark:bg-blue-900/30"
										: stat.color === "purple"
										? "bg-purple-100 dark:bg-purple-900/30"
										: "bg-pink-100 dark:bg-pink-900/30"
								}`}>
								<div
									className={
										stat.color === "blue"
											? "text-blue-600"
											: stat.color === "purple"
											? "text-purple-600"
											: "text-pink-600"
									}>
									{stat.icon}
								</div>
							</div>
							<div
								className={`text-4xl font-bold mb-2 ${
									stat.color === "blue"
										? "text-blue-600"
										: stat.color === "purple"
										? "text-purple-600"
										: "text-pink-600"
								}`}>
								{stat.number}
							</div>
							<div
								className={`text-lg font-semibold mb-2 ${
									isDark ? "text-white" : "text-gray-800"
								}`}>
								{stat.label}
							</div>
							<div
								className={`text-sm ${
									isDark ? "text-gray-400" : "text-gray-600"
								}`}>
								{stat.description}
							</div>
						</div>
					))}
				</div>

				{/* Final CTA Section */}
				<div
					className={`text-center p-8 rounded-2xl backdrop-blur-sm border animate-fade-in-slow ${
						isDark
							? "bg-gradient-to-r from-orange-900/50 to-red-900/50 border-orange-500/30"
							: "bg-gradient-to-r from-orange-50 to-red-50 border-orange-200"
					}`}>
					<h2
						className={`text-2xl md:text-3xl font-bold mb-4 ${
							isDark ? "text-white" : "text-gray-800"
						}`}>
						Ready to Stop Losing Customers to Competitors?
					</h2>
					<p
						className={`text-lg mb-6 ${
							isDark ? "text-gray-300" : "text-gray-600"
						}`}>
						Join 50+ successful businesses in Chino, California who chose
						visibility over invisibility
					</p>
					<Link
						to="/pricing"
						className={`inline-flex items-center px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
							isDark
								? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
								: "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
						}`}>
						See Our Lowest Pricing Ever
						<ArrowRight className="ml-2 w-5 h-5" />
					</Link>
				</div>
			</div>
		</section>
	);
};
