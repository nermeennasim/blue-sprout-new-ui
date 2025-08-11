// pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import {
	ArrowRight,
	Star,
	Monitor,
	Cloud,
	HeadphonesIcon,
	Video,
	Share2,
	Smartphone,
	Globe,
	Zap,
} from "lucide-react";
import ScrollAnimatedSection from "../components/ScrollAnimatedSection";

interface HomeProps {
	isDark: boolean;
}

const Home: React.FC<HomeProps> = ({ isDark }) => {
	// Add smooth scroll behavior
	React.useEffect(() => {
		document.documentElement.style.scrollBehavior = "smooth";
		return () => {
			document.documentElement.style.scrollBehavior = "auto";
		};
	}, []);

	return (
		<div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-white"}`}>
			{/* Hero Section */}
			<Hero isDark={isDark} />

			{/* Why Choose Us Section */}
			<ScrollAnimatedSection
				id="why-choose-us"
				title="Why Choose Our Web Development Services?"
				subtitle="We deliver exceptional results that drive business growth"
				isDark={isDark}
				className="py-20"
				animationType="dance">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{
							icon: "🎨",
							title: "Beautiful Design",
							description:
								"Stunning, modern designs that capture your brand essence and engage your audience.",
						},
						{
							icon: "⚡",
							title: "Lightning Fast",
							description:
								"Optimized for speed and performance to ensure the best user experience.",
						},
						{
							icon: "📱",
							title: "Mobile Responsive",
							description:
								"Perfect display across all devices - desktop, tablet, and mobile.",
						},
						{
							icon: "🔧",
							title: "Custom Solutions",
							description:
								"Tailored development to meet your specific business needs and goals.",
						},
						{
							icon: "🚀",
							title: "SEO Optimized",
							description:
								"Built with search engine optimization in mind to improve your visibility.",
						},
						{
							icon: "💬",
							title: "Ongoing Support",
							description:
								"Continuous support and maintenance to keep your website running smoothly.",
						},
					].map((feature, index) => (
						<div
							key={index}
							className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${
								isDark
									? "bg-gray-800 hover:bg-gray-750 border border-gray-700"
									: "bg-white hover:bg-gray-50 border border-gray-200 shadow-md"
							}`}>
							<div className="text-4xl mb-4">{feature.icon}</div>
							<h3
								className={`text-xl font-bold mb-3 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								{feature.title}
							</h3>
							<p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</ScrollAnimatedSection>

			{/* Our Services Section */}
			<ScrollAnimatedSection
				id="services"
				title="Our Complete Services"
				subtitle="Comprehensive digital solutions for your business success"
				isDark={isDark}
				className={`py-20 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
				animationType="slide-left">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Web Development - Responsive */}
					<div
						className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
							isDark
								? "bg-gray-900 border border-gray-700"
								: "bg-white border border-gray-200 shadow-lg"
						}`}>
						<div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500">
							<Monitor className="w-8 h-8 text-white" />
						</div>
						<h3
							className={`text-2xl font-bold mb-4 text-center ${
								isDark ? "text-white" : "text-gray-900"
							}`}>
							Responsive Web Development
						</h3>
						<p
							className={`mb-6 text-center ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							Custom responsive websites that work perfectly on all devices with
							modern frameworks and technologies.
						</p>
						<ul
							className={`space-y-2 mb-6 ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							<li className="flex items-center">
								<Smartphone className="w-4 h-4 mr-2 text-green-500" />{" "}
								Mobile-First Design
							</li>
							<li className="flex items-center">
								<Globe className="w-4 h-4 mr-2 text-green-500" /> Cross-Browser
								Compatible
							</li>
							<li className="flex items-center">
								<Zap className="w-4 h-4 mr-2 text-green-500" /> Fast Loading
								Speed
							</li>
						</ul>
						<Link
							to="/services"
							className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors font-semibold">
							<span>Learn More</span>
							<ArrowRight className="w-4 h-4" />
						</Link>
					</div>

					{/* Cloud-Based Solutions */}
					<div
						className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
							isDark
								? "bg-gray-900 border border-gray-700"
								: "bg-white border border-gray-200 shadow-lg"
						}`}>
						<div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
							<Cloud className="w-8 h-8 text-white" />
						</div>
						<h3
							className={`text-2xl font-bold mb-4 text-center ${
								isDark ? "text-white" : "text-gray-900"
							}`}>
							Cloud-Based Solutions
						</h3>
						<p
							className={`mb-6 text-center ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							Scalable cloud infrastructure and hosting solutions for maximum
							reliability and performance.
						</p>
						<ul
							className={`space-y-2 mb-6 ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							<li>• AWS & Azure Integration</li>
							<li>• 99.9% Uptime Guarantee</li>
							<li>• Automated Backups</li>
							<li>• Scalable Resources</li>
						</ul>
						<Link
							to="/services"
							className="inline-flex items-center space-x-2 text-cyan-600 hover:text-cyan-700 transition-colors font-semibold">
							<span>Learn More</span>
							<ArrowRight className="w-4 h-4" />
						</Link>
					</div>

					{/* 24/7 Support */}
					<div
						className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
							isDark
								? "bg-gray-900 border border-gray-700"
								: "bg-white border border-gray-200 shadow-lg"
						}`}>
						<div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-teal-500">
							<HeadphonesIcon className="w-8 h-8 text-white" />
						</div>
						<h3
							className={`text-2xl font-bold mb-4 text-center ${
								isDark ? "text-white" : "text-gray-900"
							}`}>
							24/7 Support
						</h3>
						<p
							className={`mb-6 text-center ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							Round-the-clock technical support and maintenance to keep your
							business running smoothly.
						</p>
						<ul
							className={`space-y-2 mb-6 ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							<li>• Live Chat Support</li>
							<li>• Emergency Response</li>
							<li>• Regular Maintenance</li>
							<li>• Performance Monitoring</li>
						</ul>
						<Link
							to="/services"
							className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors font-semibold">
							<span>Learn More</span>
							<ArrowRight className="w-4 h-4" />
						</Link>
					</div>

					{/* Video Reels Editing */}
					<div
						className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
							isDark
								? "bg-gray-900 border border-gray-700"
								: "bg-white border border-gray-200 shadow-lg"
						}`}>
						<div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-red-500">
							<Video className="w-8 h-8 text-white" />
						</div>
						<h3
							className={`text-2xl font-bold mb-4 text-center ${
								isDark ? "text-white" : "text-gray-900"
							}`}>
							Video Reels Editing
						</h3>
						<p
							className={`mb-6 text-center ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							Professional video editing services for Instagram Reels, TikTok,
							and YouTube Shorts to boost engagement.
						</p>
						<ul
							className={`space-y-2 mb-6 ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							<li>• Instagram Reels</li>
							<li>• TikTok Videos</li>
							<li>• YouTube Shorts</li>
							<li>• Motion Graphics</li>
						</ul>
						<Link
							to="/services"
							className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors font-semibold">
							<span>Learn More</span>
							<ArrowRight className="w-4 h-4" />
						</Link>
					</div>

					{/* Social Media Management */}
					<div
						className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
							isDark
								? "bg-gray-900 border border-gray-700"
								: "bg-white border border-gray-200 shadow-lg"
						}`}>
						<div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500">
							<Share2 className="w-8 h-8 text-white" />
						</div>
						<h3
							className={`text-2xl font-bold mb-4 text-center ${
								isDark ? "text-white" : "text-gray-900"
							}`}>
							Social Media Management
						</h3>
						<p
							className={`mb-6 text-center ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							Complete social media management to grow your online presence and
							engage with your audience effectively.
						</p>
						<ul
							className={`space-y-2 mb-6 ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							<li>• Content Creation</li>
							<li>• Posting & Scheduling</li>
							<li>• Community Management</li>
							<li>• Analytics & Reporting</li>
						</ul>
						<Link
							to="/services"
							className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors font-semibold">
							<span>Learn More</span>
							<ArrowRight className="w-4 h-4" />
						</Link>
					</div>

					{/* Digital Marketing */}
					<div
						className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
							isDark
								? "bg-gray-900 border border-gray-700"
								: "bg-white border border-gray-200 shadow-lg"
						}`}>
						<div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
							<Zap className="w-8 h-8 text-white" />
						</div>
						<h3
							className={`text-2xl font-bold mb-4 text-center ${
								isDark ? "text-white" : "text-gray-900"
							}`}>
							Digital Marketing
						</h3>
						<p
							className={`mb-6 text-center ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							Comprehensive digital marketing strategies to help your business
							reach more customers and grow online.
						</p>
						<ul
							className={`space-y-2 mb-6 ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							<li>• Search Engine Optimization (SEO)</li>
							<li>• Pay-Per-Click Advertising</li>
							<li>• Email Marketing</li>
							<li>• Content Marketing</li>
						</ul>
						<Link
							to="/services"
							className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors font-semibold">
							<span>Learn More</span>
							<ArrowRight className="w-4 h-4" />
						</Link>
					</div>
				</div>
			</ScrollAnimatedSection>

			{/* Testimonials Section */}
			<ScrollAnimatedSection
				id="testimonials"
				title="What Our Clients Say"
				subtitle="Success stories from businesses across the Inland Empire"
				isDark={isDark}
				className="py-20"
				animationType="bounce">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{
							name: "Sarah Johnson",
							company: "Local Restaurant Owner",
							content:
								"The team created an amazing website for our restaurant. Our online orders increased by 200% in the first month!",
							rating: 5,
						},
						{
							name: "Mike Chen",
							company: "E-commerce Business",
							content:
								"Professional, reliable, and delivered exactly what we needed. Our new website converts visitors like never before.",
							rating: 5,
						},
						{
							name: "Lisa Rodriguez",
							company: "Healthcare Practice",
							content:
								"Outstanding service and beautiful design. They understood our needs perfectly and delivered on time.",
							rating: 5,
						},
					].map((testimonial, index) => (
						<div
							key={index}
							className={`p-6 rounded-xl ${
								isDark
									? "bg-gray-800 border border-gray-700"
									: "bg-white border border-gray-200 shadow-lg"
							}`}>
							<div className="flex mb-4">
								{[...Array(testimonial.rating)].map((_, i) => (
									<Star
										key={i}
										className="w-5 h-5 text-yellow-400 fill-current"
									/>
								))}
							</div>
							<p
								className={`mb-4 italic ${
									isDark ? "text-gray-300" : "text-gray-600"
								}`}>
								"{testimonial.content}"
							</p>
							<div>
								<h4
									className={`font-bold ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									{testimonial.name}
								</h4>
								<p
									className={`text-sm ${
										isDark ? "text-gray-400" : "text-gray-500"
									}`}>
									{testimonial.company}
								</p>
							</div>
						</div>
					))}
				</div>
			</ScrollAnimatedSection>

			{/* CTA Section */}
			<ScrollAnimatedSection
				id="cta"
				title="Ready to Transform Your Online Presence?"
				subtitle="Let's create something amazing together"
				isDark={isDark}
				className={`py-20 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
				animationType="slide-right">
				<div className="text-center">
					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
						<Link
							to="/contact"
							className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
							<span>Get Started Today</span>
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</Link>

						<Link
							to="/portfolio"
							className={`group px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 border-2 ${
								isDark
									? "border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-400"
									: "border-gray-400 text-gray-700 hover:border-purple-600 hover:text-purple-600"
							}`}>
							<span>View Portfolio</span>
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</Link>
					</div>

					<p className={`mt-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
						Free consultation • Quick turnaround • Ongoing support
					</p>
				</div>
			</ScrollAnimatedSection>
		</div>
	);
};

export default Home;
