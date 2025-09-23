import { FaCode, FaMobile } from "react-icons/fa";
import ScrollAnimatedSection from "./ScrollAnimatedSection";
import { FaChartLine } from "react-icons/fa6";
import { useTheme } from "../hooks/useTheme";

// Updated Home.tsx Section - "Why Choose Us" with Background Image
export const WhyChooseUsSection: React.FC = () => {
	const { theme, isDark } = useTheme();

	// Dynamic icon color based on theme
	const getIconColor = () => (isDark ? "#ffffff" : theme.primary);

	// Card styling function
	const getCardStyle = () => ({
		backgroundColor: theme.surface,
		borderColor: theme.border,
		color: theme.text,
	});

	const getTextStyle = (type: "primary" | "secondary" = "primary") => ({
		color: type === "primary" ? theme.text : theme.textSecondary,
	});

	return (
		<ScrollAnimatedSection
			id="value-props"
			title="Why Choose Us"
			subtitle="Professional web solutions that grow your business"
			className="py-20 relative"
			animationType="fade-up">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0 z-0 w-full p-10 h-full ">
				<div
					className="absolute inset-0 w-full h-full"
					// style={{
					// 	backgroundImage:
					// 		'url("https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24141555/hire-ecommerce-developer.webp")',
					// 	backgroundSize: "cover",
					// 	backgroundPosition: "max 50% center",
					// 	opacity: 1,
					// }}
				/>
				{/* Theme-based overlay */}
				<div
					className="absolute inset-0"
					style={{
						backgroundColor: isDark
							? `${theme.background}85`
							: `${theme.surface}90`,
					}}
				/>
			</div>

			{/* Content */}
			<div className="relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Custom Solutions */}
					<div
						className="p-8 rounded-xl transition-all duration-300 hover:scale-105 border shadow-lg text-center backdrop-blur-sm"
						style={{
							...getCardStyle(),
							backgroundColor: `${theme.surface}95`,
						}}>
						<div className="flex items-center justify-center w-16 h-16 mx-auto mb-6">
							<FaCode size={32} color={getIconColor()} />
						</div>
						<h3 className="text-2xl font-bold mb-4" style={getTextStyle()}>
							Custom Development
						</h3>
						<p className="mb-6" style={getTextStyle("secondary")}>
							Tailored web solutions built specifically for your business needs
							and workflows.
						</p>
						<ul
							className="space-y-2 text-left"
							style={getTextStyle("secondary")}>
							<li>• React & TypeScript</li>
							<li>• Responsive Design</li>
							<li>• Business Automation</li>
						</ul>
					</div>

					{/* Mobile-First */}
					<div
						className="p-8 rounded-xl transition-all duration-300 hover:scale-105 border shadow-lg text-center backdrop-blur-sm"
						style={{
							...getCardStyle(),
							backgroundColor: `${theme.surface}95`,
						}}>
						<div className="flex items-center justify-center w-16 h-16 mx-auto mb-6">
							<FaMobile size={32} color={getIconColor()} />
						</div>
						<h3 className="text-2xl font-bold mb-4" style={getTextStyle()}>
							Mobile-First Design
						</h3>
						<p className="mb-6" style={getTextStyle("secondary")}>
							Beautiful, fast-loading websites that work perfectly on all
							devices.
						</p>
						<ul
							className="space-y-2 text-left"
							style={getTextStyle("secondary")}>
							<li>• Cross-Device Compatible</li>
							<li>• Fast Loading Speed</li>
							<li>• Touch-Friendly Interface</li>
						</ul>
					</div>

					{/* Business Growth */}
					<div
						className="p-8 rounded-xl transition-all duration-300 hover:scale-105 border shadow-lg text-center backdrop-blur-sm"
						style={{
							...getCardStyle(),
							backgroundColor: `${theme.surface}95`,
						}}>
						<div className="flex items-center justify-center w-16 h-16 mx-auto mb-6">
							<FaChartLine size={32} color={getIconColor()} />
						</div>
						<h3 className="text-2xl font-bold mb-4" style={getTextStyle()}>
							Business Growth
						</h3>
						<p className="mb-6" style={getTextStyle("secondary")}>
							Solutions that work 24/7 to help your business grow and succeed
							online.
						</p>
						<ul
							className="space-y-2 text-left"
							style={getTextStyle("secondary")}>
							<li>• SEO Optimization</li>
							<li>• Analytics Integration</li>
							<li>• Lead Generation</li>
						</ul>
					</div>
				</div>
			</div>
		</ScrollAnimatedSection>
	);
};
