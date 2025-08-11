import { AnimatedCard } from "../ui/AnimatedCard";
import { SectionHeader } from "../ui/SectionHeader";
import { StatCard } from "../ui/StatCard";

// components/about/ImpactCard.tsx
interface ImpactCardProps {
	isDark?: boolean;
	stats?: Array<{
		value: string;
		label: string;
		color: "purple" | "cyan" | "pink" | "green";
	}>;
}

export const ImpactCard: React.FC<ImpactCardProps> = ({
	isDark = false,
	stats = [
		{ value: "500+", label: "Happy Clients", color: "purple" },
		{ value: "3+", label: "Years", color: "cyan" },
		{ value: "100%", label: "Satisfaction", color: "pink" },
		{ value: "24/7", label: "Support", color: "green" },
	],
}) => {
	const gradientClasses = isDark
		? "bg-gradient-to-br from-teal-900/50 to-green-900/50 border border-teal-700"
		: "bg-gradient-to-br from-teal-100 to-green-100 border border-teal-200";

	return (
		<AnimatedCard
			rotation="left"
			gradient={gradientClasses}
			isDark={isDark}
			animationDelay="0.4s">
			<div
				className={`relative mb-6 p-2 rounded-xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-300 ${
					isDark ? "bg-gray-700" : "bg-white"
				}`}>
				<img
					src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=300&h=150&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.3"
					alt="Success and growth"
					className="w-full h-24 object-cover rounded-lg"
				/>
				<div
					className={`text-center mt-1 text-xs ${
						isDark ? "text-gray-400" : "text-gray-600"
					}`}>
					"Growing together" 🌱
				</div>
				<div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
			</div>

			<div className="space-y-4">
				<SectionHeader title="Our Impact" icon="❤️" isDark={isDark} />

				<div className="grid grid-cols-2 gap-3">
					{stats.map((stat, index) => (
						<StatCard
							key={index}
							value={stat.value}
							label={stat.label}
							color={stat.color}
							isDark={isDark}
						/>
					))}
				</div>
			</div>
		</AnimatedCard>
	);
};
