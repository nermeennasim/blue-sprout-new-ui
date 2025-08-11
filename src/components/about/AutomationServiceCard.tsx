import { AnimatedCard } from "../ui/AnimatedCard";
import { SectionHeader } from "../ui/SectionHeader";
import { ServiceItem } from "../ui/ServiceItem";
import type { ServicesCardProps } from "./ServicesCard";

// Alternative: Separate Automation-Focused Component
export const AutomationServicesCard: React.FC<ServicesCardProps> = ({
	isDark = false,
}) => {
	const automationServices = [
		{ icon: "🤖", text: "Customer Relationship Management (CRM) Automation" },
		{ icon: "💰", text: "Automated Payment Processing & Recurring Billing" },
		{ icon: "📅", text: "Smart Appointment Booking & Calendar Integration" },
		{ icon: "📄", text: "Invoice Generation & Automated Follow-ups" },
		{ icon: "📧", text: "Email Marketing Automation & Sequences" },
		{ icon: "📊", text: "Real-time Business Analytics & Reporting" },
		{ icon: "🔔", text: "Automated Customer Notifications & Reminders" },
		{ icon: "📝", text: "Lead Capture & Nurturing Workflows" },
		{ icon: "🔄", text: "Inventory Management & Order Processing" },
		{ icon: "📞", text: "Automated Customer Support & Chatbots" },
	];

	const gradientClasses = isDark
		? "bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-700"
		: "bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200";

	return (
		<AnimatedCard
			rotation="left"
			gradient={gradientClasses}
			isDark={isDark}
			animationDelay="0.4s">
			<div
				className={`relative mb-6 p-2 rounded-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300 ${
					isDark ? "bg-gray-700" : "bg-white"
				}`}>
				<img
					src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=200&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.4"
					alt="Business automation dashboard"
					className="w-full h-32 object-cover rounded-lg"
				/>
				<div
					className={`text-center mt-1 text-xs ${
						isDark ? "text-gray-400" : "text-gray-600"
					}`}>
					"Your business, fully automated" ⚡
				</div>
				<div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full shadow-lg animate-pulse"></div>
			</div>

			<div className="space-y-4">
				<SectionHeader
					title="Business Automation"
					icon="⚡"
					subtitle="Eliminate repetitive tasks and focus on growing your business"
					isDark={isDark}
				/>

				<div className="space-y-2">
					{automationServices.map((service, index) => (
						<ServiceItem
							key={index}
							icon={service.icon}
							text={service.text}
							isDark={isDark}
						/>
					))}
				</div>

				{/* Target Audience Highlight */}
				<div
					className={`mt-4 p-3 rounded-lg ${
						isDark ? "bg-indigo-900/30" : "bg-indigo-50"
					}`}>
					<h5
						className={`text-sm font-semibold mb-2 ${
							isDark ? "text-indigo-300" : "text-indigo-700"
						}`}>
						Perfect For:
					</h5>
					<div className="grid grid-cols-2 gap-2 text-xs">
						{[
							"🚀 Entrepreneurs",
							"💼 Business Professionals",
							"🎯 Freelancers",
							"🔨 Contractors",
						].map((target, index) => (
							<div
								key={index}
								className={`${isDark ? "text-indigo-200" : "text-indigo-600"}`}>
								{target}
							</div>
						))}
					</div>
				</div>
			</div>
		</AnimatedCard>
	);
};
