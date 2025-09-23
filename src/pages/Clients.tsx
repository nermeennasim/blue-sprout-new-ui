// pages/Clients.tsx - Redesigned with Real Case Studies
import React from "react";
import Section from "../components/Section";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {
	FaHome,
	FaMusic,
	FaCloud,
	FaMobile,
	FaUser,
	FaRocket,
	FaPhone,
	FaEnvelope,
} from "react-icons/fa";

const realCaseStudies = [
	{
		id: 1,
		name: "Silver Seed Investment",
		industry: "Real Estate Investment",
		location: "California, USA",
		icon: FaHome,
		color: "#059669",
		description:
			"Comprehensive real estate investment platform with automated workflow for tracking investor portfolios, property listings, and investment performance analytics.",
		challenge:
			"Managing complex real estate investments, tracking multiple properties, and providing transparent reporting to investors required a sophisticated automated system.",
		solution:
			"Built a full-stack investment platform with automated workflows, real-time property tracking, investor dashboards, and comprehensive analytics.",
		results: [
			"Automated investment tracking",
			"Real-time property performance data",
			"Streamlined investor reporting",
			"Enhanced portfolio management",
		],
		technologies: ["React", "TypeScript", ".NET Core", "SQL Server", "Azure"],
		timeline: "8 weeks",
		projectType: "Investment Platform",
		status: "Live & Active",
	},
	{
		id: 2,
		name: "Black Tie Events",
		industry: "Event Planning & Rentals",
		location: "California, USA",
		icon: FaMusic,
		color: "#000000",
		description:
			"Complete event management platform with rental tracking, booking system, photobooth management, and music request API generating 10x revenue growth.",
		challenge:
			"Managing event rentals, scheduling, photobooth operations, and music requests across multiple events while creating new revenue streams.",
		solution:
			"Developed comprehensive platform with rental inventory, booking automation, photobooth integration, and monetized music request API.",
		results: [
			"10x revenue increase",
			"Streamlined rental management",
			"Automated booking system",
			"New API revenue streams",
		],
		technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Custom APIs"],
		timeline: "6 weeks",
		projectType: "Event Management Platform",
		status: "Live & Active",
		website: "blktieevents.com",
	},
	{
		id: 3,
		name: "Canada Cloud Solutions",
		industry: "Cloud & Cybersecurity",
		location: "Toronto, Canada",
		icon: FaCloud,
		color: "#0ea5e9",
		description:
			"Professional corporate website for comprehensive cloud and cybersecurity solutions helping businesses modernize infrastructure and enhance security posture.",
		challenge:
			"Establishing credible online presence to showcase expertise in both cloud migration and cybersecurity services for enterprise clients.",
		solution:
			"Created a professional website highlighting cloud services, cybersecurity expertise, case studies, and technical capabilities with lead generation focus.",
		results: [
			"Enhanced market credibility",
			"Improved client acquisition",
			"Professional brand positioning",
			"Qualified lead generation",
		],
		technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
		timeline: "3 weeks",
		projectType: "Corporate Website",
		status: "Live & Active",
		website: "canadacloudsolution.ca",
	},
	{
		id: 4,
		name: "Alfalah Learning Platform",
		industry: "Educational Technology",
		location: "California, USA",
		icon: FaMobile,
		color: "#dc2626",
		description:
			"Educational Learning Management System (LMS) with 'learn as you go' methodology, progress tracking, and personalized learning paths for continuous education.",
		challenge:
			"Creating an adaptive learning platform that allows users to learn at their own pace while maintaining engagement and tracking progress effectively.",
		solution:
			"Developing comprehensive LMS with adaptive learning algorithms, progress analytics, and personalized content delivery system.",
		results: [
			"Adaptive learning system designed",
			"Progress tracking implemented",
			"Personalized learning paths",
			"User engagement optimized",
		],
		technologies: [
			"React Native",
			"Node.js",
			"PostgreSQL",
			"Firebase",
			"AI/ML",
		],
		timeline: "10 weeks (In Development)",
		projectType: "Learning Management System",
		status: "In Development",
		website: "alfalah.app",
	},
	{
		id: 5,
		name: "EduConsult Portfolio",
		industry: "Education Consultancy",
		location: "California, USA",
		icon: FaUser,
		color: "#ec4899",
		description:
			"Professional portfolio website for female entrepreneur in education consultancy, showcasing expertise, client success stories, and comprehensive service offerings.",
		challenge:
			"Creating a professional online presence that effectively communicates educational expertise and builds trust with prospective clients and partners.",
		solution:
			"Designed a sophisticated portfolio with service showcase, client testimonials, blog integration, and consultation booking system.",
		results: [
			"Professional brand establishment",
			"Increased client inquiries",
			"Enhanced credibility",
			"Streamlined consultation booking",
		],
		technologies: ["React", "TypeScript", "Framer Motion", "Sanity CMS"],
		timeline: "3 weeks",
		projectType: "Professional Portfolio",
		status: "Live & Active",
	},
];

