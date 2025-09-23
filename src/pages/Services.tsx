// pages/Services.tsx - Redesigned with Better Organization and Modern UI
import React from "react";
import Section from "../components/Section";
import { useTheme } from "../context/ThemeContext";
import {
	FaCode,
	FaVideo,
	FaInstagram,
	FaPalette,
	FaRocket,
	FaMobile,
	FaSearch,
	FaChartLine,
	FaShieldAlt,
	FaBolt,
	FaPhone,
	FaEnvelope,
} from "react-icons/fa";

const Services: React.FC = () => {
	const { theme } = useTheme();

	const coreServices = [
		{
			icon: FaCode,
			title: "Web Development",
			subtitle: "Custom websites that convert",
			description:
				"Professional, responsive websites built with modern technologies like React and Next.js.",
			features: [
				"Custom Web Applications",
				"Landing Pages",
				"E-commerce Stores",
				"WordPress Sites",
				"SaaS Platforms",
			],
			color: theme.primary,
			image:
				"https://miro.medium.com/v2/resize:fit:1200/1*ukeF0nYyWCBW0ywBvIMeLA.png",
		},
		{
			icon: FaVideo,
			title: "Video Production",
			subtitle: "Engaging content that converts",
			description:
				"Professional video content optimized for social media platforms and maximum engagement.",
			features: [
				"Social Media Reels",
				"Product Videos",
				"Motion Graphics",
				"Video Editing",
				"Platform Optimization",
			],
			color: "#8b5cf6",
			image:
				"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/152005577/original/2b35d92ebda9d7847097e92b690403bfda10896e/provide-high-quality-video-editing.jpg",
		},
		{
			icon: FaInstagram,
			title: "Social Media Management",
			subtitle: "Build your brand presence",
			description:
				"Complete social media strategy and management to grow your audience and engagement.",
			features: [
				"Content Strategy",
				"Daily Posting",
				"Community Management",
				"Paid Advertising",
				"Analytics & Reporting",
			],
			color: "#06b6d4",
			image:
				"https://miro.medium.com/v2/resize:fit:690/1*kyKNR-h061SBpqtnXhncmg.jpeg",
		},
		{
			icon: FaPalette,
			title: "Design & Branding",
			subtitle: "Visual identity that stands out",
			description:
				"Complete brand identity and UI/UX design services to make your business memorable.",
			features: [
				"Logo Design",
				"Brand Identity",
				"UI/UX Design",
				"Marketing Materials",
				"Social Media Graphics",
			],
			color: "#10b981",
			image:
				"https://i.pinimg.com/736x/89/a4/60/89a460d8509bedd454c8621b6810cce1.jpg",
		},
	];

	const additionalServices = [
		{
			icon: FaSearch,
			title: "SEO Optimization",
			description: "Improve search rankings",
		},
		{
			icon: FaChartLine,
			title: "Analytics Setup",
			description: "Track performance & ROI",
		},
		{
			icon: FaShieldAlt,
			title: "SSL & Security",
			description: "Secure your website",
		},
		{
			icon: FaBolt,
			title: "Performance Optimization",
			description: "Lightning-fast loading",
		},
		{
			icon: FaMobile,
			title: "Mobile Optimization",
			description: "Perfect on all devices",
		},
		{
			icon: FaRocket,
			title: "Hosting & Deployment",
			description: "Reliable hosting solutions",
		},
	];

	return (
		<Section id="services-page" className="pt-32 pb-20">
			<div className="max-w-7xl mx-auto px-6">
				{/* Header */}
				<div className="text-center mb-20">
					<h1 className="text-5xl font-bold mb-6" style={{ color: theme.text }}>
						Our Services
					</h1>
					<p
						className="text-xl max-w-3xl mx-auto leading-relaxed"
						style={{ color: theme.textSecondary }}>
						Everything you need to build, grow, and scale your business online.
						From stunning websites to powerful marketing strategies.
					</p>
				</div>

				{/* Core Services Grid */}
				<div className="grid lg:grid-cols-2 gap-8 mb-20">
					{coreServices.map((service, index) => (
						<div
							key={index}
							className="group rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] overflow-hidden"
							style={{
								backgroundColor: theme.surface,
								borderColor: theme.border,
							}}>
							{/* Service Image */}
							<div className="relative h-48 overflow-hidden">
								<img
									src={service.image}
									alt={service.title}
									className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
									style={{ filter: "brightness(0.8)" }}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
								<div
									className="absolute top-4 left-4 p-3 rounded-xl"
									style={{
										backgroundColor: `${service.color}20`,
										backdropFilter: "blur(10px)",
									}}>
									<service.icon
										className="w-6 h-6"
										style={{ color: service.color }}
									/>
								</div>
							</div>

							<div className="p-8">
								{/* Service Header */}
								<div className="mb-6">
									<h3
										className="text-2xl font-bold mb-2"
										style={{ color: theme.text }}>
										{service.title}
									</h3>
									<p
										className="text-lg font-medium"
										style={{ color: service.color }}>
										{service.subtitle}
									</p>
								</div>

								{/* Description */}
								<p
									className="text-lg mb-6 leading-relaxed"
									style={{ color: theme.textSecondary }}>
									{service.description}
								</p>

								{/* Features */}
								<div className="space-y-3 mb-8">
									{service.features.map((feature, featureIndex) => (
										<div key={featureIndex} className="flex items-center gap-3">
											<div
												className="w-2 h-2 rounded-full"
												style={{ backgroundColor: service.color }}
											/>
											<span style={{ color: theme.text }}>{feature}</span>
										</div>
									))}
								</div>

								{/* CTA Button */}
								<button
									className="w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
									style={{
										backgroundColor: service.color,
										color: "white",
									}}>
									Get Started
								</button>
							</div>
						</div>
					))}
				</div>

				{/* Additional Services */}
				<div className="mb-20">
					<div className="text-center mb-12">
						<h2
							className="text-3xl font-bold mb-4"
							style={{ color: theme.text }}>
							Additional Features & Services
						</h2>
						<p style={{ color: theme.textSecondary }}>
							Everything you need for a complete digital presence
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{additionalServices.map((service, index) => (
							<div
								key={index}
								className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
								style={{
									backgroundColor: theme.surface,
									borderColor: theme.border,
								}}>
								<div className="flex items-center gap-4 mb-3">
									<div
										className="p-3 rounded-lg"
										style={{ backgroundColor: `${theme.primary}15` }}>
										<service.icon
											className="w-5 h-5"
											style={{ color: theme.primary }}
										/>
									</div>
									<div>
										<h4 className="font-semibold" style={{ color: theme.text }}>
											{service.title}
										</h4>
										<p
											className="text-sm"
											style={{ color: theme.textSecondary }}>
											{service.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Package Section */}
				<div
					className="p-12 rounded-3xl border text-center mb-20"
					style={{
						backgroundColor: theme.surface,
						borderColor: theme.border,
					}}>
					<h2 className="text-3xl font-bold mb-4" style={{ color: theme.text }}>
						Choose Your Package
					</h2>
					<p className="text-lg mb-8" style={{ color: theme.textSecondary }}>
						Custom solutions tailored to your business needs with unlimited
						revisions included
					</p>

					<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						<div
							className="p-8 rounded-2xl border"
							style={{
								backgroundColor: theme.background,
								borderColor: theme.border,
							}}>
							<h3
								className="text-xl font-bold mb-4"
								style={{ color: theme.text }}>
								Starter Package
							</h3>
							<p
								className="text-sm mb-6"
								style={{ color: theme.textSecondary }}>
								Perfect for small businesses and startups
							</p>
							<div className="space-y-3 mb-6">
								<div className="flex items-center gap-3">
									<div
										className="w-2 h-2 rounded-full"
										style={{ backgroundColor: theme.primary }}
									/>
									<span className="text-sm" style={{ color: theme.text }}>
										Landing Page or Small Website
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div
										className="w-2 h-2 rounded-full"
										style={{ backgroundColor: theme.primary }}
									/>
									<span className="text-sm" style={{ color: theme.text }}>
										Mobile Responsive Design
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div
										className="w-2 h-2 rounded-full"
										style={{ backgroundColor: theme.primary }}
									/>
									<span className="text-sm" style={{ color: theme.text }}>
										Basic SEO Setup
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div
										className="w-2 h-2 rounded-full"
										style={{ backgroundColor: theme.primary }}
									/>
									<span
										className="text-sm font-semibold"
										style={{ color: theme.primary }}>
										Unlimited Revisions
									</span>
								</div>
							</div>
						</div>

						<div
							className="p-8 rounded-2xl border-2 relative overflow-hidden transform scale-105"
							style={{
								backgroundColor: theme.surface,
								borderColor: theme.primary,
							}}>
							<div
								className="absolute top-0 right-0 px-4 py-2 text-xs font-semibold text-white"
								style={{ backgroundColor: theme.primary }}>
								Most Popular
							</div>
							<h3
								className="text-xl font-bold mb-4"
								style={{ color: theme.text }}>
								Growth Package
							</h3>
							<p
								className="text-sm mb-6"
								style={{ color: theme.textSecondary }}>
								Complete solution for growing businesses
							</p>
							<div className="space-y-3 mb-6">
								<div className="flex items-center gap-3">
									<div
										className="w-2 h-2 rounded-full"
										style={{ backgroundColor: theme.primary }}
									/>
									<span className="text-sm" style={{ color: theme.text }}>
										Multi-page Website + Blog
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div
										className="w-2 h-2 rounded-full"
										style={{ backgroundColor: theme.primary }}
									/>
									<span className="text-sm" style={{ color: theme.text }}>
										Advanced SEO & Analytics
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div
										className="w-2 h-2 rounded-full"
										style={{ backgroundColor: theme.primary }}
									/>
									<span className="text-sm" style={{ color: theme.text }}>
										Social Media Integration
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div
										className="w-2 h-2 rounded-full"
										style={{ backgroundColor: theme.primary }}
									/>
									<span className="text-sm" style={{ color: theme.text }}>
										Content Management System
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div
										className="w-2 h-2 rounded-full"
										style={{ backgroundColor: theme.primary }}
									/>
									<span
										className="text-sm font-semibold"
										style={{ color: theme.primary }}>
										Unlimited Revisions
									</span>
								</div>
							</div>
						</div>

						<div
							className="p-8 rounded-2xl border"
							style={{
								backgroundColor: theme.background,
								borderColor: theme.border,
							}}>
							<h3
								className="text-xl font-bold mb-4"
								style={{ color: theme.text }}>
								Enterprise Package
							</h3>
							<p
								className="text-sm mb-6"
								style={{ color: theme.textSecondary }}>
								Advanced solutions for established businesses
							</p>
							<div className="space-y-3 mb-6">
								<div className="flex items-center gap-3">
									<div
										className="w-2 h-2 rounded-full"
										style={{ backgroundColor: theme.primary }}
									/>
									<span className="text-sm" style={{ color: theme.text }}>
										Custom Web Application
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div
										className="w-2 h-2 rounded-full"
										style={{ backgroundColor: theme.primary }}
									/>
									<span className="text-sm" style={{ color: theme.text }}>
										E-commerce Integration
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div
										className="w-2 h-2 rounded-full"
										style={{ backgroundColor: theme.primary }}
									/>
									<span className="text-sm" style={{ color: theme.text }}>
										Advanced Features & APIs
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div
										className="w-2 h-2 rounded-full"
										style={{ backgroundColor: theme.primary }}
									/>
									<span className="text-sm" style={{ color: theme.text }}>
										Priority Support
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div
										className="w-2 h-2 rounded-full"
										style={{ backgroundColor: theme.primary }}
									/>
									<span
										className="text-sm font-semibold"
										style={{ color: theme.primary }}>
										Unlimited Revisions
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Special Offer */}
					<div
						className="mt-12 p-6 rounded-2xl border-2"
						style={{
							backgroundColor: `${theme.primary}10`,
							borderColor: theme.primary,
						}}>
						<h3
							className="text-2xl font-bold mb-3"
							style={{ color: theme.primary }}>
							Special Referral Offer
						</h3>
						<p className="text-lg" style={{ color: theme.text }}>
							Bring a referral and get{" "}
							<span className="font-bold">50% OFF</span> your package
						</p>
						<p className="text-sm mt-2" style={{ color: theme.textSecondary }}>
							Both you and your referral benefit from this amazing discount
						</p>
					</div>
				</div>

				{/* Call to Action */}
				<div
					className="p-12 rounded-3xl text-center border"
					style={{
						background: `linear-gradient(135deg, ${theme.primary}10, ${theme.surface})`,
						borderColor: theme.border,
					}}>
					<h2 className="text-4xl font-bold mb-6" style={{ color: theme.text }}>
						Ready to Transform Your Business?
					</h2>
					<p
						className="text-xl mb-8 max-w-2xl mx-auto"
						style={{ color: theme.textSecondary }}>
						Let's discuss your vision and create a comprehensive digital
						strategy that drives real results for your business.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="tel:+16572174737"
							className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-white hover:scale-[1.05]"
							style={{
								backgroundColor: theme.primary,
							}}>
							<FaPhone className="w-5 h-5" />
							Call: (657) 217-4737
						</a>
						<a
							href="mailto:support@bluesproutagency.com"
							className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 hover:scale-[1.05]"
							style={{
								borderColor: theme.primary,
								color: theme.primary,
								backgroundColor: "transparent",
							}}>
							<FaEnvelope className="w-5 h-5" />
							Email Us
						</a>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Services;
