// pages/Clients.tsx - Updated with Relevant Tech Stack
import React from "react";
import Section from "../components/Section";
import { useNavigate } from "react-router-dom";

interface ClientsProps {
	isDark: boolean;
}

// Updated client data with realistic tech stack from your resume
const clientData = {
	featured: [
		{
			id: 1,
			name: "Sarah's Boutique Collection",
			industry: "Fashion E-commerce",
			location: "Los Angeles, CA",
			logo: "👗",
			description:
				"Complete e-commerce website with product catalog, shopping cart, payment integration, and responsive design for a growing fashion boutique",
			results: [
				"300% increase in online sales",
				"Mobile-first responsive design",
				"Secure payment processing",
				"SEO-optimized product pages",
			],
			testimonial:
				"As a solo entrepreneur, I needed a professional website that could showcase my designs and handle sales. Blue Sprout built me a beautiful, fast website that my customers love. Sales have tripled since launch!",
			author: "Sarah Martinez",
			position: "Founder & Designer",
			projectType: "E-commerce Website",
			timeline: "3 weeks",
			technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe API"],
		},
		{
			id: 2,
			name: "Mike's Handyman Services",
			industry: "Home Services",
			location: "Austin, TX",
			logo: "🔧",
			description:
				"Professional service website with online booking, service portfolio, customer testimonials, and mobile-optimized contact forms",
			results: [
				"Doubled monthly bookings",
				"Professional brand identity",
				"Mobile-friendly design",
				"5-star Google rating maintained",
			],
			testimonial:
				"I went from having no online presence to getting calls every day. The website looks professional and customers can easily see my work and book services. Best investment I've made for my business.",
			author: "Mike Thompson",
			position: "Owner/Operator",
			projectType: "Service Business Website",
			timeline: "2 weeks",
			technologies: ["React", "CSS", "JavaScript", "Bootstrap"],
		},
		{
			id: 3,
			name: "Dr. Lisa's Wellness Clinic",
			industry: "Healthcare",
			location: "Miami, FL",
			logo: "🌿",
			description:
				"Professional healthcare website with appointment booking, service information, patient resources, and HIPAA-compliant contact forms",
			results: [
				"200% increase in new patients",
				"Professional online presence",
				"Easy appointment scheduling",
				"Mobile-optimized experience",
			],
			testimonial:
				"My new website perfectly represents my holistic approach to wellness. Patients can easily learn about my services and book appointments online. The professional design has really elevated my practice.",
			author: "Dr. Lisa Chen",
			position: "Holistic Wellness Practitioner",
			projectType: "Healthcare Practice Website",
			timeline: "4 weeks",
			technologies: ["React", "TypeScript", "Material UI", "HTML/CSS"],
		},
	],

	videoClients: [
		{
			name: "Tony's Pizza Kitchen",
			logo: "🍕",
			service: "Social Media Video Content",
			result: "150% increase in social engagement",
		},
		{
			name: "Bella's Pet Grooming",
			logo: "🐕",
			service: "Promotional Video Editing",
			result: "40% more bookings via social media",
		},
		{
			name: "Luna Yoga Studio",
			logo: "🧘‍♀️",
			service: "Class Promo Videos",
			result: "60% growth in class attendance",
		},
	],

	brandingClients: [
		{
			name: "Emma's Hair Studio",
			logo: "💇‍♀️",
			service: "Logo Design & Brand Identity",
			result: "Complete brand transformation",
		},
		{
			name: "James Photography",
			logo: "📸",
			service: "Logo & Marketing Materials",
			result: "Professional brand presence",
		},
		{
			name: "Carlos Landscaping",
			logo: "🌱",
			service: "Business Logo & Branding",
			result: "Memorable brand identity",
		},
	],

	industries: [
		{ name: "E-commerce", count: 12, icon: "🛒", color: "blue" },
		{ name: "Home Services", count: 15, icon: "🔧", color: "green" },
		{ name: "Health & Wellness", count: 8, icon: "🌿", color: "teal" },
		{ name: "Food & Beverage", count: 10, icon: "🍽️", color: "orange" },
		{ name: "Professional Services", count: 9, icon: "💼", color: "purple" },
		{ name: "Creative Services", count: 6, icon: "🎨", color: "pink" },
	],
};

