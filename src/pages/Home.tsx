// pages/Home.tsx
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import Section from "../components/Section";
import { ArrowRight, Star } from "lucide-react";

interface HomeProps {
	isDark: boolean;
}

const Home: React.FC<HomeProps> = ({ isDark }) => {
	return (
		<>
			<Hero isDark={isDark} />

			{/* Social Proof Section */}
			<Section id="social-proof" className="mb-24 py-20">
				<h2 className="text-3xl font-bold mb-8">Trusted by Local Businesses</h2>
				<p className="text-lg mb-12 max-w-3xl mx-auto">
					We've helped 50+ businesses in Chino, California grow their online
					presence
				</p>

				{/* Client Testimonials Preview */}
				<div className="grid md:grid-cols-3 gap-6 mb-12">
					{[
						{
							name: "Sarah Johnson",
							business: "Sweet Dreams Bakery",
							result: "+40% Sales Growth",
							quote: "Our Instagram followers tripled and sales are up 40%!",
						},
						{
							name: "Mike Chen",
							business: "TechStart Solutions",
							result: "5x More Leads",
							quote: "Professional website that generates 5x more leads!",
						},
						{
							name: "Emily Rodriguez",
							business: "Rodriguez Consulting",
							result: "Viral Video Success",
							quote: "Their video content brought in dozens of new clients!",
						},
					].map((testimonial, index) => (
						<div
							key={index}
							className={`p-6 rounded-xl ${
								isDark
									? "bg-gray-800 border border-gray-700"
									: "bg-white border border-gray-200"
							} shadow-lg`}>
							<div className="flex items-center mb-4">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="w-4 h-4 text-yellow-400 fill-current"
									/>
								))}
							</div>
							<p
								className={`mb-4 italic ${
									isDark ? "text-gray-300" : "text-gray-600"
								}`}>
								"{testimonial.quote}"
							</p>
							<div className="mb-2">
								<div className="font-bold">{testimonial.name}</div>
								<div
									className={`text-sm ${
										isDark ? "text-gray-400" : "text-gray-500"
									}`}>
									{testimonial.business}
								</div>
							</div>
							<div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
								🚀 {testimonial.result}
							</div>
						</div>
					))}
				</div>

				<Link
					to="/testimonials"
					className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
						isDark
							? "bg-orange-500 text-white hover:bg-orange-600"
							: "bg-teal-600 text-white hover:bg-teal-700"
					}`}>
					See All Success Stories
					<ArrowRight className="ml-2 w-4 h-4" />
				</Link>
			</Section>

			{/* Why Choose Us */}
			<Section id="why-choose-us" className="mb-24 py-20">
				<h2 className="text-3xl font-bold mb-4">
					Why Chino Businesses Choose Us
				</h2>
				<p className="text-lg mb-12 max-w-3xl mx-auto">
					We're not just another marketing agency - we're your local growth
					partners
				</p>

				<div className="grid md:grid-cols-3 gap-8 mb-12">
					{[
						{
							icon: "📍",
							title: "Local Expertise",
							description:
								"Deep understanding of Chino, California market and what works for local businesses",
						},
						{
							icon: "⚡",
							title: "Lightning Fast Results",
							description:
								"24-hour response time and see results within the first month or your money back",
						},
						{
							icon: "💰",
							title: "Affordable Pricing",
							description:
								"Professional services at prices small businesses can actually afford - starting at just $149",
						},
					].map((reason, index) => (
						<div
							key={index}
							className={`text-center p-6 rounded-xl ${
								isDark ? "bg-gray-800" : "bg-gray-50"
							}`}>
							<div className="text-4xl mb-4">{reason.icon}</div>
							<h3 className="text-xl font-bold mb-3">{reason.title}</h3>
							<p className={isDark ? "text-gray-300" : "text-gray-600"}>
								{reason.description}
							</p>
						</div>
					))}
				</div>
			</Section>

			{/* Services Preview */}
			<Section id="services-preview" className="mb-24 py-20">
				<h2 className="text-3xl font-bold mb-4">What We Do Best</h2>
				<p className="text-lg mb-12 max-w-3xl mx-auto">
					Three core services that drive real business growth
				</p>

				<div className="grid md:grid-cols-3 gap-8 mb-12">
					{[
						{
							icon: "📱",
							title: "Social Media Management",
							description:
								"Daily posting, viral content creation, community management",
							result: "300% engagement increase",
						},
						{
							icon: "🌐",
							title: "Website Development",
							description:
								"Custom, mobile-responsive websites that convert visitors to customers",
							result: "5x more leads generated",
						},
						{
							icon: "🎬",
							title: "Viral Video Editing",
							description:
								"Professional video content optimized for TikTok, Instagram, and YouTube",
							result: "1M+ views generated",
						},
					].map((service, index) => (
						<div
							key={index}
							className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
								isDark
									? "bg-gray-800 border border-gray-700"
									: "bg-white border border-gray-200"
							} shadow-lg hover:shadow-xl`}>
							<div className="text-4xl mb-4 text-center">{service.icon}</div>
							<h3 className="text-xl font-bold mb-3 text-center">
								{service.title}
							</h3>
							<p
								className={`text-center mb-4 ${
									isDark ? "text-gray-300" : "text-gray-600"
								}`}>
								{service.description}
							</p>
							<div className="text-center">
								<span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
									{service.result}
								</span>
							</div>
						</div>
					))}
				</div>

				<div className="text-center">
					<Link
						to="/services"
						className={`inline-flex items-center px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 ${
							isDark
								? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
								: "bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700"
						} shadow-lg`}>
						View All Services & Pricing
						<ArrowRight className="ml-2 w-5 h-5" />
					</Link>
				</div>
			</Section>

			{/* Final CTA */}
			<Section id="final-cta" className="mb-24 py-20">
				<div
					className={`p-8 rounded-2xl ${
						isDark
							? "bg-gradient-to-r from-orange-500 to-red-500"
							: "bg-gradient-to-r from-teal-500 to-blue-600"
					} text-white text-center`}>
					<h2 className="text-3xl font-bold mb-4">
						Ready to 3x Your Business Growth?
					</h2>
					<p className="text-xl mb-8 max-w-2xl mx-auto">
						Join 50+ successful businesses in Chino, California. Get started
						with our proven system today!
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
						<Link
							to="/contact"
							className="px-8 py-4 bg-white text-gray-800 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
							Get Your $149 Deal Now
						</Link>
						<a
							href="tel:+16572174737"
							className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-gray-800 transition-all duration-300">
							📞 Call: (657) 217-4737
						</a>
					</div>

					<p className="text-sm opacity-90">
						⏰ Limited time offer - Only available to first 20 businesses this
						month
					</p>
				</div>
			</Section>
		</>
	);
};

export default Home;
