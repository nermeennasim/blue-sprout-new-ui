import { AnimatedCard } from "../ui/AnimatedCard";
import { PolaroidCard } from "../ui/PolaroidCard";
import { SectionHeader } from "../ui/SectionHeader";

// components/about/MissionCard.tsx
interface MissionCardProps {
	isDark?: boolean;
}

export const MissionCard: React.FC<MissionCardProps> = ({ isDark = false }) => {
	return (
		<AnimatedCard rotation="left" isDark={isDark}>
			<PolaroidCard
				src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.3"
				alt="Team collaboration"
				caption='"Building dreams together" ✨'
				size="large"
				rotation="left"
				isDark={isDark}
				className="mb-6"
			/>

			<SectionHeader
				title="Our Mission"
				subtitle="Founded with the mission to make professional web development accessible to businesses of all sizes, we combine creativity with technical expertise to deliver outstanding results."
				icon="🎯"
				isDark={isDark}
			/>
		</AnimatedCard>
	);
};
