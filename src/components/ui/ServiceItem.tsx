// components/ui/ServiceItem.tsx
interface ServiceItemProps {
	icon: string;
	text: string;
	isDark?: boolean;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({
	icon,
	text,
	isDark = false,
}) => {
	return (
		<div className="flex items-center space-x-2">
			<span className="text-sm">{icon}</span>
			<span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
				{text}
			</span>
		</div>
	);
};
