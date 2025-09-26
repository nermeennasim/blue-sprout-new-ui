// contexts/ThemeContext.tsx - Updated with new dark blue color
import React, { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { useTheme } from "../hooks/useTheme";

// Theme configuration with updated dark blue
const themeConfig = {
	light: {
		// Light theme colors (unchanged)
		primary: "#29abe2", // Blue
		secondary: "#19183B", // Updated Dark Purple-Blue
		background: "#ffffff", // White
		surface: "#f8fafc", // Light Gray
		text: "#19183B", // Updated Dark Purple-Blue Text
		textSecondary: "#64748b", // Gray Text
		border: "#e2e8f0", // Light Border
		accent: "#29abe2", // Blue Accent
		success: "#10b981", // Green
		warning: "#f59e0b", // Yellow
		error: "#ef4444", // Red
	},
	dark: {
		// Dark theme colors with updated rich purple-blue
		primary: "#29abe2", // Blue (keeping this)
		secondary: "#19183B", // Updated: rich dark purple-blue
		background: "#19183B", // Updated: was #262261, now distinctive purple-blue
		surface: "#0F0E24", // Updated: darker variation of your new purple-blue
		text: "#ffffff", // White Text
		textSecondary: "#cbd5e1", // Light Gray Text
		border: "#29abe2", // Blue Border (keeping the accent blue)
		accent: "#29abe2", // Blue Accent (keeping this)
		success: "#34d399", // Light Green
		warning: "#fbbf24", // Light Yellow
		error: "#f87171", // Light Red
	},
} as const;

// Theme type definitions
export type Theme = { [K in keyof typeof themeConfig.dark]: string };
export type ThemeMode = "light" | "dark";

export { themeConfig, useTheme };

export interface ThemeContextType {
	theme: Theme;
	themeMode: ThemeMode;
	isDark: boolean;
	toggleTheme: () => void;
	setThemeMode: (mode: ThemeMode) => void;
}

// Create context
export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined
);

// Theme provider component
export interface ThemeProviderProps {
	children: ReactNode;
	defaultTheme?: ThemeMode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
	children,
	defaultTheme = "dark",
}) => {
	const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
		// Check localStorage first, then default to dark theme
		if (typeof window !== "undefined") {
			const savedTheme = localStorage.getItem("bluesprout-theme") as ThemeMode;
			return savedTheme || defaultTheme;
		}
		return defaultTheme;
	});

	// Get current theme object
	const theme = themeConfig[themeMode];
	const isDark = themeMode === "dark";

	// Persist theme to localStorage
	useEffect(() => {
		localStorage.setItem("bluesprout-theme", themeMode);

		// Apply theme to document root for CSS custom properties
		const root = document.documentElement;

		// Set CSS custom properties for the current theme
		root.style.setProperty("--color-primary", theme.primary);
		root.style.setProperty("--color-secondary", theme.secondary);
		root.style.setProperty("--color-background", theme.background);
		root.style.setProperty("--color-surface", theme.surface);
		root.style.setProperty("--color-text", theme.text);
		root.style.setProperty("--color-text-secondary", theme.textSecondary);
		root.style.setProperty("--color-border", theme.border);
		root.style.setProperty("--color-accent", theme.accent);
		root.style.setProperty("--color-success", theme.success);
		root.style.setProperty("--color-warning", theme.warning);
		root.style.setProperty("--color-error", theme.error);

		// Add theme class to body for conditional styling
		document.body.className = document.body.className.replace(/theme-\w+/g, "");
		document.body.classList.add(`theme-${themeMode}`);
	}, [themeMode, theme]);

	const toggleTheme = () => {
		setThemeModeState((prev) => (prev === "light" ? "dark" : "light"));
	};

	const setThemeMode = (mode: ThemeMode) => {
		setThemeModeState(mode);
	};

	const value: ThemeContextType = {
		theme,
		themeMode,
		isDark,
		toggleTheme,
		setThemeMode,
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

// Utility hook for component styling
export const useThemeStyles = () => {
	const { theme, isDark } = useTheme();

	return {
		// Common style patterns with updated colors
		card: `bg-[${theme.surface}] border border-[${theme.border}] rounded-lg shadow-sm`,
		button: {
			primary: `bg-[${theme.primary}] text-white hover:bg-[${theme.primary}]/90 transition-all duration-300`,
			secondary: `bg-[${theme.surface}] text-[${theme.text}] border border-[${theme.border}] hover:bg-[${theme.border}] transition-all duration-300`,
			ghost: `text-[${theme.text}] hover:bg-[${theme.surface}] transition-all duration-300`,
		},
		text: {
			primary: `text-[${theme.text}]`,
			secondary: `text-[${theme.textSecondary}]`,
			accent: `text-[${theme.accent}]`,
		},
		background: {
			main: `bg-[${theme.background}]`,
			surface: `bg-[${theme.surface}]`,
		},
		border: `border-[${theme.border}]`,
		theme,
		isDark,
	};
};
