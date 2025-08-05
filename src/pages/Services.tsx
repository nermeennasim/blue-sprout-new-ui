// pages/Services.tsx
import Section from "../components/Section";

interface ServicesProps {
	isDark: boolean;
}

const Services: React.FC<ServicesProps> = ({ isDark }) => {
	return (
		<Section id="services-page" className="pt-32 pb-20">
			<h1 className="text-4xl font-bold mb-8">Our Services</h1>
			<div className="max-w-6xl mx-auto">
				<p className="text-lg mb-12 text-center">
					Professional digital solutions designed to grow your business online
				</p>

				<div className="grid lg:grid-cols-3 gap-8">
					{/* Web Development & Design */}
					<div
						className={`p-8 rounded-2xl shadow-xl ${
							isDark
								? "bg-gray-800 border border-gray-700"
								: "bg-white border border-gray-200"
						}`}>
						<div className="text-5xl mb-6 text-center">🌐</div>
						<h3
							className={`text-2xl font-bold mb-6 text-center ${
								isDark ? "text-white" : "text-gray-800"
							}`}>
							Web Development & Design
						</h3>

						<div className="space-y-4 mb-6">
							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-blue-900/30" : "bg-blue-50"
								}`}>
								<h4 className="font-bold text-blue-600 mb-2">
									📱 Responsive Web Pages
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Mobile-friendly websites that work perfectly on all devices -
									phones, tablets, and desktops
								</p>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-green-900/30" : "bg-green-50"
								}`}>
								<h4 className="font-bold text-green-600 mb-2">
									🔍 SEO Basic Optimization
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Search engine optimization to help customers find your
									business online
								</p>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-purple-900/30" : "bg-purple-50"
								}`}>
								<h4 className="font-bold text-purple-600 mb-2">
									🌍 Complete Domain & Hosting
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Full setup including domain registration, hosting, and SSL
									certificates
								</p>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-orange-900/30" : "bg-orange-50"
								}`}>
								<h4 className="font-bold text-orange-600 mb-2">
									⚡ Dynamic Websites
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Interactive features, contact forms, galleries, and custom
									functionality
								</p>
							</div>
						</div>

						<div className="text-center">
							<a
								href="tel:+16572174737"
								className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
								Call for Custom Pricing
							</a>
						</div>
					</div>

					{/* Viral Video Production */}
					<div
						className={`p-8 rounded-2xl shadow-xl ${
							isDark
								? "bg-gray-800 border border-gray-700"
								: "bg-white border border-gray-200"
						}`}>
						<div className="text-5xl mb-6 text-center">🎬</div>
						<h3
							className={`text-2xl font-bold mb-6 text-center ${
								isDark ? "text-white" : "text-gray-800"
							}`}>
							Viral Video Production
						</h3>

						<div className="space-y-4 mb-6">
							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-red-900/30" : "bg-red-50"
								}`}>
								<h4 className="font-bold text-red-600 mb-2">
									📱 TikTok & Instagram Reels
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Short-form vertical videos optimized for maximum engagement
								</p>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-blue-900/30" : "bg-blue-50"
								}`}>
								<h4 className="font-bold text-blue-600 mb-2">
									📘 Facebook Video Content
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Professional video content designed to boost Facebook reach
								</p>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-purple-900/30" : "bg-purple-50"
								}`}>
								<h4 className="font-bold text-purple-600 mb-2">
									🎨 Motion Graphics & Effects
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Custom animations, transitions, text overlays, and trending
									effects
								</p>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-green-900/30" : "bg-green-50"
								}`}>
								<h4 className="font-bold text-green-600 mb-2">
									⏱️ Perfect Timing & Frames
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Optimized video length, frame rates, and timing for each
									platform
								</p>
							</div>
						</div>

						<div className="text-center">
							<a
								href="mailto:support@bluesproutagency.com?subject=Viral%20Video%20Quote%20Request&body=Hi!%20I'd%20like%20a%20quote%20for%20viral%20video%20production.%0A%0ADetails:%0A-%20Platform:%20[TikTok/Instagram/Facebook]%0A-%20Video%20length:%20[15s/30s/60s]%0A-%20Style:%20[Animated/Live%20action/Mixed]%0A-%20Quantity:%20[How%20many%20videos]%0A-%20Budget%20range:%20[Your%20budget]%0A%0AThank%20you!"
								className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
								Get Video Quote
							</a>
						</div>
					</div>

					{/* Social Media Strategy */}
					<div
						className={`p-8 rounded-2xl shadow-xl ${
							isDark
								? "bg-gray-800 border border-gray-700"
								: "bg-white border border-gray-200"
						}`}>
						<div className="text-5xl mb-6 text-center">📱</div>
						<h3
							className={`text-2xl font-bold mb-6 text-center ${
								isDark ? "text-white" : "text-gray-800"
							}`}>
							Social Media Strategy
						</h3>

						<div className="space-y-4 mb-6">
							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-pink-900/30" : "bg-pink-50"
								}`}>
								<h4 className="font-bold text-pink-600 mb-2">
									🎯 Market Visibility Strategy
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Targeted approach to increase your brand's visibility in your
									local market
								</p>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-blue-900/30" : "bg-blue-50"
								}`}>
								<h4 className="font-bold text-blue-600 mb-2">
									👥 Client Acquisition Focus
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Strategic content designed to attract and convert your ideal
									customers
								</p>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-green-900/30" : "bg-green-50"
								}`}>
								<h4 className="font-bold text-green-600 mb-2">
									📊 Platform-Specific Strategy
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Customized approach for Facebook, Instagram, TikTok, and
									LinkedIn
								</p>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-orange-900/30" : "bg-orange-50"
								}`}>
								<h4 className="font-bold text-orange-600 mb-2">
									📈 Growth & Engagement
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Proven tactics to grow followers, increase engagement, and
									drive sales
								</p>
							</div>
						</div>

						<div className="text-center">
							<a
								href="sms:+16572174737?&body=Hi%20Blue%20Sprout%20Agency!%20I'm%20interested%20in%20a%20social%20media%20strategy%20consultation%20for%20my%20business."
								className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
								💬 Text for Strategy
							</a>
						</div>
					</div>
				</div>

				{/* Call to Action Section */}
				<div
					className={`mt-16 p-8 rounded-2xl text-center ${
						isDark
							? "bg-gradient-to-r from-blue-900 to-purple-900 border border-blue-500/30"
							: "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200"
					}`}>
					<h2
						className={`text-3xl font-bold mb-4 ${
							isDark ? "text-white" : "text-gray-800"
						}`}>
						Ready to Transform Your Business?
					</h2>
					<p
						className={`text-lg mb-6 ${
							isDark ? "text-gray-300" : "text-gray-600"
						}`}>
						Let's discuss your specific needs and create a custom solution for
						your business
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="tel:+16572174737"
							className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
							📞 Call: (657) 217-4737
						</a>
						<a
							href="mailto:support@bluesproutagency.com"
							className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-colors">
							📧 Email Us
						</a>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Services;


