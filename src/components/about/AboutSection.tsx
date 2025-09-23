// components/about/AboutSection.tsx - TRUE Left-Right Image-Text Layout
import React from "react";
import { useTheme } from "../../context/ThemeContext";

interface AboutSectionProps {
	isDark?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
	isDark = false,
}) => {
	const { theme } = useTheme();

	return (
		<section className="py-20">
			<div className="max-w-7xl mx-auto px-6 space-y-32">
				{/* 1. Mission Section - Image Left, Text Right */}
				<div className="flex flex-col lg:flex-row items-center gap-16">
					{/* Image Side - Left */}
					<div className="lg:w-1/2">
						<div className="relative">
							<div
								className="w-full h-96 rounded-r-full overflow-hidden shadow-2xl"
								style={{
									background: `linear-gradient(45deg, ${theme.primary}, ${theme.accent})`,
									padding: "4px",
								}}>
								<div className="w-full h-full rounded-r-full overflow-hidden">
									<img
										src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
										alt="Team collaboration representing our mission"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
							{/* Floating badge */}
							<div
								className="absolute -bottom-4 left-8 px-6 py-3 rounded-full shadow-lg"
								style={{ backgroundColor: theme.primary, color: "white" }}>
								<span className="font-bold">Founded 2020</span>
							</div>
						</div>
					</div>

					{/* Text Side - Right */}
					<div className="lg:w-1/2 space-y-6">
						<h2 className="text-5xl font-bold" style={{ color: theme.text }}>
							Our Mission
						</h2>
						<div
							className="w-24 h-1 rounded"
							style={{ backgroundColor: theme.primary }}></div>

						<div className="space-y-4 text-lg leading-relaxed">
							<p style={{ color: theme.textSecondary }}>
								Founded in{" "}
								<strong style={{ color: theme.primary }}>2020</strong>, our
								mission is to help businesses grow online at affordable prices.
								We believe every business deserves a professional digital
								presence without breaking the bank.
							</p>

							<p style={{ color: theme.textSecondary }}>
								<strong style={{ color: theme.text }}>
									You do what you do best
								</strong>
								, and let us help you grow online by creating reliable and
								accessible W3 standard websites, modern AI-powered website
								design and development.
							</p>

							<p style={{ color: theme.textSecondary }}>
								We don't just create generic websites - we craft{" "}
								<strong style={{ color: theme.primary }}>
									customized and personalized websites
								</strong>{" "}
								tailored specifically for your business needs.
							</p>
						</div>

						<div className="flex flex-wrap gap-4 mt-8">
							{[
								"Affordable Pricing",
								"W3 Standards",
								"AI-Powered",
								"Custom Solutions",
							].map((item, index) => (
								<span
									key={index}
									className="px-4 py-2 rounded-full text-sm font-semibold"
									style={{
										backgroundColor: `${theme.primary}20`,
										color: theme.primary,
										border: `1px solid ${theme.primary}30`,
									}}>
									{item}
								</span>
							))}
						</div>
					</div>
				</div>

				{/* 2. Services Section - Text Left, Image Right */}
				<div className="flex flex-col lg:flex-row items-center gap-16">
					{/* Text Side - Left */}
					<div className="lg:w-1/2 space-y-8">
						<div>
							<h2 className="text-5xl font-bold" style={{ color: theme.text }}>
								What We Specialize In
							</h2>
							<div
								className="w-24 h-1 rounded mt-4"
								style={{ backgroundColor: theme.accent }}></div>
						</div>

						<p className="text-lg" style={{ color: theme.textSecondary }}>
							Transforming businesses through intelligent web solutions and
							automation that actually work for your daily operations.
						</p>

						{/* Services List */}
						<div className="space-y-6">
							{/* Web Development Category */}
							<div>
								<h4
									className="text-xl font-bold mb-4 flex items-center gap-2"
									style={{ color: theme.text }}>
									<span>🎯</span> Web Development & Design
								</h4>
								<div className="space-y-2 ml-6">
									{[
										"Custom Web Design & Development",
										"Responsive Mobile-First Applications",
										"Professional UI/UX Design",
									].map((service, index) => (
										<div key={index} className="flex items-center gap-3">
											<div
												className="w-2 h-2 rounded-full"
												style={{ backgroundColor: theme.primary }}></div>
											<span style={{ color: theme.textSecondary }}>
												{service}
											</span>
										</div>
									))}
								</div>
							</div>

							{/* Business Automation Category */}
							<div>
								<h4
									className="text-xl font-bold mb-4 flex items-center gap-2"
									style={{ color: theme.text }}>
									<span>⚡</span> Business Process Automation
								</h4>
								<div className="space-y-2 ml-6">
									{[
										"Automated Customer Management Systems",
										"Payment Processing & Billing Automation",
										"Smart Booking & Scheduling Systems",
										"Custom Business Workflow Solutions",
									].map((service, index) => (
										<div key={index} className="flex items-center gap-3">
											<div
												className="w-2 h-2 rounded-full"
												style={{ backgroundColor: theme.accent }}></div>
											<span style={{ color: theme.textSecondary }}>
												{service}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Image Side - Right */}
					<div className="lg:w-1/2">
						<div className="relative">
							<div
								className="w-full h-96 rounded-l-full overflow-hidden shadow-2xl"
								style={{
									background: `linear-gradient(45deg, ${theme.accent}, ${theme.success})`,
									padding: "4px",
								}}>
								<div className="w-full h-full rounded-l-full overflow-hidden">
									<img
										src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop"
										alt="Modern workspace with automation tools"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
							{/* Floating badge */}
							<div
								className="absolute -bottom-4 right-8 px-6 py-3 rounded-full shadow-lg"
								style={{ backgroundColor: theme.accent, color: "white" }}>
								<span className="font-bold">500+ Projects</span>
							</div>
						</div>
					</div>
				</div>

				{/* 3. Impact Section - Image Left, Text Right */}
				<div className="flex flex-col lg:flex-row items-center gap-16">
					{/* Image Side - Left */}
					<div className="lg:w-1/2">
						<div className="relative">
							<div
								className="w-full h-80 rounded-r-full overflow-hidden shadow-2xl"
								style={{
									background: `linear-gradient(45deg, ${theme.success}, #10b981)`,
									padding: "4px",
								}}>
								<div className="w-full h-full rounded-r-full overflow-hidden">
									<img
										src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop"
										alt="Business growth and success metrics"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
							{/* Floating badge */}
							<div
								className="absolute -bottom-4 left-8 px-6 py-3 rounded-full shadow-lg"
								style={{ backgroundColor: theme.success, color: "white" }}>
								<span className="font-bold">100% Satisfaction</span>
							</div>
						</div>
					</div>

					{/* Text Side - Right */}
					<div className="lg:w-1/2 space-y-6">
						<h2 className="text-5xl font-bold" style={{ color: theme.text }}>
							Our Impact
						</h2>
						<div
							className="w-24 h-1 rounded"
							style={{ backgroundColor: theme.success }}></div>

						<p className="text-lg" style={{ color: theme.textSecondary }}>
							Since 2020, we've helped hundreds of businesses establish their
							digital presence and grow their revenue through strategic web
							solutions.
						</p>

						{/* Stats */}
						<div className="grid grid-cols-2 gap-6 mt-8">
							{[
								{ number: "500+", label: "Happy Clients" },
								{ number: "5+", label: "Years Experience" },
								{ number: "100%", label: "Client Satisfaction" },
								{ number: "24/7", label: "Support Available" },
							].map((stat, index) => (
								<div key={index} className="text-center">
									<div
										className="text-4xl font-bold"
										style={{ color: theme.success }}>
										{stat.number}
									</div>
									<div
										className="text-sm font-medium"
										style={{ color: theme.textSecondary }}>
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* 4. Story Section - Full Width */}
				<div
					className="text-center py-20 px-12 rounded-3xl"
					style={{
						background: isDark
							? `linear-gradient(135deg, ${theme.surface}dd, ${theme.background}dd)`
							: `linear-gradient(135deg, ${theme.primary}15, ${theme.accent}15)`,
						border: `1px solid ${theme.border}`,
					}}>
					<h2 className="text-5xl font-bold mb-8" style={{ color: theme.text }}>
						Growing Digital Dreams
					</h2>

					<p
						className="text-xl leading-relaxed max-w-4xl mx-auto mb-8"
						style={{ color: theme.textSecondary }}>
						Every website we build, every brand we help grow, and every small
						business we empower is a step toward our vision of a more connected,
						thriving digital community. We don't just build websites – we build
						relationships, dreams, and futures.
					</p>

					<div className="flex flex-wrap justify-center gap-4">
						{["Innovation", "Growth", "Community", "Excellence"].map(
							(tag, index) => (
								<span
									key={index}
									className="px-6 py-3 rounded-full text-lg font-semibold"
									style={{
										backgroundColor: `${theme.primary}20`,
										color: theme.primary,
										border: `2px solid ${theme.primary}30`,
									}}>
									{tag}
								</span>
							)
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
