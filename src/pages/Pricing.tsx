// pages/Pricing.tsx - Final Version
import Section from "../components/Section";

interface PricingProps {
	isDark: boolean;
}

const Pricing: React.FC<PricingProps> = ({ isDark }) => {
	return (
		<Section id="pricing-page" className="pt-32 pb-20">
			<div className="max-w-7xl mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16">
					<h1
						className={`text-5xl font-bold mb-6 ${
							isDark ? "text-white" : "text-gray-900"
						}`}>
						Investment Plans
					</h1>
					<p
						className={`text-xl max-w-3xl mx-auto mb-8 ${
							isDark ? "text-gray-300" : "text-gray-600"
						}`}>
						Transparent pricing designed for growing businesses. Choose a
						package or get a custom solution tailored to your needs.
					</p>
					<div
						className={`inline-flex items-center px-6 py-3 rounded-full ${
							isDark
								? "bg-green-900/30 text-green-300"
								: "bg-green-100 text-green-700"
						}`}>
						🛡️ 30-day satisfaction guarantee • 📞 Free consultation always
						included
					</div>
				</div>

				{/* Main Service Packages */}
				<div className="grid lg:grid-cols-3 gap-8 mb-20">
					{/* Essential Package */}
					<div
						className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
							isDark
								? "bg-gray-800 border-gray-700 hover:border-blue-500"
								: "bg-white border-gray-200 hover:border-blue-500 hover:shadow-xl"
						}`}>
						<div className="text-center mb-6">
							<div
								className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
									isDark ? "bg-blue-900/30" : "bg-blue-100"
								}`}>
								<span className="text-2xl">🌱</span>
							</div>
							<h3
								className={`text-2xl font-bold mb-3 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Essential
							</h3>
							<p
								className={`text-sm ${
									isDark ? "text-gray-400" : "text-gray-600"
								}`}>
								Perfect for getting started online
							</p>
						</div>

						<div className="text-center mb-8">
							<div
								className={`text-lg font-semibold mb-2 ${
									isDark ? "text-blue-400" : "text-blue-600"
								}`}>
								Starting Investment
							</div>
							<div
								className={`text-3xl font-bold mb-2 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Custom Quote
							</div>
							<div
								className={`text-sm ${
									isDark ? "text-gray-400" : "text-gray-500"
								}`}>
								Based on your specific needs
							</div>
						</div>

						<div className="space-y-4 mb-8">
							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-gray-700/50" : "bg-gray-50"
								}`}>
								<h4
									className={`font-semibold mb-2 flex items-center ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									<span className="mr-2">🌐</span> Professional Website
								</h4>
								<ul
									className={`text-sm space-y-1 ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									<li>• 3-5 page responsive design</li>
									<li>• Mobile optimization</li>
									<li>• Contact form integration</li>
									<li>• Basic SEO setup</li>
									<li>• Domain & hosting guidance</li>
								</ul>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-gray-700/50" : "bg-gray-50"
								}`}>
								<h4
									className={`font-semibold mb-2 flex items-center ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									<span className="mr-2">🎨</span> Basic Branding
								</h4>
								<ul
									className={`text-sm space-y-1 ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									<li>• Logo design concepts</li>
									<li>• Color palette selection</li>
									<li>• Basic brand guidelines</li>
								</ul>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-gray-700/50" : "bg-gray-50"
								}`}>
								<h4
									className={`font-semibold mb-2 flex items-center ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									<span className="mr-2">🚀</span> Launch Support
								</h4>
								<ul
									className={`text-sm space-y-1 ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									<li>• Google Analytics setup</li>
									<li>• 30 days of support</li>
									<li>• Launch checklist & training</li>
								</ul>
							</div>
						</div>

						<a
							href="tel:+16572174737"
							className="block w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
							📞 Get Custom Quote
						</a>
					</div>

					{/* Growth Package - RECOMMENDED */}
					<div
						className={`p-8 rounded-2xl border-4 relative transform hover:scale-105 transition-all duration-300 ${
							isDark
								? "bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500"
								: "bg-gradient-to-br from-purple-50 to-blue-50 border-purple-500"
						}`}>
						{/* Recommended Badge */}
						<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
							<div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
								⭐ RECOMMENDED
							</div>
						</div>

						<div className="text-center mb-6">
							<div
								className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
									isDark ? "bg-purple-900/30" : "bg-purple-100"
								}`}>
								<span className="text-2xl">🚀</span>
							</div>
							<h3
								className={`text-2xl font-bold mb-3 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Growth
							</h3>
							<p
								className={`text-sm ${
									isDark ? "text-gray-300" : "text-gray-600"
								}`}>
								Complete digital presence solution
							</p>
						</div>

						<div className="text-center mb-8">
							<div
								className={`text-lg font-semibold mb-2 ${
									isDark ? "text-purple-400" : "text-purple-600"
								}`}>
								Starting Investment
							</div>
							<div
								className={`text-3xl font-bold mb-2 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Custom Quote
							</div>
							<div
								className={`text-sm ${
									isDark ? "text-green-400" : "text-green-600"
								}`}>
								💰 Best value for growing businesses
							</div>
						</div>

						<div className="space-y-4 mb-8">
							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-white/10" : "bg-white/80"
								}`}>
								<h4
									className={`font-semibold mb-2 ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									✨ Everything in Essential +
								</h4>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-white/10" : "bg-white/80"
								}`}>
								<h4
									className={`font-semibold mb-2 flex items-center ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									<span className="mr-2">📱</span> Social Media Launch
								</h4>
								<ul
									className={`text-sm space-y-1 ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									<li>• 2 months of content creation</li>
									<li>• Platform setup & optimization</li>
									<li>• Content calendar & strategy</li>
								</ul>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-white/10" : "bg-white/80"
								}`}>
								<h4
									className={`font-semibold mb-2 flex items-center ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									<span className="mr-2">🎬</span> Video Content Package
								</h4>
								<ul
									className={`text-sm space-y-1 ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									<li>• 4-6 promotional videos</li>
									<li>• Platform-specific optimization</li>
									<li>• Trending effects & music</li>
								</ul>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-white/10" : "bg-white/80"
								}`}>
								<h4
									className={`font-semibold mb-2 flex items-center ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									<span className="mr-2">📊</span> Growth Features
								</h4>
								<ul
									className={`text-sm space-y-1 ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									<li>• Advanced SEO optimization</li>
									<li>• Lead capture integration</li>
									<li>• 90 days of priority support</li>
								</ul>
							</div>
						</div>

						<a
							href="mailto:support@bluesproutagency.com?subject=Growth%20Package%20Quote%20Request&body=Hi!%20I'm%20interested%20in%20the%20Growth%20package.%0A%0ABusiness%20Details:%0A-%20Business%20type:%20%0A-%20Current%20situation:%20%0A-%20Main%20goals:%20%0A-%20Timeline:%20%0A%0AThank%20you!"
							className="block w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg text-center">
							📧 Get Custom Quote
						</a>
					</div>

					{/* Enterprise Package */}
					<div
						className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
							isDark
								? "bg-gray-800 border-gray-700 hover:border-yellow-500"
								: "bg-white border-gray-200 hover:border-yellow-500 hover:shadow-xl"
						}`}>
						<div className="text-center mb-6">
							<div
								className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
									isDark ? "bg-yellow-900/30" : "bg-yellow-100"
								}`}>
								<span className="text-2xl">👑</span>
							</div>
							<h3
								className={`text-2xl font-bold mb-3 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Enterprise
							</h3>
							<p
								className={`text-sm ${
									isDark ? "text-gray-400" : "text-gray-600"
								}`}>
								Comprehensive digital transformation
							</p>
						</div>

						<div className="text-center mb-8">
							<div
								className={`text-lg font-semibold mb-2 ${
									isDark ? "text-yellow-400" : "text-yellow-600"
								}`}>
								Let's Discuss
							</div>
							<div
								className={`text-3xl font-bold mb-2 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Custom Solution
							</div>
							<div
								className={`text-sm ${
									isDark ? "text-gray-400" : "text-gray-500"
								}`}>
								Tailored to your business goals
							</div>
						</div>

						<div className="space-y-4 mb-8">
							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-gray-700/50" : "bg-gray-50"
								}`}>
								<h4
									className={`font-semibold mb-2 ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									✨ Everything in Growth +
								</h4>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-gray-700/50" : "bg-gray-50"
								}`}>
								<h4
									className={`font-semibold mb-2 flex items-center ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									<span className="mr-2">🎯</span> Ongoing Management
								</h4>
								<ul
									className={`text-sm space-y-1 ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									<li>• Monthly content strategy</li>
									<li>• Social media management</li>
									<li>• Regular video content</li>
								</ul>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-gray-700/50" : "bg-gray-50"
								}`}>
								<h4
									className={`font-semibold mb-2 flex items-center ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									<span className="mr-2">📈</span> Performance Focus
								</h4>
								<ul
									className={`text-sm space-y-1 ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									<li>• Advanced analytics & reporting</li>
									<li>• A/B testing & optimization</li>
									<li>• Conversion rate optimization</li>
								</ul>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-gray-700/50" : "bg-gray-50"
								}`}>
								<h4
									className={`font-semibold mb-2 flex items-center ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									<span className="mr-2">🤝</span> VIP Support
								</h4>
								<ul
									className={`text-sm space-y-1 ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									<li>• Dedicated account manager</li>
									<li>• Priority support (same day)</li>
									<li>• Monthly strategy consultations</li>
								</ul>
							</div>
						</div>

						<a
							href="mailto:support@bluesproutagency.com?subject=Enterprise%20Package%20Consultation&body=Hi!%20I'm%20interested%20in%20the%20Enterprise%20package.%0A%0ABusiness%20Details:%0A-%20Business%20type:%20%0A-%20Current%20situation:%20%0A-%20Main%20goals:%20%0A-%20Budget%20considerations:%20%0A-%20Timeline:%20%0A%0AThank%20you!"
							className="block w-full py-4 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition-colors text-center">
							📧 Schedule Consultation
						</a>
					</div>
				</div>

				{/* Monthly Add-on Services */}
				<div
					className={`mb-20 p-10 rounded-3xl ${
						isDark
							? "bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700"
							: "bg-gradient-to-r from-gray-50 to-white border border-gray-200"
					}`}>
					<h2
						className={`text-3xl font-bold text-center mb-8 ${
							isDark ? "text-white" : "text-gray-900"
						}`}>
						Ongoing Monthly Services
					</h2>
					<p
						className={`text-center text-lg mb-12 ${
							isDark ? "text-gray-300" : "text-gray-600"
						}`}>
						Keep your business growing with our monthly partnership options
					</p>

					<div className="grid md:grid-cols-3 gap-8">
						<div
							className={`p-6 rounded-xl text-center ${
								isDark
									? "bg-gray-800 border border-gray-700"
									: "bg-white border border-gray-200 shadow-md"
							}`}>
							<div className="text-3xl mb-4">📱</div>
							<h3
								className={`text-xl font-bold mb-3 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Social Media Management
							</h3>
							<p
								className={`text-sm mb-4 ${
									isDark ? "text-gray-300" : "text-gray-600"
								}`}>
								Daily posting • Content creation • Community management •
								Analytics
							</p>
							<div
								className={`text-2xl font-bold mb-4 ${
									isDark ? "text-blue-400" : "text-blue-600"
								}`}>
								Let's Talk
							</div>
							<a
								href="mailto:support@bluesproutagency.com?subject=Social%20Media%20Management%20Quote&body=Hi!%20I'm%20interested%20in%20Social%20Media%20Management%20services.%0A%0ABusiness%20Details:%0A-%20Business%20type:%20%0A-%20Current%20social%20media:%20%0A-%20Target%20audience:%20%0A-%20Goals:%20%0A%0AThank%20you!"
								className="w-full inline-block py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
								📧 Get Quote
							</a>
						</div>

						<div
							className={`p-6 rounded-xl text-center ${
								isDark
									? "bg-gray-800 border border-gray-700"
									: "bg-white border border-gray-200 shadow-md"
							}`}>
							<div className="text-3xl mb-4">🎬</div>
							<h3
								className={`text-xl font-bold mb-3 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Video Content Creation
							</h3>
							<p
								className={`text-sm mb-4 ${
									isDark ? "text-gray-300" : "text-gray-600"
								}`}>
								4-6 videos monthly • Platform optimization • Trending effects •
								Music
							</p>
							<div
								className={`text-2xl font-bold mb-4 ${
									isDark ? "text-purple-400" : "text-purple-600"
								}`}>
								Let's Talk
							</div>
							<a
								href="mailto:support@bluesproutagency.com?subject=Video%20Content%20Creation%20Quote&body=Hi!%20I'm%20interested%20in%20Video%20Content%20Creation%20services.%0A%0AProject%20Details:%0A-%20Business%20type:%20%0A-%20Video%20type%20needed:%20%0A-%20Platform%20focus:%20%0A-%20Quantity:%20%0A-%20Timeline:%20%0A%0AThank%20you!"
								className="w-full inline-block py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
								📧 Get Quote
							</a>
						</div>

						<div
							className={`p-6 rounded-xl text-center ${
								isDark
									? "bg-gray-800 border border-gray-700"
									: "bg-white border border-gray-200 shadow-md"
							}`}>
							<div className="text-3xl mb-4">🚀</div>
							<h3
								className={`text-xl font-bold mb-3 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Complete Growth Partnership
							</h3>
							<p
								className={`text-sm mb-4 ${
									isDark ? "text-gray-300" : "text-gray-600"
								}`}>
								Everything included • Priority support • Monthly strategy •
								Performance tracking
							</p>
							<div
								className={`text-2xl font-bold mb-4 ${
									isDark ? "text-green-400" : "text-green-600"
								}`}>
								Best Value
							</div>
							<a
								href="sms:+16572174737?&body=Hi!%20I'm%20interested%20in%20the%20Complete%20Growth%20Partnership."
								className="w-full inline-block py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
								Get Quote
							</a>
						</div>
					</div>
				</div>

				{/* Custom Solution CTA */}
				<div
					className={`p-10 rounded-3xl text-center ${
						isDark
							? "bg-gradient-to-r from-blue-900 to-purple-900 border border-blue-500/30"
							: "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200"
					}`}>
					<h2
						className={`text-4xl font-bold mb-6 ${
							isDark ? "text-white" : "text-gray-900"
						}`}>
						Need Something Different?
					</h2>
					<p
						className={`text-xl mb-8 max-w-2xl mx-auto ${
							isDark ? "text-gray-300" : "text-gray-600"
						}`}>
						Every business is unique. Let's create a custom solution that fits
						your specific goals and budget.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
						<a
							href="tel:+16572174737"
							className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
							📞 Call: (657) 217-4737
						</a>
						<a
							href="mailto:support@bluesproutagency.com?subject=Custom%20Solution%20Request&body=Hi!%20I'd%20like%20to%20discuss%20a%20custom%20solution%20for%20my%20business.%0A%0ABusiness%20Details:%0A-%20Industry:%20%0A-%20Current%20situation:%20%0A-%20Main%20goals:%20%0A-%20Budget%20considerations:%20%0A-%20Timeline:%20%0A%0AThank%20you!"
							className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 border-2 ${
								isDark
									? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900"
									: "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
							}`}>
							📧 Get Custom Quote
						</a>
					</div>

					<div
						className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
						💡 Free consultation includes business analysis, strategy
						recommendations, and transparent pricing discussion
					</div>
				</div>

				{/* Trust Indicators */}
				<div className="mt-16">
					<div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
						<div
							className={`text-center p-4 rounded-xl ${
								isDark ? "bg-gray-800/50" : "bg-gray-100/50"
							}`}>
							<div className="text-2xl mb-2">🛡️</div>
							<h4
								className={`font-bold text-sm mb-1 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								No Long Contracts
							</h4>
							<p
								className={`text-xs ${
									isDark ? "text-gray-400" : "text-gray-600"
								}`}>
								Flexible month-to-month options
							</p>
						</div>

						<div
							className={`text-center p-4 rounded-xl ${
								isDark ? "bg-gray-800/50" : "bg-gray-100/50"
							}`}>
							<div className="text-2xl mb-2">⚡</div>
							<h4
								className={`font-bold text-sm mb-1 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Fast Delivery
							</h4>
							<p
								className={`text-xs ${
									isDark ? "text-gray-400" : "text-gray-600"
								}`}>
								Most projects in 2-4 weeks
							</p>
						</div>

						<div
							className={`text-center p-4 rounded-xl ${
								isDark ? "bg-gray-800/50" : "bg-gray-100/50"
							}`}>
							<div className="text-2xl mb-2">🤝</div>
							<h4
								className={`font-bold text-sm mb-1 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Direct Access
							</h4>
							<p
								className={`text-xs ${
									isDark ? "text-gray-400" : "text-gray-600"
								}`}>
								Work directly with your team
							</p>
						</div>

						<div
							className={`text-center p-4 rounded-xl ${
								isDark ? "bg-gray-800/50" : "bg-gray-100/50"
							}`}>
							<div className="text-2xl mb-2">💰</div>
							<h4
								className={`font-bold text-sm mb-1 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Transparent Pricing
							</h4>
							<p
								className={`text-xs ${
									isDark ? "text-gray-400" : "text-gray-600"
								}`}>
								No hidden fees or surprises
							</p>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Pricing;
