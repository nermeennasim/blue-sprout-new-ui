// pages/LoadingTest.tsx - For testing the Loading component
import React, { useState } from "react";
import Loading from "./Loading";
import { useTheme } from "../context/ThemeContext";

const LoadingTest: React.FC = () => {
	const { theme, isDark, toggleTheme } = useTheme();
	const [showLoading, setShowLoading] = useState(true);

	if (showLoading) {
		return <Loading />;
	}

	return (
		<div
			className="min-h-screen p-8 flex flex-col items-center justify-center"
			style={{ backgroundColor: theme.background, color: theme.text }}>
			<h1 className="text-3xl font-bold mb-8">Loading Component Test</h1>

			<div className="space-y-4">
				<button
					onClick={() => setShowLoading(true)}
					className="px-6 py-3 rounded-lg text-white font-semibold"
					style={{ backgroundColor: theme.primary }}>
					Show Loading Component
				</button>

				<button
					onClick={toggleTheme}
					className="px-6 py-3 rounded-lg border font-semibold"
					style={{
						borderColor: theme.border,
						color: theme.text,
						backgroundColor: theme.surface,
					}}>
					Toggle Theme ({isDark ? "Dark" : "Light"})
				</button>
			</div>

			<div className="mt-8 text-center">
				<h3 className="text-lg font-semibold mb-4">Test Instructions:</h3>
				<ul className="text-left space-y-2 max-w-md">
					<li>• Click "Show Loading" to see the component</li>
					<li>• Test both light and dark themes</li>
					<li>• Check animations and colors</li>
					<li>• Verify responsiveness</li>
				</ul>
			</div>
		</div>
	);
};

export default LoadingTest;
