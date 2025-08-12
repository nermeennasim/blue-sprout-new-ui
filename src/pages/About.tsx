// // pages/About.tsx - Updated with visual process flow
// import React from "react";
// import Section from "../components/Section";
// import { AboutSection } from "../components/about/AboutSection";

// interface AboutProps {
// 	isDark: boolean;
// }

// const About: React.FC<AboutProps> = ({ isDark }) => {
// 	return (
// 		<Section id="about-page" className="pt-32 pb-20">
// 			{/* Hero Section */}
// 			<div className="text-center mb-20">
// 				<h1 className="text-4xl md:text-5xl font-bold mb-8">
// 					About Blue Sprout Agency
// 				</h1>
// 				<p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
// 					We don't believe in one-size-fits-all solutions. Tell us about your
// 					business - your workflows, your challenges, your goals. We'll build
// 					the custom web platforms and automation that fit exactly how you
// 					operate. Blue Sprout plants the digital seeds, your business enjoys
// 					the harvest.
// 				</p>
// 			</div>

// 			{/* Visual Process Flow */}
// 			<div className="mb-20">
// 				<h2
// 					className={`text-3xl font-bold text-center mb-12 ${
// 						isDark ? "text-white" : "text-gray-900"
// 					}`}>
// 					How We Transform Your Business
// 				</h2>

// 				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
// 					{/* Step 1: Tell Us */}
// 					<div
// 						className={`text-center p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 ${
// 							isDark
// 								? "bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-700"
// 								: "bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200"
// 						} shadow-xl`}>
// 						<div className="mb-6 relative">
// 							<div
// 								className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl ${
// 									isDark ? "bg-blue-800" : "bg-blue-100"
// 								}`}>
// 								💬
// 							</div>
// 							<div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
// 								1
// 							</div>
// 						</div>

// 						{/* Suggested Image */}
// 						<div
// 							className={`mb-6 p-3 rounded-xl ${
// 								isDark ? "bg-gray-700" : "bg-white"
// 							}`}>
// 							<img
// 								src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.4"
// 								alt="Business consultation meeting"
// 								className="w-full h-32 object-cover rounded-lg"
// 							/>
// 							<div
// 								className={`text-xs mt-2 ${
// 									isDark ? "text-gray-400" : "text-gray-600"
// 								}`}>
// 								"Understanding your unique process"
// 							</div>
// 						</div>

// 						<h3
// 							className={`text-xl font-bold mb-4 ${
// 								isDark ? "text-white" : "text-gray-900"
// 							}`}>
// 							Tell Us What You Do
// 						</h3>
// 						<p
// 							className={`text-sm ${
// 								isDark ? "text-gray-300" : "text-gray-700"
// 							}`}>
// 							Share your current workflows, daily challenges, and business
// 							goals. We listen, ask questions, and understand what makes your
// 							business unique.
// 						</p>
// 					</div>

// 					{/* Step 2: We Build */}
// 					<div
// 						className={`text-center p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 ${
// 							isDark
// 								? "bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-700"
// 								: "bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200"
// 						} shadow-xl`}>
// 						<div className="mb-6 relative">
// 							<div
// 								className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl ${
// 									isDark ? "bg-purple-800" : "bg-purple-100"
// 								}`}>
// 								⚡
// 							</div>
// 							<div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
// 								2
// 							</div>
// 						</div>

// 						{/* Suggested Image */}
// 						<div
// 							className={`mb-6 p-3 rounded-xl ${
// 								isDark ? "bg-gray-700" : "bg-white"
// 							}`}>
// 							<img
// 								src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.4"
// 								alt="Developer coding automation solutions"
// 								className="w-full h-32 object-cover rounded-lg"
// 							/>
// 							<div
// 								className={`text-xs mt-2 ${
// 									isDark ? "text-gray-400" : "text-gray-600"
// 								}`}>
// 								"Crafting your custom solution"
// 							</div>
// 						</div>

// 						<h3
// 							className={`text-xl font-bold mb-4 ${
// 								isDark ? "text-white" : "text-gray-900"
// 							}`}>
// 							We Build & Automate
// 						</h3>
// 						<p
// 							className={`text-sm ${
// 								isDark ? "text-gray-300" : "text-gray-700"
// 							}`}>
// 							Our team designs and develops custom web applications, automated
// 							workflows, and systems that perfectly match your business
// 							processes.
// 						</p>
// 					</div>