/* 
// COMMENTED OUT - OLD CODE

// pages/About.tsx
import Section from "../components/Section";

interface AboutProps {
	isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
	return (
		<Section id="about-page" className="pt-32 pb-20">
			<h1 className="text-4xl font-bold mb-8">About Blue Sprout Agency</h1>
			<div className="max-w-4xl mx-auto text-left space-y-6">
				<p className="text-lg">
					We are a team of creatives and developers helping small businesses
					grow their digital presence through modern, user-friendly solutions.
				</p>
				<p className="text-lg">
					Founded with the mission to make professional web development 
					accessible to businesses of all sizes, we combine creativity 
					with technical expertise to deliver outstanding results.
				</p>
			</div>
		</Section>
	);
};

export default About;

// pages/Services.tsx - OLD VERSION
import Section from "../components/Section";

interface ServicesProps {
	isDark: boolean;
}

const Services: React.FC<ServicesProps> = ({ isDark }) => {
	return (
		<Section id="services-page" className="pt-32 pb-20">
			<h1 className="text-4xl font-bold mb-8">Our Services</h1>
			<div className="max-w-4xl mx-auto">
				<p className="text-lg mb-8">
					We provide comprehensive digital solutions to help your business grow online.
				</p>
				<div className="grid md:grid-cols-3 gap-8">
					<div className={`p-6 rounded-lg ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
						<h3 className="text-xl font-bold mb-4">📱 Social Media Management</h3>
						<p>Complete social media strategy and content creation</p>
					</div>
					<div className={`p-6 rounded-lg ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
						<h3 className="text-xl font-bold mb-4">🌐 Website Development</h3>
						<p>Custom, responsive websites built with modern technologies</p>
					</div>
					<div className={`p-6 rounded-lg ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
						<h3 className="text-xl font-bold mb-4">🎬 Video Editing</h3>
						<p>Professional video editing for social media and marketing</p>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Services;

// pages/Pricing.tsx - OLD VERSION
import Section from "../components/Section";

interface PricingProps {
	isDark: boolean;
}

const Pricing: React.FC<PricingProps> = ({ isDark }) => {
	return (
		<Section id="pricing-page" className="pt-32 pb-20">
			<h1 className="text-4xl font-bold mb-8">Pricing Plans</h1>
			<p className="text-lg mb-12">
				Choose the perfect plan for your business needs.
			</p>
			<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
				{[
					{ name: "Starter", price: "$299", features: ["5-page website", "Mobile responsive", "Basic SEO"] },
					{ name: "Professional", price: "$599", features: ["10-page website", "Custom design", "Advanced SEO"] },
					{ name: "Enterprise", price: "$999", features: ["Unlimited pages", "E-commerce ready", "Premium SEO"] }
				].map((plan, index) => (
					<div key={index} className={`p-6 rounded-lg ${isDark ? "bg-gray-800" : "bg-white shadow-lg"}`}>
						<h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
						<div className="text-3xl font-bold mb-6">{plan.price}</div>
						<ul className="space-y-2">
							{plan.features.map((feature, idx) => (
								<li key={idx}>✓ {feature}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</Section>
	);
};

export default Pricing;
*/
