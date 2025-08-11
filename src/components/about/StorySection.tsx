import { AnimatedCard } from "../ui/AnimatedCard";
import { TagList } from "../ui/TagList";

// components/about/StorySection.tsx
interface StorySectionProps {
	isDark?: boolean;
	title?: string;
	description?: string;
	tags?: Array<{ text: string; color?: string }>;
}

export const StorySection: React.FC<StorySectionProps> = ({
	isDark = false,
	title = "Growing Digital Dreams",
	description = "Every website we build, every brand we help grow, and every small business we empower is a step toward our vision of a more connected, thriving digital community. We don't just build websites – we build relationships, dreams, and futures.",
	tags = [
		{ text: "Innovation" },
		{ text: "Growth" },
		{ text: "Community" },
		{ text: "Excellence" },
	],
}) => {
	const gradientClasses = isDark
		? "bg-gradient-to-r from-orange-900/50 to-pink-900/50 border border-orange-700"
		: "bg-gradient-to-r from-orange-100 to-pink-100 border border-orange-200";

	return (
		<AnimatedCard
			rotation="none"
			gradient={gradientClasses}
			isDark={isDark}
			className="hover:scale-105"
			animationDelay="0.6s">
			<div className="text-center space-y-4">
				<div className="flex justify-center items-center space-x-3 mb-4">
					<span className="text-2xl">🚀</span>
					<h3
						className={`text-2xl font-bold ${
							isDark ? "text-white" : "text-gray-900"
						}`}>
						{title}
					</h3>
					<span className="text-2xl">✨</span>
				</div>

				<p
					className={`text-lg leading-relaxed max-w-4xl mx-auto ${
						isDark ? "text-gray-300" : "text-gray-700"
					}`}>
					{description}
				</p>

				<TagList tags={tags} isDark={isDark} className="mt-6" />
			</div>
		</AnimatedCard>
	);
};