// 					{/* Step 3: You Enjoy */}
// 					<div
// 						className={`text-center p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 ${
// 							isDark
// 								? "bg-gradient-to-br from-green-900/50 to-teal-900/50 border border-green-700"
// 								: "bg-gradient-to-br from-green-50 to-teal-50 border border-green-200"
// 						} shadow-xl`}>
// 						<div className="mb-6 relative">
// 							<div
// 								className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl ${
// 									isDark ? "bg-green-800" : "bg-green-100"
// 								}`}>
// 								🚀
// 							</div>
// 							<div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
// 								3
// 							</div>
// 						</div>

// 						{/* Suggested Image */}
// 						<div
// 							className={`mb-6 p-3 rounded-xl ${
// 								isDark ? "bg-gray-700" : "bg-white"
// 							}`}>
// 							<img
// 								src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.4"
// 								alt="Business owner enjoying growth and success"
// 								className="w-full h-32 object-cover rounded-lg"
// 							/>
// 							<div
// 								className={`text-xs mt-2 ${
// 									isDark ? "text-gray-400" : "text-gray-600"
// 								}`}>
// 								"Harvesting the results"
// 							</div>
// 						</div>

// 						<h3
// 							className={`text-xl font-bold mb-4 ${
// 								isDark ? "text-white" : "text-gray-900"
// 							}`}>
// 							You Enjoy The Results
// 						</h3>
// 						<p
// 							className={`text-sm ${
// 								isDark ? "text-gray-300" : "text-gray-700"
// 							}`}>
// 							Watch your business run smoother, save time on repetitive tasks,
// 							and focus on growth while your systems work 24/7.
// 						</p>
// 					</div>
// 				</div>

// 				{/* Connecting Arrows - Hidden on mobile */}
// 				<div className="hidden md:flex justify-center items-center mt-8 space-x-8">
// 					<div className="flex items-center">
// 						<div
// 							className={`w-16 h-1 ${
// 								isDark
// 									? "bg-gradient-to-r from-blue-500 to-purple-500"
// 									: "bg-gradient-to-r from-blue-400 to-purple-400"
// 							}`}></div>
// 						<div
// 							className={`w-0 h-0 border-l-8 border-r-0 border-b-4 border-t-4 border-transparent ${
// 								isDark ? "border-l-purple-500" : "border-l-purple-400"
// 							}`}></div>
// 					</div>
// 					<div className="flex items-center">
// 						<div
// 							className={`w-16 h-1 ${
// 								isDark
// 									? "bg-gradient-to-r from-purple-500 to-green-500"
// 									: "bg-gradient-to-r from-purple-400 to-green-400"
// 							}`}></div>
// 						<div
// 							className={`w-0 h-0 border-l-8 border-r-0 border-b-4 border-t-4 border-transparent ${
// 								isDark ? "border-l-green-500" : "border-l-green-400"
// 							}`}></div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Call to Action for Process */}
// 			<div
// 				className={`text-center mb-20 p-8 rounded-3xl ${
// 					isDark
// 						? "bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-700"
// 						: "bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200"
// 				} max-w-4xl mx-auto`}>
// 				<h3
// 					className={`text-2xl font-bold mb-4 ${
// 						isDark ? "text-white" : "text-gray-900"
// 					}`}>
// 					Ready to Transform Your Business Process?
// 				</h3>
// 				<p
// 					className={`text-lg mb-6 ${
// 						isDark ? "text-gray-300" : "text-gray-700"
// 					}`}>
// 					Every business is unique. Let's discuss how we can automate your
// 					specific workflows and challenges.
// 				</p>
// 				<button
// 					className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
// 						isDark
// 							? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
// 							: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
// 					} shadow-lg hover:shadow-xl`}>
// 					Tell Us About Your Business 🚀
// 				</button>
// 			</div>

// 			{/* Original About Section */}
// 			<AboutSection isDark={isDark} />
// 		</Section>
// 	);
// };

// export default About;

// // Additional Component: ProcessStep (if you want to make it reusable)
// interface ProcessStepProps {
// 	stepNumber: number;
// 	icon: string;
// 	title: string;
// 	description: string;
// 	imageSrc: string;
// 	imageAlt: string;
// 	imageCaption: string;
// 	gradientClass: string;
// 	iconBgClass: string;
// 	borderClass: string;
// 	accentColor: string;
// 	isDark?: boolean;
// }

