// pages/Pricing.tsx - Coming Soon
import Section from "../components/Section";

interface PricingProps {
	isDark: boolean;
}

const Pricing: React.FC<PricingProps> = ({ isDark }) => {
	return (
		<Section id="pricing-page" className="pt-32 pb-20">
			<div className="text-center mb-16">
				<h1 className="text-4xl font-bold mb-8">Pricing Plans</h1>

				{/* Coming Soon Banner */}
				<div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-bold text-lg shadow-lg mb-8">
					🚧 Pricing Page Coming Soon!
				</div>

				<p className="text-xl max-w-3xl mx-auto mb-12">
					We're working on transparent, competitive pricing for all our
					services.
				</p>

				{/* Temporary Contact Options */}
				<div
					className={`p-8 rounded-2xl ${
						isDark
							? "bg-gray-800 border border-gray-700"
							: "bg-white border border-gray-200"
					} shadow-xl max-w-2xl mx-auto`}>
					<h2
						className={`text-2xl font-bold mb-6 ${
							isDark ? "text-white" : "text-gray-800"
						}`}>
						Get Your Custom Quote
					</h2>

					<p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
						Every business is unique. Contact us for personalized pricing based
						on your specific needs.
					</p>

					<div className="space-y-4">
						<a
							href="tel:+16572174737"
							className="block w-full px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
							📞 Call for Instant Quote: (657) 217-4737
						</a>

						<a
							href="mailto:support@bluesproutagency.com?subject=Pricing%20Quote%20Request&body=Hi%20Blue%20Sprout%20Agency,%0A%0AI'm%20interested%20in%20getting%20a%20quote%20for:%0A%0A%5B%20%5D%20Web%20Development%20%26%20Design%0A%5B%20%5D%20Viral%20Video%20Production%0A%5B%20%5D%20Social%20Media%20Strategy%0A%0ABusiness%20type:%20[Your%20business%20type]%0ABudget%20range:%20[Your%20budget%20range]%0ATimeline:%20[When%20you%20need%20it]%0A%0AAdditional%20details:%0A[Any%20specific%20requirements]%0A%0AThank%20you!"
							className="block w-full px-6 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center">
							📧 Email for Detailed Quote
						</a>

						<a
							href="sms:+16572174737?&body=Hi%20Blue%20Sprout%20Agency!%20I'd%20like%20to%20get%20pricing%20information%20for%20your%20services."
							className="block w-full px-6 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors text-center">
							💬 Text for Quick Response
						</a>
					</div>

					<div
						className={`mt-6 p-4 rounded-lg ${
							isDark ? "bg-blue-900/30" : "bg-blue-50"
						}`}>
						<p
							className={`text-sm ${
								isDark ? "text-blue-200" : "text-blue-700"
							}`}>
							💡 <strong>Free consultation includes:</strong> Business analysis,
							strategy recommendations, and transparent pricing discussion
						</p>
					</div>
				</div>

				{/* Service Preview Cards */}
				<div className="grid md:grid-cols-3 gap-6 mt-16">
					<div
						className={`p-6 rounded-xl ${
							isDark ? "bg-gray-800" : "bg-gray-50"
						}`}>
						<div className="text-4xl mb-4">🌐</div>
						<h3 className="text-xl font-bold mb-2">Web Development</h3>
						<p
							className={`text-sm ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							Custom websites starting from basic landing pages to complex
							e-commerce solutions
						</p>
					</div>

					<div
						className={`p-6 rounded-xl ${
							isDark ? "bg-gray-800" : "bg-gray-50"
						}`}>
						<div className="text-4xl mb-4">🎬</div>
						<h3 className="text-xl font-bold mb-2">Viral Videos</h3>
						<p
							className={`text-sm ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							Professional video content for TikTok, Instagram, and Facebook
						</p>
					</div>

					<div
						className={`p-6 rounded-xl ${
							isDark ? "bg-gray-800" : "bg-gray-50"
						}`}>
						<div className="text-4xl mb-4">📱</div>
						<h3 className="text-xl font-bold mb-2">Social Media</h3>
						<p
							className={`text-sm ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							Complete social media strategy and management services
						</p>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Pricing;
