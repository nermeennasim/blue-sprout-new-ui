// components/about/DiagonalFlowAboutSection.tsx
import React from "react";
import { MissionCard } from "./MissionCard";
import { ServicesCard } from "./ServicesCard";
import { ImpactCard } from "./ImpactCard";
import { StorySection } from "./StorySection";

interface DiagonalFlowAboutSectionProps {
	isDark?: boolean;
	customServices?: Array<{ icon: string; text: string; category?: string }>;
	customStats?: Array<{
		value: string;
		label: string;
		color: "purple" | "cyan" | "pink" | "green";
	}>;
	customStory?: {
		title?: string;
		description?: string;
		tags?: Array<{ text: string; color?: string }>;
	};
}

export const DiagonalFlowAboutSection: React.FC<
	DiagonalFlowAboutSectionProps
> = ({ isDark = false, customServices, customStats, customStory }) => {
	return (
		<div className="relative max-w-7xl mx-auto">
			{/* Decorative Background Elements */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				{/* Flowing Lines - Only visible on large screens */}
				<div className="hidden xl:block">
					{/* Mission to Services Flow */}
					<svg
						className="absolute top-96 left-1/4 transform -translate-x-1/2"
						width="500"
						height="300"
						viewBox="0 0 500 300">
						<defs>
							<linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop
									offset="0%"
									stopColor={isDark ? "#8B5CF6" : "#7C3AED"}
									stopOpacity="0.4"
								/>
								<stop
									offset="100%"
									stopColor={isDark ? "#06B6D4" : "#0891B2"}
									stopOpacity="0.2"
								/>
							</linearGradient>
						</defs>
						<path
							d="M 0 50 Q 250 150 500 50"
							stroke="url(#gradient1)"
							strokeWidth="3"
							fill="none"
							strokeDasharray="8,12"
							className="animate-pulse"
						/>
						{/* Small dots along the path */}
						<circle
							cx="125"
							cy="100"
							r="4"
							fill={isDark ? "#8B5CF6" : "#7C3AED"}
							opacity="0.6"
						/>
						<circle
							cx="375"
							cy="100"
							r="4"
							fill={isDark ? "#06B6D4" : "#0891B2"}
							opacity="0.6"
						/>
					</svg>

					{/* Services to Impact Flow */}
					<svg
						className="absolute top-[800px] left-3/4 transform -translate-x-1/2"
						width="500"
						height="300"
						viewBox="0 0 500 300">
						<defs>
							<linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop
									offset="0%"
									stopColor={isDark ? "#06B6D4" : "#0891B2"}
									stopOpacity="0.4"
								/>
								<stop
									offset="100%"
									stopColor={isDark ? "#10B981" : "#059669"}
									stopOpacity="0.2"
								/>
							</linearGradient>
						</defs>
						<path
							d="M 500 50 Q 250 150 0 50"
							stroke="url(#gradient2)"
							strokeWidth="3"
							fill="none"
							strokeDasharray="8,12"
							className="animate-pulse"
							style={{ animationDelay: "1s" }}
						/>
						{/* Small dots along the path */}
						<circle
							cx="375"
							cy="100"
							r="4"
							fill={isDark ? "#06B6D4" : "#0891B2"}
							opacity="0.6"
						/>
						<circle
							cx="125"
							cy="100"
							r="4"
							fill={isDark ? "#10B981" : "#059669"}
							opacity="0.6"
						/>
					</svg>
				</div>

				{/* Subtle Background Shapes */}
				<div
					className={`absolute top-20 right-10 w-32 h-32 rounded-full ${
						isDark ? "bg-purple-500/5" : "bg-purple-200/20"
					} blur-xl`}></div>
				<div
					className={`absolute top-96 left-10 w-40 h-40 rounded-full ${
						isDark ? "bg-blue-500/5" : "bg-blue-200/20"
					} blur-xl`}></div>
				<div
					className={`absolute bottom-20 right-20 w-36 h-36 rounded-full ${
						isDark ? "bg-green-500/5" : "bg-green-200/20"
					} blur-xl`}></div>
			</div>

			<div className="relative space-y-24">
				{/* Mission Card - Left Side */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
					<div className="lg:col-span-5 lg:col-start-1">
						<div className="transform hover:scale-105 hover:-rotate-1 transition-all duration-700 ease-out">
							<MissionCard isDark={isDark} />
						</div>
					</div>
					<div className="lg:col-span-7 hidden lg:block">
						{/* Content Space - Could add supporting text or leave empty for flow */}
						<div className="opacity-60 text-center">
							<div
								className={`inline-block px-6 py-3 rounded-full ${
									isDark
										? "bg-purple-900/30 text-purple-300"
										: "bg-purple-100 text-purple-600"
								} font-medium text-sm`}>
								Foundation of Trust ✨
							</div>
						</div>
					</div>
				</div>

				{/* Services Card - Right Side */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
					<div className="lg:col-span-6 hidden lg:block">
						{/* Content Space */}
						<div className="opacity-60 text-center">
							<div
								className={`inline-block px-6 py-3 rounded-full ${
									isDark
										? "bg-blue-900/30 text-blue-300"
										: "bg-blue-100 text-blue-600"
								} font-medium text-sm`}>
								Technical Excellence 🚀
							</div>
						</div>
					</div>
					<div className="lg:col-span-6 lg:col-start-7">
						<div className="transform hover:scale-105 hover:rotate-1 transition-all duration-700 ease-out">
							<ServicesCard isDark={isDark} services={customServices} />
						</div>
					</div>
				</div>

				{/* Impact Card - Left Side */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
					<div className="lg:col-span-5 lg:col-start-1">
						<div className="transform hover:scale-105 hover:-rotate-1 transition-all duration-700 ease-out">
							<ImpactCard isDark={isDark} stats={customStats} />
						</div>
					</div>
					<div className="lg:col-span-7 hidden lg:block">
						{/* Content Space */}
						<div className="opacity-60 text-center">
							<div
								className={`inline-block px-6 py-3 rounded-full ${
									isDark
										? "bg-green-900/30 text-green-300"
										: "bg-green-100 text-green-600"
								} font-medium text-sm`}>
								Proven Results 📈
							</div>
						</div>
					</div>
				</div>

				{/* Story Section - Full Width with Special Treatment */}
				<div className="mt-32">
					<div className="transform hover:scale-[1.02] transition-all duration-500 ease-out">
						{/* Story Section with Enhanced Background */}
						<div
							className={`relative overflow-hidden rounded-3xl ${
								isDark
									? "bg-gradient-to-r from-orange-900/50 via-pink-900/50 to-purple-900/50"
									: "bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100"
							}`}>
							{/* Animated Background Pattern */}
							<div className="absolute inset-0 opacity-10">
								<div className="absolute top-0 left-0 w-full h-full">
									{[...Array(20)].map((_, i) => (
										<div
											key={i}
											className={`absolute w-2 h-2 rounded-full ${
												isDark ? "bg-white" : "bg-gray-600"
											}`}
											style={{
												left: `${Math.random() * 100}%`,
												top: `${Math.random() * 100}%`,
												animationDelay: `${Math.random() * 5}s`,
											}}></div>
									))}
								</div>
							</div>

							<div className="relative">
								<StorySection isDark={isDark} {...customStory} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// Enhanced CSS for animations (add to your global CSS or component)
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
