import { AutomationServicesCard } from "./AutomationServiceCard";
import { ImpactCard } from "./ImpactCard";
import { MissionCard } from "./MissionCard";
import { ServicesCard } from "./ServicesCard";
import { StorySection } from "./StorySection";

// components/about/AboutSection.tsx - Main component that combines everything
interface AboutSectionProps {
	isDark?: boolean;
	customServices?: Array<{ icon: string; text: string }>;
	customStats?: Array<{
		value: string;
		label: string;
		color: "purple" | "cyan" | "pink" | "green";
	}>;
	customStory?: {
		title?: string;
		description?: string;
		tags?: Array<{ text: string; color?: string }>;
	};
}

export const AboutSection: React.FC<AboutSectionProps> = ({
	isDark = false,
	customServices,
	customStats,
	customStory,
}) => {
	return (
		<div className="space-y-8">
			{/* Three Cards Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				<MissionCard isDark={isDark} />
				<ServicesCard isDark={isDark} services={customServices} />
				<ImpactCard isDark={isDark} stats={customStats} />
			</div>

			{/* Story Section */}
			<StorySection isDark={isDark} {...customStory} />
		</div>
	);
};

// Usage in AboutSection.tsx - Update the grid to accommodate wider services card
export const AboutSectionUpdated: React.FC<{
	isDark?: boolean;
	useAutomationCard?: boolean;
}> = ({ isDark = false, useAutomationCard = false }) => {
	return (
		<div className="space-y-8">
			{/* Adjusted Grid for Services Card */}
			<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
				<div className="lg:col-span-2">
					<MissionCard isDark={isDark} />
				</div>

				{useAutomationCard ? (
					<>
						<div className="lg:col-span-2">
							<ServicesCard isDark={isDark} />
						</div>
						<div className="lg:col-span-1">
							<AutomationServicesCard isDark={isDark} />
						</div>
					</>
				) : (
					<div className="lg:col-span-3">
						<ServicesCard isDark={isDark} />
					</div>
				)}
			</div>

			{/* Impact and Story sections remain the same */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				<ImpactCard isDark={isDark} />
				<div className="lg:col-span-2">
					<StorySection isDark={isDark} />
				</div>
			</div>
		</div>
	);
};

