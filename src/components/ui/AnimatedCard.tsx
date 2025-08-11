// components/ui/AnimatedCard.tsx
interface AnimatedCardProps {
	children: React.ReactNode;
	rotation?: "left" | "right" | "none";
	gradient?: string;
	border?: string;
	className?: string;
	isDark?: boolean;
	animationDelay?: string;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
	children,
	rotation = "left",
	gradient,
	border,
	className = "",
	isDark = false,
	animationDelay = "0s",
}) => {
	const rotationClasses = {
		left: "rotate-1 hover:rotate-0",
		right: "-rotate-1 hover:rotate-0",
		none: "rotate-0",
	};

	const defaultBg = isDark
		? "bg-gray-800 border border-gray-700"
		: "bg-white border border-gray-200";

	const backgroundClasses = gradient || defaultBg;
	const borderClasses = border || "";

	return (
		<div
			className={`relative transform ${rotationClasses[rotation]} transition-all duration-500 group ${backgroundClasses} ${borderClasses} rounded-3xl p-6 shadow-2xl hover:shadow-3xl ${className}`}
			style={{ animationDelay }}>
			{children}
		</div>
	);
};
