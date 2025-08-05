// Add this section to your Hero component or create a separate pricing section

const PricingCards = ({ isDark }: { isDark: boolean }) => {
	return (
		<div className="max-w-7xl mx-auto px-6 py-16">
			<div className="text-center mb-12">
				<h2
					className={`text-3xl font-bold mb-4 ${
						isDark ? "text-white" : "text-gray-800"
					}`}>
					Choose Your Growth Plan
				</h2>
				<p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}>
					Professional services designed for small businesses
				</p>
			</div>

			<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
				{/* Social Media Management */}
				<div
					className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
						isDark
							? "bg-gray-800 border-gray-700 hover:border-blue-500"
							: "bg-white border-gray-200 hover:border-blue-500 hover:shadow-lg"
					}`}>
					<div className="text-center">
						<div className="text-4xl mb-4">📱</div>
						<h3
							className={`text-xl font-bold mb-2 ${
								isDark ? "text-white" : "text-gray-800"
							}`}>
							Social Media Management
						</h3>
						<div className="mb-4">
							<span className="text-3xl font-bold text-blue-600">$149</span>
							<span
								className={`text-sm ${
									isDark ? "text-gray-400" : "text-gray-500"
								}`}>
								/month
							</span>
						</div>

						<ul
							className={`text-left space-y-2 mb-6 text-sm ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							<li className="flex items-center">
								<span className="text-green-500 mr-2">✓</span>
								Daily posts (Instagram + Facebook)
							</li>
							<li className="flex items-center">
								<span className="text-green-500 mr-2">✓</span>
								Content creation & planning
							</li>
							<li className="flex items-center">
								<span className="text-green-500 mr-2">✓</span>
								Trending hashtags research
							</li>
							<li className="flex items-center">
								<span className="text-green-500 mr-2">✓</span>
								Community management
							</li>
							<li className="flex items-center">
								<span className="text-green-500 mr-2">✓</span>
								Monthly analytics report
							</li>
						</ul>

						<button className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
							Get Started
						</button>
					</div>
				</div>

				{/* Viral Video Editing */}
				<div
					className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
						isDark
							? "bg-gray-800 border-gray-700 hover:border-purple-500"
							: "bg-white border-gray-200 hover:border-purple-500 hover:shadow-lg"
					}`}>
					<div className="text-center">
						<div className="text-4xl mb-4">🎬</div>
						<h3
							className={`text-xl font-bold mb-2 ${
								isDark ? "text-white" : "text-gray-800"
							}`}>
							Viral Video Editing
						</h3>
						<div className="mb-4">
							<span className="text-3xl font-bold text-purple-600">$149</span>
							<span
								className={`text-sm ${
									isDark ? "text-gray-400" : "text-gray-500"
								}`}>
								/month
							</span>
						</div>

						<ul
							className={`text-left space-y-2 mb-6 text-sm ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							<li className="flex items-center">
								<span className="text-green-500 mr-2">✓</span>
								4-6 videos per month
							</li>
							<li className="flex items-center">
								<span className="text-green-500 mr-2">✓</span>
								TikTok + Instagram optimization
							</li>
							<li className="flex items-center">
								<span className="text-green-500 mr-2">✓</span>
								Trending effects & transitions
							</li>
							<li className="flex items-center">
								<span className="text-green-500 mr-2">✓</span>
								Captions & text overlay
							</li>
							<li className="flex items-center">
								<span className="text-green-500 mr-2">✓</span>
								Music & sound design
							</li>
						</ul>

						<button className="w-full py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors">
							Get Started
						</button>
					</div>
				</div>

				{/* Website Setup */}
				<div
					className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
						isDark
							? "bg-gray-800 border-gray-700 hover:border-green-500"
							: "bg-white border-gray-200 hover:border-green-500 hover:shadow-lg"
					}`}>
					<div className="text-center">
						<div className="text-4xl mb-4">🌐</div>
						<h3
							className={`text-xl font-bold mb-2 ${
								isDark ? "text-white" : "text-gray-800"
							}`}>
							Website Setup
						</h3>
						<div className="mb-4">
							<span className="text-3xl font-bold text-green-600">$149</span>
							<span
								className={`text-sm ${
									isDark ? "text-gray-400" : "text-gray-500"
								}`}>
								{" "}
								one-time
							</span>
						</div>

						<ul
							className={`text-left space-y-2 mb-6 text-sm ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							<li className="flex items-center">
								<span className="text-green-500 mr-2">✓</span>
								Single page responsive design
							</li>
							<li className="flex items-center">
								<span className="text-green-500 mr-2">✓</span>
								SEO-friendly structure
							</li>
							<li className="flex items-center">
								<span className="text-green-500 mr-2">✓</span>
								Contact form integration
							</li>
							<li className="flex items-center">
								<span className="text-green-500 mr-2">✓</span>
								Mobile optimization
							</li>
							<li className="flex items-center">
								<span className="text-green-500 mr-2">✓</span>
								Basic content creation
							</li>
						</ul>

						<button className="w-full py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors">
							Get Started
						</button>
					</div>
				</div>

				{/* All-in-One Bundle */}
				<div
					className={`p-6 rounded-2xl border-4 border-gradient-to-r from-orange-500 to-red-500 relative transform hover:scale-105 transition-all duration-300 ${
						isDark
							? "bg-gradient-to-br from-orange-900 to-red-900"
							: "bg-gradient-to-br from-orange-500 to-red-500"
					} text-white`}>
					{/* Popular Badge */}
					<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
						<div className="bg-yellow-400 text-gray-800 px-4 py-1 rounded-full text-sm font-bold">
							🔥 BEST VALUE
						</div>
					</div>

					<div className="text-center">
						<div className="text-4xl mb-4">🚀</div>
						<h3 className="text-xl font-bold mb-2">Complete Growth Package</h3>
						<div className="mb-4">
							<div className="text-2xl line-through opacity-75">$447/month</div>
							<span className="text-4xl font-bold">$297</span>
							<span className="text-sm">/month</span>
						</div>

						<div className="bg-white/20 p-4 rounded-lg mb-6">
							<div className="text-2xl font-bold text-yellow-300 mb-2">
								Save $150/month!
							</div>
							<div className="text-sm">
								Everything you need to dominate online
							</div>
						</div>

						<ul className="text-left space-y-2 mb-6 text-sm">
							<li className="flex items-center">
								<span className="text-yellow-300 mr-2">⭐</span>
								<strong>Everything from all 3 plans</strong>
							</li>
							<li className="flex items-center">
								<span className="text-yellow-300 mr-2">⭐</span>
								Website maintenance & updates
							</li>
							<li className="flex items-center">
								<span className="text-yellow-300 mr-2">⭐</span>
								Unlimited video edits (on-demand)
							</li>
							<li className="flex items-center">
								<span className="text-yellow-300 mr-2">⭐</span>
								Advanced SEO optimization
							</li>
							<li className="flex items-center">
								<span className="text-yellow-300 mr-2">⭐</span>
								Priority support (24hr response)
							</li>
							<li className="flex items-center">
								<span className="text-yellow-300 mr-2">⭐</span>
								Monthly strategy consultation
							</li>
							<li className="flex items-center">
								<span className="text-yellow-300 mr-2">⭐</span>
								Custom content creation
							</li>
						</ul>

						<button className="w-full py-4 bg-white text-orange-600 rounded-lg font-bold text-lg hover:bg-yellow-50 transition-colors shadow-lg">
							Claim This Deal
						</button>

						<div className="text-xs mt-3 opacity-90">
							⏰ Limited time - Save $1800/year
						</div>
					</div>
				</div>
			</div>

			{/* Guarantee */}
			<div className="text-center mt-12">
				<div
					className={`inline-flex items-center px-6 py-3 rounded-full ${
						isDark
							? "bg-green-900/30 text-green-300"
							: "bg-green-100 text-green-700"
					}`}>
					🛡️ 30-day money-back guarantee on all plans
				</div>
			</div>
		</div>
	);
};

export default PricingCards;
