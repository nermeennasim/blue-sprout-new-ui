// components/ui/SectionHeader.tsx
interface SectionHeaderProps {
	title: string;
	subtitle?: string;
	icon?: React.ReactNode;
	isDark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
	title,
	subtitle,
	icon,
	isDark = false,
}) => {
	return (
		<div className="space-y-4">
			<h3
				className={`text-xl font-bold flex items-center space-x-2 ${
					isDark ? "text-white" : "text-gray-900"
				}`}>
				{icon && <span>{icon}</span>}
				<span>{title}</span>
			</h3>
			{subtitle && (
				<p
					className={`text-sm leading-relaxed ${
						isDark ? "text-gray-300" : "text-gray-700"
					}`}>
					{subtitle}
				</p>
			)}
		</div>
	);
};
