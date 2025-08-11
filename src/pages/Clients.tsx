// pages/Clients.tsx - MVP Client Page
import React from "react";
import Section from "../components/Section";
import { useNavigate } from "react-router-dom";

interface ClientsProps {
	isDark: boolean;
}

// Client data with entrepreneurs and small business owners
const clientData = {
	featured: [
		{
			id: 1,
			name: "Sarah's Boutique Collection",
			industry: "Fashion Retail",
			location: "Los Angeles, CA",
			logo: "👗",
			description:
				"Complete e-commerce automation with inventory management, customer communications, and social media integration for a growing fashion boutique",
			results: [
				"300% increase in online sales",
				"Automated inventory tracking",
				"80% reduction in manual order processing",
				"24/7 customer support via chatbot",
			],
			testimonial:
				"As a solo entrepreneur, I was drowning in orders and inventory management. Blue Sprout built me a system that runs my entire business while I focus on designing and sourcing. My customers get instant responses, and I never oversell products anymore.",
			author: "Sarah Martinez",
			position: "Founder & Designer",
			projectType: "E-commerce Automation Suite",
			timeline: "3 months",
			technologies: ["Shopify", "React", "Zapier", "Instagram API"],
		},
		{
			id: 2,
			name: "Mike's Handyman Services",
			industry: "Home Services",
			location: "Austin, TX",
			logo: "🔧",
			description:
				"Booking and scheduling system with automated customer follow-ups, invoice generation, and Google Maps integration for service routing",
			results: [
				"Doubled monthly bookings",
				"90% faster invoicing",
				"Zero missed appointments",
				"5-star Google rating maintained",
			],
			testimonial:
				"I went from spending 3 hours a day on paperwork to maybe 20 minutes. The system books my appointments, sends reminders to customers, and even optimizes my daily route. I can take on 40% more jobs now.",
			author: "Mike Thompson",
			position: "Owner/Operator",
			projectType: "Service Business Management Platform",
			timeline: "2 months",
			technologies: ["React", "Google Calendar API", "Stripe", "Twilio"],
		},
		{
			id: 3,
			name: "Dr. Lisa's Wellness Clinic",
			industry: "Healthcare",
			location: "Miami, FL",
			logo: "🌿",
			description:
				"Patient management system with automated appointment scheduling, treatment reminders, and telehealth integration for holistic wellness practice",
			results: [
				"200% increase in patient retention",
				"Eliminated no-shows with auto-reminders",
				"Seamless telehealth integration",
				"$60K+ annual time savings",
			],
			testimonial:
				"Running a wellness practice alone was overwhelming. Now my patients can book online, get automated wellness tips, and join virtual consultations seamlessly. I've tripled my practice size without hiring additional staff.",
			author: "Dr. Lisa Chen",
			position: "Holistic Wellness Practitioner",
			projectType: "Healthcare Practice Automation",
			timeline: "4 months",
			technologies: ["Vue.js", "Node.js", "Zoom API", "Square"],
		},
	],

	logoWall: [
		{ name: "Emma's Hair Studio", logo: "💇‍♀️", location: "San Diego, CA" },
		{ name: "Tony's Pizza Kitchen", logo: "🍕", location: "Chicago, IL" },
		{ name: "Bella's Pet Grooming", logo: "🐕", location: "Phoenix, AZ" },
		{ name: "James Photography", logo: "📸", location: "Nashville, TN" },
		{ name: "Maria's Cleaning Co.", logo: "🧽", location: "Denver, CO" },
		{ name: "David's Auto Repair", logo: "🔧", location: "Portland, OR" },
		{ name: "Luna Yoga Studio", logo: "🧘‍♀️", location: "Austin, TX" },
		{ name: "Carlos Landscaping", logo: "🌱", location: "Tampa, FL" },
		{ name: "Sophie's Bakery", logo: "🧁", location: "Seattle, WA" },
		{ name: "Tech Repair Pro", logo: "💻", location: "Atlanta, GA" },
		{ name: "Bloom Flower Shop", logo: "🌸", location: "Sacramento, CA" },
		{ name: "Fitness Coach Anna", logo: "💪", location: "Las Vegas, NV" },
	],

	industries: [
		{ name: "Fashion & Beauty", count: 12, icon: "💄", color: "pink" },
		{ name: "Home Services", count: 15, icon: "🔧", color: "blue" },
		{ name: "Health & Wellness", count: 8, icon: "🌿", color: "green" },
		{ name: "Food & Beverage", count: 10, icon: "🍽️", color: "orange" },
		{ name: "Professional Services", count: 9, icon: "💼", color: "purple" },
		{ name: "Creative Services", count: 6, icon: "🎨", color: "teal" },
	],
};

