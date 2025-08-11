// components/ui/TagList.tsx
interface Tag {
	text: string;
	color?: string;
}

interface TagListProps {
	tags: Tag[];
	isDark?: boolean;
	className?: string;
}

export const TagList: React.FC<TagListProps> = ({
	tags,
	isDark = false,
	className = "",
}) => {
	return (
		<div className={`flex flex-wrap justify-center gap-3 ${className}`}>
			{tags.map((tag, index) => (
				<span
					key={index}
					className={`px-4 py-2 rounded-full text-sm font-medium transform hover:scale-110 transition-transform ${
						isDark
							? "bg-orange-800/50 text-orange-300"
							: "bg-orange-200 text-orange-800"
					}`}>
					{tag.text}
				</span>
			))}
		</div>
	);
};