const Clients: React.FC<ClientsProps> = ({ isDark }) => {
	const navigate = useNavigate();

	const handleCalendarOpen = () => {
		navigate("/contact");
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 100);
	};

	return (
		<Section id="clients-page" className="pt-32 pb-20">
			{/* Hero Section */}
			<div className="text-center mb-20">
				<h1
					className={`text-4xl md:text-5xl font-bold mb-8 ${
						isDark ? "text-white" : "text-gray-900"
					}`}>
					Our Clients & Success Stories
				</h1>
				<p
					className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8 ${
						isDark ? "text-gray-300" : "text-gray-600"
					}`}>
					Helping small businesses and entrepreneurs across the United States
					build their digital presence with professional websites, engaging
					video content, and memorable brand identities.
				</p>
				<div className="flex flex-wrap justify-center items-center gap-8 text-sm">
					<div
						className={`flex items-center space-x-2 ${
							isDark ? "text-gray-300" : "text-gray-600"
						}`}>
						<span className="text-2xl">🌐</span>
						<span>Professional Websites</span>
					</div>
					<div
						className={`flex items-center space-x-2 ${
							isDark ? "text-gray-300" : "text-gray-600"
						}`}>
						<span className="text-2xl">🎬</span>
						<span>Video Content Creation</span>
					</div>
					<div
						className={`flex items-center space-x-2 ${
							isDark ? "text-gray-300" : "text-gray-600"
						}`}>
						<span className="text-2xl">🎨</span>
						<span>Logo Design & Branding</span>
					</div>
				</div>
			</div>

			{/* Tech Stack & Methodology Showcase */}
			<div
				className={`mb-20 p-8 rounded-3xl ${
					isDark
						? "bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700"
						: "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200"
				}`}>
				<h2
					className={`text-2xl font-bold text-center mb-8 ${
						isDark ? "text-white" : "text-gray-900"
					}`}>
					Built with Modern Technologies & Agile Workflow
				</h2>

				{/* Agile Methodology Banner */}
				<div
					className={`text-center mb-8 p-4 rounded-xl ${
						isDark
							? "bg-green-900/30 border border-green-700"
							: "bg-green-50 border border-green-200"
					}`}>
					<div className="flex items-center justify-center space-x-4">
						<span className="text-2xl">🔄</span>
						<div>
							<h3
								className={`font-bold ${
									isDark ? "text-green-300" : "text-green-800"
								}`}>
								Agile Development Process
							</h3>
							<p
								className={`text-sm ${
									isDark ? "text-green-400" : "text-green-600"
								}`}>
								Blue Sprout Agency follows Agile/Scrum methodology for efficient
								project delivery and client collaboration
							</p>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
					{[
						{ name: "React", icon: "⚛️" },
						{ name: "TypeScript", icon: "📘" },
						{ name: ".NET", icon: "🔷" },
						{ name: "C#", icon: "💜" },
						{ name: "Tailwind CSS", icon: "🎨" },
						{ name: "JavaScript", icon: "📄" },
						{ name: "HTML/CSS", icon: "🌐" },
						{ name: "Bootstrap", icon: "🅱️" },
					].map((tech, index) => (
						<div
							key={index}
							className={`text-center p-4 rounded-lg ${
								isDark ? "bg-gray-800/50" : "bg-white/80"
							}`}>
							<div className="text-2xl mb-2">{tech.icon}</div>
							<div
								className={`text-xs font-medium ${
									isDark ? "text-gray-300" : "text-gray-700"
								}`}>
								{tech.name}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Featured Website Projects */}
			<div className="mb-20">
				<h2
					className={`text-3xl font-bold text-center mb-12 ${
						isDark ? "text-white" : "text-gray-900"
					}`}>
					Website Development Success Stories
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
									className={`p-8 rounded-3xl shadow-xl ${
										isDark
											? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
											: "bg-gradient-to-br from-white to-gray-50 border border-gray-200"
									}`}>
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
										className={`p-4 rounded-xl mb-6 ${
											isDark ? "bg-gray-700/50" : "bg-gray-100"
										}`}>
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

									{/* Technologies Used */}
									<div className="mb-4">
										<h5
											className={`text-sm font-semibold mb-2 ${
												isDark ? "text-gray-300" : "text-gray-600"
											}`}>
											Technologies Used:
										</h5>
										<div className="flex flex-wrap gap-2">
											{client.technologies.map((tech, idx) => (
												<span
													key={idx}
													className={`px-3 py-1 rounded-full text-xs font-medium ${
														isDark
															? "bg-blue-900/50 text-blue-300"
															: "bg-blue-100 text-blue-800"
													}`}>
													{tech}
												</span>
											))}
										</div>
									</div>

									{/* Project Timeline & Methodology */}
									<div className="grid grid-cols-2 gap-4 text-sm">
										<div>
											<span
												className={`font-semibold ${
													isDark ? "text-gray-300" : "text-gray-600"
												}`}>
												Delivered in:
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
												Process:
											</span>
											<span
												className={`ml-2 ${
													isDark ? "text-white" : "text-gray-900"
												}`}>
												Agile/Scrum
											</span>
										</div>
									</div>
								</div>
							</div>

							{/* Visual Side */}
							<div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
								<div
									className={`p-8 rounded-3xl text-center ${
										isDark
											? "bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-700"
											: "bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200"
									}`}>
									<div className="text-8xl mb-6">{client.logo}</div>
									<h4
										className={`text-xl font-bold mb-4 ${
											isDark ? "text-white" : "text-gray-900"
										}`}>
										{client.projectType}
									</h4>
									<p
										className={`text-sm mb-4 ${
											isDark ? "text-gray-300" : "text-gray-600"
										}`}>
										Built with modern web technologies using Agile development
										methodology for optimal performance and user experience
									</p>
									<div
										className={`text-xs px-3 py-1 rounded-full inline-block ${
											isDark
												? "bg-green-900/50 text-green-300"
												: "bg-green-100 text-green-700"
										}`}>
										🔄 Agile Process • Weekly Updates • Client Collaboration
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Video & Branding Services */}
			<div className="grid lg:grid-cols-2 gap-12 mb-20">
				{/* Video Content Section */}
				<div
					className={`p-8 rounded-3xl ${
						isDark
							? "bg-gray-800 border border-gray-700"
							: "bg-white border border-gray-200"
					} shadow-xl`}>
					<div className="text-center mb-8">
						<div className="text-5xl mb-4">🎬</div>
						<h3
							className={`text-2xl font-bold mb-4 ${
								isDark ? "text-white" : "text-gray-900"
							}`}>
							Video Content Creation
						</h3>
						<p
							className={`text-sm ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							Engaging promotional videos, social media content, and marketing
							materials
						</p>
					</div>

					<div className="space-y-4">
						{clientData.videoClients.map((client, index) => (
							<div
								key={index}
								className={`p-4 rounded-lg ${
									isDark ? "bg-gray-700/50" : "bg-gray-50"
								}`}>
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-3">
										<span className="text-2xl">{client.logo}</span>
										<div>
											<div
												className={`font-semibold text-sm ${
													isDark ? "text-white" : "text-gray-900"
												}`}>
												{client.name}
											</div>
											<div
												className={`text-xs ${
													isDark ? "text-gray-400" : "text-gray-600"
												}`}>
												{client.service}
											</div>
										</div>
									</div>
									<div
										className={`text-xs font-medium ${
											isDark ? "text-green-400" : "text-green-600"
										}`}>
										{client.result}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Logo Design Section */}
				<div
					className={`p-8 rounded-3xl ${
						isDark
							? "bg-gray-800 border border-gray-700"
							: "bg-white border border-gray-200"
					} shadow-xl`}>
					<div className="text-center mb-8">
						<div className="text-5xl mb-4">🎨</div>
						<h3
							className={`text-2xl font-bold mb-4 ${
								isDark ? "text-white" : "text-gray-900"
							}`}>
							Logo Design & Branding
						</h3>
						<p
							className={`text-sm ${
								isDark ? "text-gray-300" : "text-gray-600"
							}`}>
							Professional logos, brand identities, and marketing materials for
							growing businesses
						</p>
					</div>

					<div className="space-y-4">
						{clientData.brandingClients.map((client, index) => (
							<div
								key={index}
								className={`p-4 rounded-lg ${
									isDark ? "bg-gray-700/50" : "bg-gray-50"
								}`}>
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-3">
										<span className="text-2xl">{client.logo}</span>
										<div>
											<div
												className={`font-semibold text-sm ${
													isDark ? "text-white" : "text-gray-900"
												}`}>
												{client.name}
											</div>
											<div
												className={`text-xs ${
													isDark ? "text-gray-400" : "text-gray-600"
												}`}>
												{client.service}
											</div>
										</div>
									</div>
									<div
										className={`text-xs font-medium ${
											isDark ? "text-purple-400" : "text-purple-600"
										}`}>
										{client.result}
									</div>
								</div>
							</div>
						))}
					</div>
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
							className={`text-center p-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg ${
								isDark
									? "bg-gray-800 border border-gray-700 hover:bg-gray-700"
									: "bg-white border border-gray-200 hover:bg-gray-50"
							}`}>
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
								{industry.count} projects
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Call to Action */}
			<div
				className={`text-center p-12 rounded-3xl max-w-4xl mx-auto ${
					isDark
						? "bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-700"
						: "bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200"
				}`}>
				<h3
					className={`text-3xl font-bold mb-6 ${
						isDark ? "text-white" : "text-gray-900"
					}`}>
					Ready to Transform Your Business?
				</h3>
				<p
					className={`text-lg mb-8 max-w-2xl mx-auto ${
						isDark ? "text-gray-300" : "text-gray-700"
					}`}>
					Let's create a professional website, engaging video content, or
					memorable brand identity for your business. Schedule a free
					consultation to get started.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<button
						onClick={handleCalendarOpen}
						className="px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl">
						Get Free Consultation 📅
					</button>

					<a
						href="tel:+16572174737"
						className={`px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300 ${
							isDark
								? "border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white"
								: "border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900"
						}`}>
						📞 Call: (657) 217-4737
					</a>
				</div>

				<div
					className={`mt-6 text-sm ${
						isDark ? "text-gray-400" : "text-gray-500"
					}`}>
					<span>📧 support@bluesproutagency.com</span>
					<span className="mx-4">•</span>
					<span>Based in California</span>
				</div>
			</div>
		</Section>
	);
};

export default Clients;
