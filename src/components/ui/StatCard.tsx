// components/ui/StatCard.tsx
interface StatCardProps {
	value: string;
	label: string;
	color?: "purple" | "cyan" | "pink" | "green";
	isDark?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
	value,
	label,
	color = "purple",
	isDark = false,
}) => {
	const colorClasses = {
		purple: isDark ? "text-purple-400" : "text-purple-600",
		cyan: isDark ? "text-cyan-400" : "text-cyan-600",
		pink: isDark ? "text-pink-400" : "text-pink-600",
		green: isDark ? "text-green-400" : "text-green-600",
	};

	return (
		<div className="text-center">
			<div className={`text-2xl font-bold ${colorClasses[color]}`}>{value}</div>
			<div className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
				{label}
			</div>
		</div>
	);
};
