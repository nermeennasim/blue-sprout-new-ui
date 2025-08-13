// pages/Services.tsx
import Section from "../components/Section";

interface ServicesProps {
	isDark: boolean;
}

const Services: React.FC<ServicesProps> = ({ isDark }) => {
	return (
		<Section id="services-page" className="pt-32 pb-20">
			<div className="max-w-7xl mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16">
					<h1
						className={`text-5xl font-bold mb-6 ${
							isDark ? "text-white" : "text-gray-900"
						}`}>
						Our Services
					</h1>
					<p
						className={`text-xl max-w-3xl mx-auto ${
							isDark ? "text-gray-300" : "text-gray-600"
						}`}>
						Everything you need to build, grow, and scale your business online.
						From stunning websites to powerful marketing strategies.
					</p>
				</div>

				{/* Main Service - Web Development */}
				<div
					className={`mb-16 p-10 rounded-3xl shadow-2xl border ${
						isDark
							? "bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700"
							: "bg-gradient-to-br from-white to-gray-50 border-gray-200"
					}`}>
					<div className="text-center mb-8">
						<div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-3xl mb-6">
							🌐
						</div>
						<h2
							className={`text-4xl font-bold mb-4 ${
								isDark ? "text-white" : "text-gray-900"
							}`}>
							Web Development & Design
						</h2>
						<p
							className={`text-lg ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							Our flagship service - Professional, responsive websites that
							convert visitors into customers
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-8">
						<div className="space-y-6">
							<div
								className={`p-6 rounded-xl ${
									isDark ? "bg-gray-800/50" : "bg-gray-100/50"
								}`}>
								<h4
									className={`font-bold text-lg mb-3 ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									📱 Responsive Design
								</h4>
								<p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
									Mobile-first designs that look perfect on all devices -
									phones, tablets, and desktops
								</p>
							</div>

							<div
								className={`p-6 rounded-xl ${
									isDark ? "bg-gray-800/50" : "bg-gray-100/50"
								}`}>
								<h4
									className={`font-bold text-lg mb-3 ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									⚡ Modern Performance
								</h4>
								<p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
									Fast-loading websites built with cutting-edge technologies
									like React and Next.js
								</p>
							</div>

							<div
								className={`p-6 rounded-xl ${
									isDark ? "bg-gray-800/50" : "bg-gray-100/50"
								}`}>
								<h4
									className={`font-bold text-lg mb-3 ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									🔍 SEO Optimized
								</h4>
								<p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
									Built-in SEO optimization to help your business rank higher in
									search results
								</p>
							</div>
						</div>

						<div className="space-y-6">
							<div
								className={`p-6 rounded-xl ${
									isDark ? "bg-gray-800/50" : "bg-gray-100/50"
								}`}>
								<h4
									className={`font-bold text-lg mb-3 ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									🛠️ Custom Functionality
								</h4>
								<p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
									Contact forms, galleries, e-commerce integration, and custom
									features tailored to your needs
								</p>
							</div>

							<div
								className={`p-6 rounded-xl ${
									isDark ? "bg-gray-800/50" : "bg-gray-100/50"
								}`}>
								<h4
									className={`font-bold text-lg mb-3 ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									🌍 Complete Setup
								</h4>
								<p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
									Domain registration, hosting, SSL certificates, and ongoing
									maintenance included
								</p>
							</div>

							<div
								className={`p-6 rounded-xl ${
									isDark ? "bg-gray-800/50" : "bg-gray-100/50"
								}`}>
								<h4
									className={`font-bold text-lg mb-3 ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									📊 Analytics & Insights
								</h4>
								<p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
									Google Analytics setup and monthly performance reports to
									track your success
								</p>
							</div>
						</div>
					</div>

					<div className="text-center mt-8">
						<a
							href="tel:+16572174737"
							className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
							📞 Get Custom Quote
						</a>
					</div>
				</div>

				{/* Partner Services */}
				<div className="mb-12">
					<h2
						className={`text-3xl font-bold text-center mb-4 ${
							isDark ? "text-white" : "text-gray-900"
						}`}>
						We Also Partner With You For
					</h2>
					<p
						className={`text-center text-lg mb-12 ${
							isDark ? "text-gray-300" : "text-gray-600"
						}`}>
						Complete digital marketing solutions to grow your brand and reach
						more customers
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-8 mb-16">
					{/* Video & Content Creation */}
					<div
						className={`p-8 rounded-2xl shadow-xl border ${
							isDark
								? "bg-gray-800 border-gray-700"
								: "bg-white border-gray-200"
						}`}>
						<div className="text-center mb-6">
							<div
								className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
									isDark ? "bg-purple-900/30" : "bg-purple-100"
								}`}>
								<span className="text-2xl">🎬</span>
							</div>
							<h3
								className={`text-2xl font-bold ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Video & Content Creation
							</h3>
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
									📱 Social Media Reels
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Instagram Reels, TikTok videos, and YouTube Shorts optimized
									for maximum engagement
								</p>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-gray-700/50" : "bg-gray-50"
								}`}>
								<h4
									className={`font-semibold mb-2 ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									🎨 Motion Graphics
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Custom animations, text overlays, and trending effects that
									capture attention
								</p>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-gray-700/50" : "bg-gray-50"
								}`}>
								<h4
									className={`font-semibold mb-2 ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									📺 Platform Optimization
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Videos tailored for each platform's algorithm and best
									practices
								</p>
							</div>
						</div>

						<div className="text-center">
							<a
								href="mailto:support@bluesproutagency.com?subject=Video%20Content%20Quote"
								className={`inline-block px-6 py-3 rounded-lg font-semibold transition-colors ${
									isDark
										? "bg-purple-600 hover:bg-purple-700 text-white"
										: "bg-purple-600 hover:bg-purple-700 text-white"
								}`}>
								Get Video Quote
							</a>
						</div>
					</div>

					{/* Social Media Management */}
					<div
						className={`p-8 rounded-2xl shadow-xl border ${
							isDark
								? "bg-gray-800 border-gray-700"
								: "bg-white border-gray-200"
						}`}>
						<div className="text-center mb-6">
							<div
								className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
									isDark ? "bg-blue-900/30" : "bg-blue-100"
								}`}>
								<span className="text-2xl">📱</span>
							</div>
							<h3
								className={`text-2xl font-bold ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Social Media Management
							</h3>
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
									📊 Strategy & Planning
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Custom content strategies designed to attract and convert your
									ideal customers
								</p>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-gray-700/50" : "bg-gray-50"
								}`}>
								<h4
									className={`font-semibold mb-2 ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									📅 Content Creation & Posting
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Daily content creation and scheduled posting across all your
									social platforms
								</p>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-gray-700/50" : "bg-gray-50"
								}`}>
								<h4
									className={`font-semibold mb-2 ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									💬 Community Engagement
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Active community management and engagement to build meaningful
									relationships
								</p>
							</div>
						</div>

						<div className="text-center">
							<a
								href="sms:+16572174737?&body=Hi%20Blue%20Sprout%20Agency!%20I'm%20interested%20in%20social%20media%20management."
								className={`inline-block px-6 py-3 rounded-lg font-semibold transition-colors ${
									isDark
										? "bg-blue-600 hover:bg-blue-700 text-white"
										: "bg-blue-600 hover:bg-blue-700 text-white"
								}`}>
								💬 Text Us
							</a>
						</div>
					</div>

					{/* Graphic Design */}
					<div
						className={`p-8 rounded-2xl shadow-xl border ${
							isDark
								? "bg-gray-800 border-gray-700"
								: "bg-white border-gray-200"
						}`}>
						<div className="text-center mb-6">
							<div
								className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
									isDark ? "bg-green-900/30" : "bg-green-100"
								}`}>
								<span className="text-2xl">🎨</span>
							</div>
							<h3
								className={`text-2xl font-bold ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								Graphic Design & Branding
							</h3>
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
									🏷️ Logo & Brand Identity
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Professional logo design and complete brand identity packages
								</p>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-gray-700/50" : "bg-gray-50"
								}`}>
								<h4
									className={`font-semibold mb-2 ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									📋 Marketing Materials
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Business cards, flyers, brochures, and digital marketing
									assets
								</p>
							</div>

							<div
								className={`p-4 rounded-lg ${
									isDark ? "bg-gray-700/50" : "bg-gray-50"
								}`}>
								<h4
									className={`font-semibold mb-2 ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									🌐 Social Media Graphics
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}>
									Eye-catching banners, posts, and promotional graphics for all
									platforms
								</p>
							</div>
						</div>

						<div className="text-center">
							<a
								href="mailto:support@bluesproutagency.com?subject=Graphic%20Design%20Quote"
								className={`inline-block px-6 py-3 rounded-lg font-semibold transition-colors ${
									isDark
										? "bg-green-600 hover:bg-green-700 text-white"
										: "bg-green-600 hover:bg-green-700 text-white"
								}`}>
								Get Design Quote
							</a>
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div
					className={`p-10 rounded-3xl text-center shadow-2xl ${
						isDark
							? "bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700"
							: "bg-gradient-to-r from-gray-50 to-white border border-gray-200"
					}`}>
					<h2
						className={`text-4xl font-bold mb-6 ${
							isDark ? "text-white" : "text-gray-900"
						}`}>
						Ready to Transform Your Business?
					</h2>
					<p
						className={`text-xl mb-8 max-w-2xl mx-auto ${
							isDark ? "text-gray-300" : "text-gray-600"
						}`}>
						Let's discuss your vision and create a comprehensive digital
						strategy that drives real results for your business.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="tel:+16572174737"
							className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
							📞 Call: (657) 217-4737
						</a>
						<a
							href="mailto:support@bluesproutagency.com"
							className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 border-2 ${
								isDark
									? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900"
									: "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
							}`}>
							📧 Email Us
						</a>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Services;
