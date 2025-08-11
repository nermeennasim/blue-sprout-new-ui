import { AnimatedCard } from "../ui/AnimatedCard";
import { SectionHeader } from "../ui/SectionHeader";
import { ServiceItem } from "../ui/ServiceItem";

// components/about/ServicesCard.tsx
export interface ServicesCardProps {
	isDark?: boolean;
	services?: Array<{ icon: string; text: string; category?: string }>;
	showPartners?: boolean;
}

export const ServicesCard: React.FC<ServicesCardProps> = ({
	isDark = false,
	showPartners = true,
	services = [
		// Core Web Development & Design
		{ icon: "🎨", text: "Custom Web Design & Development", category: "core" },
		{
			icon: "📱",
			text: "Responsive Mobile-First Applications",
			category: "core",
		},
		{ icon: "🖥️", text: "Professional UI/UX Design", category: "core" },

		// Business Automation (Your Specialty)
		{
			icon: "⚡",
			text: "Automated Customer Management Systems",
			category: "automation",
		},
		{
			icon: "💳",
			text: "Payment Processing Automation",
			category: "automation",
		},
		{
			icon: "📅",
			text: "Smart Booking & Scheduling Systems",
			category: "automation",
		},
		{
			icon: "📄",
			text: "Automated Invoice & Billing Solutions",
			category: "automation",
		},
		{ icon: "🔄", text: "Custom Workflow Automation", category: "automation" },
		{
			icon: "📊",
			text: "Business Analytics & Reporting Dashboards",
			category: "automation",
		},

		// Technical Services
		{
			icon: "🌐",
			text: "SEO & Performance Optimization",
			category: "technical",
		},
		{
			icon: "🛠️",
			text: "Ongoing Maintenance & Support",
			category: "technical",
		},
		{
			icon: "📦",
			text: "E-commerce & Online Store Solutions",
			category: "technical",
		},
		{
			icon: "☁️",
			text: "Cloud Integration & Deployment",
			category: "technical",
		},
	],
}) => {
	const gradientClasses = isDark
		? "bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-700"
		: "bg-gradient-to-br from-purple-100 to-blue-100 border border-purple-200";

	// Group services by category
	const coreServices = services.filter(
		(s) => s.category === "core" || !s.category
	);
	const automationServices = services.filter(
		(s) => s.category === "automation"
	);
	const technicalServices = services.filter((s) => s.category === "technical");

	return (
		<AnimatedCard
			rotation="right"
			gradient={gradientClasses}
			isDark={isDark}
			animationDelay="0.2s"
			className="lg:col-span-2">
			{" "}
			{/* Make it wider to accommodate more content */}
			<div
				className={`relative mb-6 p-2 rounded-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300 ${
					isDark ? "bg-gray-700" : "bg-white"
				}`}>
				<img
					src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.4"
					alt="Automated business solutions workspace"
					className="w-full h-32 object-cover rounded-lg"
				/>
				<div
					className={`text-center mt-1 text-xs ${
						isDark ? "text-gray-400" : "text-gray-600"
					}`}>
					"Automating your business, amplifying your success" 🚀
				</div>
				<div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full shadow-lg"></div>
			</div>
			<div className="space-y-6">
				<SectionHeader
					title="What We Specialize In"
					icon="💡"
					subtitle="Transforming businesses through intelligent web solutions and automation"
					isDark={isDark}
				/>

				{/* Core Web Development */}
				<div className="space-y-3">
					<h4
						className={`text-sm font-semibold uppercase tracking-wide ${
							isDark ? "text-purple-300" : "text-purple-600"
						}`}>
						🎯 Web Development & Design
					</h4>
					<div className="space-y-2 pl-4">
						{coreServices.map((service, index) => (
							<ServiceItem
								key={index}
								icon={service.icon}
								text={service.text}
								isDark={isDark}
							/>
						))}
					</div>
				</div>

				{/* Business Automation - Your Specialty */}
				<div className="space-y-3">
					<h4
						className={`text-sm font-semibold uppercase tracking-wide ${
							isDark ? "text-blue-300" : "text-blue-600"
						}`}>
						⚡ Business Process Automation
					</h4>
					<div className="space-y-2 pl-4">
						{automationServices.map((service, index) => (
							<ServiceItem
								key={index}
								icon={service.icon}
								text={service.text}
								isDark={isDark}
							/>
						))}
					</div>
					<div
						className={`text-xs italic pl-4 ${
							isDark ? "text-gray-400" : "text-gray-600"
						}`}>
						Perfect for entrepreneurs, freelancers, contractors & business
						professionals
					</div>
				</div>

				{/* Technical Services */}
				<div className="space-y-3">
					<h4
						className={`text-sm font-semibold uppercase tracking-wide ${
							isDark ? "text-teal-300" : "text-teal-600"
						}`}>
						🛠️ Technical Excellence
					</h4>
					<div className="space-y-2 pl-4">
						{technicalServices.map((service, index) => (
							<ServiceItem
								key={index}
								icon={service.icon}
								text={service.text}
								isDark={isDark}
							/>
						))}
					</div>
				</div>

				{/* Partnership Section */}
				{showPartners && (
					<div
						className={`mt-6 p-4 rounded-xl border-2 border-dashed ${
							isDark
								? "border-gray-600 bg-gray-800/50"
								: "border-gray-300 bg-gray-50"
						}`}>
						<h4
							className={`text-sm font-semibold mb-2 flex items-center space-x-2 ${
								isDark ? "text-gray-200" : "text-gray-800"
							}`}>
							<span>🤝</span>
							<span>Trusted Partner Network</span>
						</h4>
						<p
							className={`text-xs ${
								isDark ? "text-gray-400" : "text-gray-600"
							}`}>
							We partner with top-tier video editors, graphic designers, and
							social media strategists to provide comprehensive digital
							solutions when you need specialized creative services.
						</p>
						<div className="flex flex-wrap gap-2 mt-3">
							{[
								{ icon: "🎬", text: "Video Production" },
								{ icon: "🎨", text: "Graphic Design" },
								{ icon: "📱", text: "Social Media Strategy" },
							].map((partner, index) => (
								<span
									key={index}
									className={`text-xs px-2 py-1 rounded-full ${
										isDark
											? "bg-purple-900/50 text-purple-300"
											: "bg-purple-100 text-purple-700"
									}`}>
									{partner.icon} {partner.text}
								</span>
							))}
						</div>
					</div>
				)}
			</div>
		</AnimatedCard>
	);
};