// export const ProcessStep: React.FC<ProcessStepProps> = ({
// 	stepNumber,
// 	icon,
// 	title,
// 	description,
// 	imageSrc,
// 	imageAlt,
// 	imageCaption,
// 	gradientClass,
// 	iconBgClass,
// 	borderClass,
// 	accentColor,
// 	isDark = false,
// }) => {
// 	return (
// 		<div
// 			className={`text-center p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 ${gradientClass} ${borderClass} shadow-xl`}>
// 			<div className="mb-6 relative">
// 				<div
// 					className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl ${iconBgClass}`}>
// 					{icon}
// 				</div>
// 				<div
// 					className={`absolute -top-2 -right-2 w-8 h-8 ${accentColor} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
// 					{stepNumber}
// 				</div>
// 			</div>

// 			<div
// 				className={`mb-6 p-3 rounded-xl ${
// 					isDark ? "bg-gray-700" : "bg-white"
// 				}`}>
// 				<img
// 					src={imageSrc}
// 					alt={imageAlt}
// 					className="w-full h-32 object-cover rounded-lg"
// 				/>
// 				<div
// 					className={`text-xs mt-2 ${
// 						isDark ? "text-gray-400" : "text-gray-600"
// 					}`}>
// 					{imageCaption}
// 				</div>
// 			</div>

// 			<h3
// 				className={`text-xl font-bold mb-4 ${
// 					isDark ? "text-white" : "text-gray-900"
// 				}`}>
// 				{title}
// 			</h3>
// 			<p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
// 				{description}
// 			</p>
// 		</div>
// 	);
// };

// pages/About.tsx - Complete About Page with Diagonal Flow
import React from "react";
import Section from "../components/Section";
import { DiagonalFlowAboutSection } from "../components/about/DiagonalFlowAboutSection";
import { useNavigate } from "react-router-dom";

interface AboutProps {
	isDark: boolean;
}

// Enhanced CSS for animations
const DiagonalFlowStyles = `
@keyframes float-gentle {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

@keyframes pulse-dot {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

.animate-float {
  animation: float-gentle 6s ease-in-out infinite;
}

.animate-pulse-dot {
  animation: pulse-dot 3s ease-in-out infinite;
}

/* Smooth scroll behavior for the entire section */
.diagonal-flow-section {
  scroll-behavior: smooth;
}

/* Enhanced hover effects */
.card-hover:hover {
  transform: translateY(-12px) rotate(1deg);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Custom gradient animations */
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animated-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}
`;