const industryStats = [
	{ name: "Real Estate", count: 2, icon: FaHome, color: "#059669" },
	{ name: "Event Management", count: 3, icon: FaMusic, color: "#000000" },
	{ name: "Cloud & Security", count: 4, icon: FaCloud, color: "#0ea5e9" },
	{ name: "EdTech", count: 2, icon: FaMobile, color: "#dc2626" },
	{ name: "Professional Services", count: 5, icon: FaUser, color: "#ec4899" },
	{ name: "E-commerce", count: 3, icon: FaRocket, color: "#f59e0b" },
];

const Clients: React.FC = () => {
	const navigate = useNavigate();
	const { theme } = useTheme();

	const handleContactNavigation = () => {
		navigate("/contact");
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 100);
	};

	return (
		<Section id="clients-page" className="pt-32 pb-20">
			<div className="max-w-7xl mx-auto px-6">
				{/* Hero Section */}
				<div className="text-center mb-20">
					<h1 className="text-5xl font-bold mb-6" style={{ color: theme.text }}>
						Client Success Stories
					</h1>
					<p
						className="text-xl max-w-4xl mx-auto leading-relaxed"
						style={{ color: theme.textSecondary }}>
						Real projects, real results. See how we've helped businesses
						streamline operations, increase efficiency, and achieve their
						digital transformation goals.
					</p>
				</div>

				{/* Case Studies */}
				<div className="space-y-16 mb-20">
					{realCaseStudies.map((project, index) => (
						<div
							key={project.id}
							className={`grid lg:grid-cols-2 gap-12 items-center ${
								index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
							}`}>
							{/* Content Side */}
							<div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
								<div
									className="p-8 rounded-3xl border"
									style={{
										backgroundColor: theme.surface,
										borderColor: theme.border,
									}}>
									{/* Project Header */}
									<div className="flex items-start gap-4 mb-6">
										<div
											className="p-4 rounded-2xl"
											style={{ backgroundColor: `${project.color}15` }}>
											<project.icon
												className="w-8 h-8"
												style={{ color: project.color }}
											/>
										</div>
										<div className="flex-1">
											<div className="flex items-center gap-3 mb-2">
												<h3
													className="text-2xl font-bold"
													style={{ color: theme.text }}>
													{project.name}
												</h3>
												<span
													className={`px-3 py-1 rounded-full text-xs font-semibold ${
														project.status === "Live & Active"
															? "bg-green-100 text-green-800"
															: "bg-orange-100 text-orange-800"
													}`}>
													{project.status}
												</span>
											</div>
											<p style={{ color: theme.textSecondary }}>
												{project.industry} • {project.location}
											</p>
											{project.website && (
												<a
													href={`https://${project.website}`}
													target="_blank"
													rel="noopener noreferrer"
													className="text-sm underline"
													style={{ color: project.color }}>
													{project.website}
												</a>
											)}
										</div>
									</div>

									{/* Project Description */}
									<p
										className="text-lg mb-6"
										style={{ color: theme.textSecondary }}>
										{project.description}
									</p>

									{/* Challenge & Solution */}
									<div className="grid md:grid-cols-2 gap-6 mb-6">
										<div
											className="p-4 rounded-xl"
											style={{ backgroundColor: `${theme.primary}10` }}>
											<h4
												className="font-bold mb-2 text-sm"
												style={{ color: theme.text }}>
												Challenge
											</h4>
											<p
												className="text-sm"
												style={{ color: theme.textSecondary }}>
												{project.challenge}
											</p>
										</div>
										<div
											className="p-4 rounded-xl"
											style={{ backgroundColor: `${project.color}10` }}>
											<h4
												className="font-bold mb-2 text-sm"
												style={{ color: theme.text }}>
												Solution
											</h4>
											<p
												className="text-sm"
												style={{ color: theme.textSecondary }}>
												{project.solution}
											</p>
										</div>
									</div>

									{/* Results */}
									<div className="mb-6">
										<h4
											className="font-bold mb-3"
											style={{ color: theme.text }}>
											Key Results
										</h4>
										<div className="grid md:grid-cols-2 gap-2">
											{project.results.map((result, idx) => (
												<div key={idx} className="flex items-center gap-3">
													<div
														className="w-2 h-2 rounded-full"
														style={{ backgroundColor: project.color }}
													/>
													<span
														className="text-sm"
														style={{ color: theme.textSecondary }}>
														{result}
													</span>
												</div>
											))}
										</div>
									</div>

									{/* Technologies */}
									<div className="mb-6">
										<h4
											className="font-bold mb-3 text-sm"
											style={{ color: theme.textSecondary }}>
											Technologies Used
										</h4>
										<div className="flex flex-wrap gap-2">
											{project.technologies.map((tech, idx) => (
												<span
													key={idx}
													className="px-3 py-1 rounded-full text-xs font-medium"
													style={{
														backgroundColor: `${project.color}20`,
														color: project.color,
													}}>
													{tech}
												</span>
											))}
										</div>
									</div>

									{/* Project Details */}
									<div
										className="flex items-center justify-between pt-4 border-t"
										style={{ borderColor: theme.border }}>
										<div>
											<span
												className="text-xs font-medium"
												style={{ color: theme.textSecondary }}>
												Project Type
											</span>
											<p
												className="font-semibold"
												style={{ color: theme.text }}>
												{project.projectType}
											</p>
										</div>
										<div>
											<span
												className="text-xs font-medium"
												style={{ color: theme.textSecondary }}>
												Timeline
											</span>
											<p
												className="font-semibold"
												style={{ color: theme.text }}>
												{project.timeline}
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Visual Side */}
							<div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
								<div
									className="p-12 rounded-3xl text-center border"
									style={{
										background: `linear-gradient(135deg, ${project.color}10, ${project.color}05)`,
										borderColor: project.color + "30",
									}}>
									<project.icon
										className="w-24 h-24 mx-auto mb-6"
										style={{ color: project.color }}
									/>
									<h4
										className="text-xl font-bold mb-4"
										style={{ color: theme.text }}>
										{project.projectType}
									</h4>
									<p style={{ color: theme.textSecondary }}>
										{project.industry}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Industries We Serve */}
				<div className="mb-20">
					<h2
						className="text-3xl font-bold text-center mb-12"
						style={{ color: theme.text }}>
						Industries We Serve
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
						{industryStats.map((industry, index) => (
							<div
								key={index}
								className="text-center p-6 rounded-2xl border transition-all duration-300 hover:scale-105"
								style={{
									backgroundColor: theme.surface,
									borderColor: theme.border,
								}}>
								<industry.icon
									className="w-8 h-8 mx-auto mb-3"
									style={{ color: industry.color }}
								/>
								<h3
									className="font-semibold mb-2"
									style={{ color: theme.text }}>
									{industry.name}
								</h3>
								<p className="text-sm" style={{ color: theme.textSecondary }}>
									{industry.count} projects
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<div
					className="text-center p-12 rounded-3xl border"
					style={{
						background: `linear-gradient(135deg, ${theme.primary}10, ${theme.surface})`,
						borderColor: theme.border,
					}}>
					<h3 className="text-3xl font-bold mb-6" style={{ color: theme.text }}>
						Ready to Join Our Success Stories?
					</h3>
					<p
						className="text-lg mb-8 max-w-2xl mx-auto"
						style={{ color: theme.textSecondary }}>
						Let's discuss how we can help streamline your business operations,
						improve efficiency, and achieve your digital transformation goals.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							onClick={handleContactNavigation}
							className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-white hover:scale-105"
							style={{
								backgroundColor: theme.primary,
							}}>
							<FaEnvelope className="w-5 h-5" />
							Get Free Consultation
						</button>
						<a
							href="tel:+16572174737"
							className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 hover:scale-105"
							style={{
								borderColor: theme.primary,
								color: theme.primary,
							}}>
							<FaPhone className="w-5 h-5" />
							Call: (657) 217-4737
						</a>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Clients;
