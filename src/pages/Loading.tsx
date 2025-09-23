// components/Loading.tsx - Updated with Meaningful BlueSprout Messaging
import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const Loading: React.FC = () => {
	const { theme, isDark } = useTheme();
	const [messageIndex, setMessageIndex] = useState(0);

	// Meaningful loading messages for BlueSprout Agency
	const loadingMessages = [
		"Preparing your digital experience...",
		"Loading your custom solutions...",
		"Setting up your business dashboard...",
		"Connecting to our automation systems...",
		"Optimizing for your success...",
		"Almost ready to grow your business...",
	];

	// Cycle through messages every 2 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className="flex flex-col items-center justify-center min-h-screen transition-all duration-300"
			style={{
				background: isDark
					? `linear-gradient(135deg, ${theme.background} 0%, ${theme.surface} 100%)`
					: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.surface} 100%)`,
				color: isDark ? theme.text : "white",
			}}>
			{/* Blue Sprout Logo Area */}
			<div className="mb-8">
				<div className="relative">
					{/* Company Logo */}
					<div className="flex justify-center mb-8">
						<img
							src={isDark ? "../icon_dark.png" : "../icon_light.png"}
							alt="Blue Sprout Agency Logo"
							className="h-32 w-auto object-contain animate-pulse"
							onError={(e) => {
								// Fallback if images don't load
								e.currentTarget.style.display = "none";
							}}
						/>
					</div>

					{/* Animated Ring Below Logo */}
					<div className="flex justify-center mb-6">
						<div
							className="w-16 h-16 border-3 rounded-full animate-spin"
							style={{
								borderColor: `${theme.primary}20`,
								borderTopColor: theme.primary,
							}}
						/>
					</div>

					{/* Company Name */}
					<h1
						className="text-3xl font-bold tracking-wider mb-2 text-center"
						style={{ color: isDark ? theme.text : "white" }}>
						Blue Sprout Agency
					</h1>

					<p
						className="text-sm opacity-90 tracking-wide text-center mb-8"
						style={{
							color: isDark ? theme.textSecondary : "rgba(255,255,255,0.9)",
						}}>
						Helping small ideas grow big
					</p>
				</div>
			</div>

			{/* Dynamic Loading Message */}
			<div className="text-center mb-8">
				<p
					className="text-lg font-medium animate-fade-in"
					style={{
						color: isDark ? theme.text : "white",
						minHeight: "1.5rem",
					}}
					key={messageIndex}>
					{loadingMessages[messageIndex]}
				</p>
			</div>

			{/* Progress Indicator */}
			<div className="flex items-center space-x-2 mb-6">
				{[0, 1, 2, 3].map((i) => (
					<div
						key={i}
						className="w-2 h-2 rounded-full animate-bounce"
						style={{
							backgroundColor: isDark ? theme.primary : "white",
							animationDelay: `${i * 0.15}s`,
						}}
					/>
				))}
			</div>

			{/* Loading Bar */}
			<div
				className="w-64 h-1 rounded-full overflow-hidden"
				style={{ backgroundColor: `${theme.primary}20` }}>
				<div
					className="h-full animate-loading-bar rounded-full"
					style={{ backgroundColor: theme.primary }}
				/>
			</div>

			{/* Animated Styles */}
			<style>{`
				@keyframes spin {
					0% { transform: rotate(0deg); }
					100% { transform: rotate(360deg); }
				}
				
				@keyframes bounce {
					0%, 80%, 100% { 
						transform: translateY(0); 
						opacity: 0.6;
					}
					40% { 
						transform: translateY(-8px); 
						opacity: 1;
					}
				}
				
				@keyframes pulse {
					0%, 100% { opacity: 1; transform: scale(1); }
					50% { opacity: 0.7; transform: scale(1.1); }
				}

				@keyframes loading-bar {
					0% { width: 0%; }
					50% { width: 70%; }
					100% { width: 100%; }
				}

				@keyframes fade-in {
					0% { opacity: 0; transform: translateY(10px); }
					100% { opacity: 1; transform: translateY(0); }
				}
				
				.animate-spin {
					animation: spin 1.5s linear infinite;
				}
				
				.animate-bounce {
					animation: bounce 1.4s ease-in-out infinite;
				}
				
				.animate-pulse {
					animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
				}

				.animate-loading-bar {
					animation: loading-bar 3s ease-in-out infinite;
				}

				.animate-fade-in {
					animation: fade-in 0.5s ease-out;
				}
			`}</style>
		</div>
	);
};

export default Loading;
