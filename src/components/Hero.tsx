import { Sprout } from "lucide-react";

export interface HeroProps {
	isDark: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
	return (
		<section
			className={`scroll-mt-24 flex items-center justify-center min-h-screen transition-all duration-300 ${
				isDark
					? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
					: "bg-gradient-to-br from-gray-50 via-white to-gray-100"
			}`}>
			<div className="w-full max-w-6xl mx-auto px-6 py-24">
				<div className="text-center">
					{/* Subheading */}
					<div
						className={`inline-block px-6 py-3 rounded-full text-sm font-semibold mb-6 transition-all duration-300 ${
							isDark
								? "bg-gray-800 text-orange-400 border border-orange-500/30 shadow-lg shadow-orange-500/20"
								: "bg-teal-50 text-teal-700 border border-teal-200 shadow-lg shadow-teal-500/20"
						}`}>
						🚀 Transform Your Digital Journey
					</div>

					{/* Headline */}
					<h1
						className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-colors duration-300 ${
							isDark ? "text-white" : "text-gray-800"
						}`}>
						Growing Your
						<span
							className={`block mt-2 drop-shadow-lg bg-gradient-to-r bg-clip-text text-transparent ${
								isDark
									? "from-orange-400 to-red-500"
									: "from-teal-500 to-blue-600"
							}`}>
							Digital Presence
						</span>
					</h1>

					{/* Description */}
					<p
						className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
							isDark ? "text-gray-300" : "text-gray-600"
						}`}>
						We help businesses flourish in the digital landscape with innovative
						solutions, creative design, and strategic growth initiatives that
						deliver measurable results.
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
						<button
							className={`px-10 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 transform shadow-xl hover:shadow-2xl ${
								isDark
									? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-orange-500/30"
									: "bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 shadow-teal-500/30"
							}`}>
							Start Your Project
						</button>
						<button
							className={`px-10 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 transform border-2 shadow-lg ${
								isDark
									? "border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white bg-gray-800/50 shadow-orange-500/20"
									: "border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white bg-white shadow-teal-500/20"
							}`}>
							View Our Work
						</button>
					</div>

					{/* Stats Section */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
						{[
							{ number: "150+", label: "Projects Completed", icon: "🎯" },
							{ number: "98%", label: "Client Satisfaction", icon: "⭐" },
							{ number: "5+", label: "Years Experience", icon: "🚀" },
						].map((stat, index) => (
							<div
								key={index}
								className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl ${
									isDark
										? "bg-gray-800/50 border border-gray-700 hover:border-orange-500/30"
										: "bg-white/80 border border-gray-200 hover:border-teal-300 hover:shadow-teal-500/10"
								} backdrop-blur-sm`}>
								<div className="text-3xl mb-2">{stat.icon}</div>
								<div
									className={`text-3xl font-bold mb-2 ${
										isDark ? "text-orange-400" : "text-teal-600"
									}`}>
									{stat.number}
								</div>
								<div
									className={`text-sm font-medium ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									{stat.label}
								</div>
							</div>
						))}
					</div>

					{/* Hero Visual Element */}
					<div className="relative">
						<div
							className={`w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
								isDark ? "shadow-orange-500/20" : "shadow-teal-500/20"
							}`}>
							<div
								className={`h-2 ${
									isDark
										? "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"
										: "bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500"
								}`}
							/>
							<div
								className={`p-12 flex items-center justify-center min-h-96 ${
									isDark
										? "bg-gradient-to-br from-gray-800 to-gray-900"
										: "bg-gradient-to-br from-white to-gray-50"
								}`}>
								<div className="text-center">
									<div
										className={`p-8 rounded-full mb-6 mx-auto w-32 h-32 flex items-center justify-center transition-all duration-300 hover:scale-110 transform shadow-xl ${
											isDark
												? "bg-gradient-to-br from-orange-500 to-red-500 shadow-orange-500/40"
												: "bg-gradient-to-br from-teal-500 to-blue-600 shadow-teal-500/40"
										}`}>
										<Sprout className="w-16 h-16 text-white" />
									</div>
									<h3
										className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
											isDark ? "text-white" : "text-gray-800"
										}`}>
										Your Growth Partner
									</h3>
									<div
										className={`flex flex-wrap justify-center gap-4 text-sm font-semibold ${
											isDark ? "text-gray-300" : "text-gray-700"
										}`}>
										{["Innovative", "Creative", "Results-Driven"].map(
											(tag, index) => (
												<span
													key={index}
													className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
														isDark
															? "bg-gray-700 text-orange-400 hover:bg-orange-500 hover:text-white"
															: "bg-teal-50 text-teal-700 hover:bg-teal-500 hover:text-white"
													}`}>
													{tag}
												</span>
											)
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