const Clients: React.FC<ClientsProps> = ({ isDark }) => {
	const navigate = useNavigate();

	const handleCalendarOpen = () => {
		// Navigate to the calendar page
		navigate("/contact");
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 100);
	};
	return (
		<Section id="clients-page" className="pt-32 pb-20">
			{/* Hero Section */}
			<div className="text-center mb-20">
				<h1 className="text-4xl md:text-5xl font-bold mb-8">Our Clients</h1>
				<p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
					Empowering entrepreneurs, freelancers, and small business owners
					across the United States. We help ambitious business owners automate
					their operations and focus on what they do best.
				</p>
				<div className="mt-8 flex justify-center items-center space-x-8 text-sm">
					<div
						className={`flex items-center space-x-2 ${
							isDark ? "text-gray-300" : "text-gray-600"
						}`}>
						<span className="text-2xl">👥</span>
						<span>Solo Entrepreneurs to Small Teams</span>
					</div>
					<div
						className={`flex items-center space-x-2 ${
							isDark ? "text-gray-300" : "text-gray-600"
						}`}>
						<span className="text-2xl">⭐</span>
						<span>100% Client Satisfaction</span>
					</div>
					<div
						className={`flex items-center space-x-2 ${
							isDark ? "text-gray-300" : "text-gray-600"
						}`}>
						<span className="text-2xl">🚀</span>
						<span>50+ Projects Delivered</span>
					</div>
				</div>
			</div>

			{/* Featured Success Stories */}
			<div className="mb-20">
				<h2
					className={`text-3xl font-bold text-center mb-12 ${
						isDark ? "text-white" : "text-gray-900"
					}`}>
					Success Stories
				</h2>

				<div className="space-y-16">
					{clientData.featured.map((client, index) => (
						<div
							key={client.id}
							className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
								index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
							}`}>
							{/* Content Side */}
							<div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
								<div
									className={`p-8 rounded-3xl ${
										isDark
											? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
											: "bg-gradient-to-br from-white to-gray-50 border border-gray-200"
									} shadow-xl`}>
									{/* Client Header */}
									<div className="flex items-center space-x-4 mb-6">
										<div className="text-4xl">{client.logo}</div>
										<div>
											<h3
												className={`text-2xl font-bold ${
													isDark ? "text-white" : "text-gray-900"
												}`}>
												{client.name}
											</h3>
											<p
												className={`text-sm ${
													isDark ? "text-gray-400" : "text-gray-600"
												}`}>
												{client.industry} • {client.location}
											</p>
										</div>
									</div>

									{/* Project Description */}
									<p
										className={`text-lg mb-6 ${
											isDark ? "text-gray-300" : "text-gray-700"
										}`}>
										{client.description}
									</p>

									{/* Results */}
									<div className="mb-6">
										<h4
											className={`font-semibold mb-3 ${
												isDark ? "text-white" : "text-gray-900"
											}`}>
											Key Results:
										</h4>
										<div className="space-y-2">
											{client.results.map((result, idx) => (
												<div key={idx} className="flex items-center space-x-2">
													<span className="text-green-500">✓</span>
													<span
														className={`text-sm ${
															isDark ? "text-gray-300" : "text-gray-700"
														}`}>
														{result}
													</span>
												</div>
											))}
										</div>
									</div>

									{/* Testimonial */}
									<div
										className={`p-4 rounded-xl ${
											isDark ? "bg-gray-700/50" : "bg-gray-100"
										} mb-6`}>
										<p
											className={`text-sm italic mb-3 ${
												isDark ? "text-gray-300" : "text-gray-700"
											}`}>
											"{client.testimonial}"
										</p>
										<div className="flex items-center space-x-3">
											<div
												className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
													isDark
														? "bg-blue-600 text-white"
														: "bg-blue-100 text-blue-800"
												}`}>
												{client.author
													.split(" ")
													.map((n) => n[0])
													.join("")}
											</div>
											<div>
												<div
													className={`font-semibold text-sm ${
														isDark ? "text-white" : "text-gray-900"
													}`}>
													{client.author}
												</div>
												<div
													className={`text-xs ${
														isDark ? "text-gray-400" : "text-gray-600"
													}`}>
													{client.position}
												</div>
											</div>
										</div>
									</div>

									{/* Project Details */}
									<div className="grid grid-cols-2 gap-4 text-sm">
										<div>
											<span
												className={`font-semibold ${
													isDark ? "text-gray-300" : "text-gray-600"
												}`}>
												Timeline:
											</span>
											<span
												className={`ml-2 ${
													isDark ? "text-white" : "text-gray-900"
												}`}>
												{client.timeline}
											</span>
										</div>
										<div>
											<span
												className={`font-semibold ${
													isDark ? "text-gray-300" : "text-gray-600"
												}`}>
												Type:
											</span>
											<span
												className={`ml-2 ${
													isDark ? "text-white" : "text-gray-900"
												}`}>
												{client.projectType}
											</span>
										</div>
									</div>
								</div>
							</div>

							{/* Visual Side */}
							<div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
								<div
									className={`p-8 rounded-3xl ${
										isDark
											? "bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-700"
											: "bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200"
									} text-center`}>
									<div className="text-8xl mb-6">{client.logo}</div>
									<h4
										className={`text-xl font-bold mb-4 ${
											isDark ? "text-white" : "text-gray-900"
										}`}>
										{client.projectType}
									</h4>
									<div className="flex flex-wrap gap-2 justify-center">
										{client.technologies.map((tech, idx) => (
											<span
												key={idx}
												className={`px-3 py-1 rounded-full text-xs font-medium ${
													isDark
														? "bg-blue-800/50 text-blue-300"
														: "bg-blue-100 text-blue-800"
												}`}>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Industries We Serve */}
			<div className="mb-20">
				<h2
					className={`text-3xl font-bold text-center mb-12 ${
						isDark ? "text-white" : "text-gray-900"
					}`}>
					Industries We Serve
				</h2>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
					{clientData.industries.map((industry, index) => (
						<div
							key={index}
							className={`text-center p-6 rounded-xl transform hover:scale-105 transition-all duration-300 ${
								isDark
									? "bg-gray-800 border border-gray-700 hover:bg-gray-700"
									: "bg-white border border-gray-200 hover:bg-gray-50"
							} shadow-lg`}>
							<div className="text-3xl mb-3">{industry.icon}</div>
							<h3
								className={`font-semibold text-sm mb-2 ${
									isDark ? "text-white" : "text-gray-900"
								}`}>
								{industry.name}
							</h3>
							<div
								className={`text-xs ${
									isDark ? "text-gray-400" : "text-gray-600"
								}`}>
								{industry.count} clients
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Client Logo Wall */}
			<div className="mb-20">
				<h2
					className={`text-3xl font-bold text-center mb-12 ${
						isDark ? "text-white" : "text-gray-900"
					}`}>
					Trusted by Businesses Nationwide
				</h2>

				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
					{clientData.logoWall.map((client, index) => (
						<div
							key={index}
							className={`text-center p-4 rounded-lg border-2 border-dashed transition-all duration-300 hover:border-solid ${
								isDark
									? "border-gray-600 hover:border-gray-400 hover:bg-gray-800"
									: "border-gray-300 hover:border-gray-500 hover:bg-gray-50"
							}`}>
							<div className="text-2xl mb-2">{client.logo}</div>
							<div
								className={`text-xs font-medium ${
									isDark ? "text-gray-300" : "text-gray-700"
								}`}>
								{client.name}
							</div>
							<div
								className={`text-xs ${
									isDark ? "text-gray-500" : "text-gray-500"
								}`}>
								{client.location}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Call to Action */}
			<div
				className={`text-center p-12 rounded-3xl ${
					isDark
						? "bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-700"
						: "bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200"
				} max-w-4xl mx-auto`}>
				<h3
					className={`text-3xl font-bold mb-6 ${
						isDark ? "text-white" : "text-gray-900"
					}`}>
					Ready to Join Our Success Stories?
				</h3>
				<p
					className={`text-lg mb-8 max-w-2xl mx-auto ${
						isDark ? "text-gray-300" : "text-gray-700"
					}`}>
					Let's discuss how we can automate your business processes and help you
					achieve similar results. Schedule a free consultation to get started -
					we work with clients nationwide.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<button
						onClick={handleCalendarOpen}
						className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
							isDark
								? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
								: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
						} shadow-lg hover:shadow-xl`}>
						Schedule Free Consultation 📅
					</button>

					<button
						className={`px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300 ${
							isDark
								? "border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white"
								: "border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900"
						}`}>
						View More Case Studies
					</button>
				</div>

				<div className="mt-6 text-sm opacity-75">
					<span>📧 support@bluesproutagency.com</span>
					<span className="mx-4">•</span>
					<span>📞 (657) 217-4737</span>
				</div>
			</div>
		</Section>
	);
};

export default Clients;