const About: React.FC<AboutProps> = ({ isDark }) => {
	const navigate = useNavigate();

	// Function to handle calendar open
	const handleCalendarOpen = () => {
		// Navigate to the calendar page
		navigate("/contact");
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 100);
	};
	return (
		<>
			{/* Add styles for Diagonal Flow */}
			<style>{DiagonalFlowStyles}</style>

			<Section id="about-page" className="pt-32 pb-20 diagonal-flow-section">
				{/* Hero Section */}
				<div className="text-center mb-20">
					<h1 className="text-4xl md:text-5xl font-bold mb-8">
						About Blue Sprout Agency
					</h1>
					<p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
						We don't believe in one-size-fits-all solutions. Tell us about your
						business - your workflows, your challenges, your goals. We'll build
						the custom web platforms and automation that fit exactly how you
						operate. Blue Sprout plants the digital seeds, your business enjoys
						the harvest.
					</p>
				</div>

				{/* Visual Process Flow - 3-Step Process */}
				<div className="mb-20">
					<h2
						className={`text-3xl font-bold text-center mb-12 ${
							isDark ? "text-white" : "text-gray-900"
						}`}>
						How We Transform Your Business
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{/* Step 1: Tell Us */}
						<div
							className={`text-center p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 ${
								isDark
									? "bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-700"
									: "bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200"
							} shadow-xl`}>
							<div className="mb-6 relative">
								<div
									className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl ${
										isDark ? "bg-blue-800" : "bg-blue-100"
									}`}>
									💬
								</div>
								<div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
									1
								</div>
							</div>

							{/* Process Step Image */}
							<div
								className={`mb-6 p-3 rounded-xl ${
									isDark ? "bg-gray-700" : "bg-white"
								}`}>
								<img
									src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.4"
									alt="Business consultation meeting"
									className="w-full h-32 object-cover rounded-lg"
								/>
								<div
									className={`text-xs mt-2 ${
										isDark ? "text-gray-400" : "text-gray-600"
									}`}>
									"Understanding your unique process"
								</div>
							</div>

							<h3
								className={`text-xl font-bold mb-4 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Tell Us What You Do
							</h3>
							<p
								className={`text-sm ${
									isDark ? "text-gray-300" : "text-gray-700"
								}`}>
								Share your current workflows, daily challenges, and business
								goals. We listen, ask questions, and understand what makes your
								business unique.
							</p>
						</div>

						{/* Step 2: We Build */}
						<div
							className={`text-center p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 ${
								isDark
									? "bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-700"
									: "bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200"
							} shadow-xl`}>
							<div className="mb-6 relative">
								<div
									className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl ${
										isDark ? "bg-purple-800" : "bg-purple-100"
									}`}>
									⚡
								</div>
								<div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
									2
								</div>
							</div>

							{/* Process Step Image */}
							<div
								className={`mb-6 p-3 rounded-xl ${
									isDark ? "bg-gray-700" : "bg-white"
								}`}>
								<img
									src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.4"
									alt="Developer coding automation solutions"
									className="w-full h-32 object-cover rounded-lg"
								/>
								<div
									className={`text-xs mt-2 ${
										isDark ? "text-gray-400" : "text-gray-600"
									}`}>
									"Crafting your custom solution"
								</div>
							</div>

							<h3
								className={`text-xl font-bold mb-4 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								We Build & Automate
							</h3>
							<p
								className={`text-sm ${
									isDark ? "text-gray-300" : "text-gray-700"
								}`}>
								Our team designs and develops custom web applications, automated
								workflows, and systems that perfectly match your business
								processes.
							</p>
						</div>

						{/* Step 3: You Enjoy */}
						<div
							className={`text-center p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 ${
								isDark
									? "bg-gradient-to-br from-green-900/50 to-teal-900/50 border border-green-700"
									: "bg-gradient-to-br from-green-50 to-teal-50 border border-green-200"
							} shadow-xl`}>
							<div className="mb-6 relative">
								<div
									className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl ${
										isDark ? "bg-green-800" : "bg-green-100"
									}`}>
									🚀
								</div>
								<div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
									3
								</div>
							</div>

							{/* Process Step Image */}
							<div
								className={`mb-6 p-3 rounded-xl ${
									isDark ? "bg-gray-700" : "bg-white"
								}`}>
								<img
									src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.4"
									alt="Business owner enjoying growth and success"
									className="w-full h-32 object-cover rounded-lg"
								/>
								<div
									className={`text-xs mt-2 ${
										isDark ? "text-gray-400" : "text-gray-600"
									}`}>
									"Harvesting the results"
								</div>
							</div>

							<h3
								className={`text-xl font-bold mb-4 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								You Enjoy The Results
							</h3>
							<p
								className={`text-sm ${
									isDark ? "text-gray-300" : "text-gray-700"
								}`}>
								Watch your business run smoother, save time on repetitive tasks,
								and focus on growth while your systems work 24/7.
							</p>
						</div>
					</div>

					{/* Connecting Arrows - Hidden on mobile */}
					<div className="hidden md:flex justify-center items-center mt-8 space-x-8">
						<div className="flex items-center">
							<div
								className={`w-16 h-1 ${
									isDark
										? "bg-gradient-to-r from-blue-500 to-purple-500"
										: "bg-gradient-to-r from-blue-400 to-purple-400"
								}`}></div>
							<div
								className={`w-0 h-0 border-l-8 border-r-0 border-b-4 border-t-4 border-transparent ${
									isDark ? "border-l-purple-500" : "border-l-purple-400"
								}`}></div>
						</div>
						<div className="flex items-center">
							<div
								className={`w-16 h-1 ${
									isDark
										? "bg-gradient-to-r from-purple-500 to-green-500"
										: "bg-gradient-to-r from-purple-400 to-green-400"
								}`}></div>
							<div
								className={`w-0 h-0 border-l-8 border-r-0 border-b-4 border-t-4 border-transparent ${
									isDark ? "border-l-green-500" : "border-l-green-400"
								}`}></div>
						</div>
					</div>
				</div>

				{/* Call to Action for Process */}
				<div
					className={`text-center mb-20 p-8 rounded-3xl ${
						isDark
							? "bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-700"
							: "bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200"
					} max-w-4xl mx-auto`}>
					<h3
						className={`text-2xl font-bold mb-4 ${
							isDark ? "text-white" : "text-gray-900"
						}`}>
						Ready to Transform Your Business Process?
					</h3>
					<p
						className={`text-lg mb-6 ${
							isDark ? "text-gray-300" : "text-gray-700"
						}`}>
						Every business is unique. Let's discuss how we can automate your
						specific workflows and challenges.
					</p>
					<button
						onClick={handleCalendarOpen}
						className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
							isDark
								? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
								: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
						} shadow-lg hover:shadow-xl`}>
						Tell Us About Your Business 🚀
					</button>
				</div>

				{/* About Section with Diagonal Flow - Main Content */}
				<DiagonalFlowAboutSection isDark={isDark} />
			</Section>
		</>
	);
};

export default About;
