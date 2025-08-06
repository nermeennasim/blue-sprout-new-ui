// components/Navbar.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

// Import your logo files
import sprtLogo192 from "../assets/sprout-logo-192.png";

export interface NavbarProps {
	isDark: boolean;
	toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const location = useLocation();

	const menuItems: { label: string; path: string }[] = [
		{ label: "Home", path: "/" },
		{ label: "About", path: "/about" },
		{ label: "Services", path: "/services" },
		{ label: "Pricing", path: "/pricing" },
		{ label: "Testimonials", path: "/testimonials" },
		{ label: "Contact", path: "/contact" },
	];

	const isActive = (path: string) => {
		if (path === "/" && location.pathname === "/") return true;
		if (path !== "/" && location.pathname === path) return true;
		return false;
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${
				isDark
					? "bg-gray-900/95 border-gray-700"
					: "bg-white/95 border-gray-200"
			} shadow-xl border-b-2 transition-all duration-300`}>
			<div className="w-full max-w-6xl mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					{/* Logo with Real Image - Bigger Size & Rounded */}
					<Link to="/" className="flex items-center space-x-3 group">
						<div className="relative">
							{/* Use your real logo - Made bigger (48x48px) and rounded */}
							<img
								src={sprtLogo192}
								alt="Blue Sprout Agency Logo"
								className="w-12 h-12 rounded-full transition-all duration-300 group-hover:scale-125 drop-shadow-lg object-cover"
								style={{
									filter: isDark
										? "drop-shadow(0 4px 12px rgba(249, 115, 22, 0.4)) drop-shadow(0 0 20px rgba(249, 115, 22, 0.2))"
										: "drop-shadow(0 4px 12px rgba(20, 184, 166, 0.4)) drop-shadow(0 0 20px rgba(20, 184, 166, 0.2))",
								}}
							/>

							{/* Enhanced glow effect on hover - also rounded */}
							<div
								className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg -z-10 rounded-full"
								style={{
									background: isDark
										? "radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, rgba(249, 115, 22, 0.1) 50%, transparent 70%)"
										: "radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, rgba(20, 184, 166, 0.1) 50%, transparent 70%)",
									transform: "scale(1.5)",
								}}></div>

							{/* Color overlay on hover for extra glow - also rounded */}
							<div
								className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full ${
									isDark ? "bg-orange-400" : "bg-teal-400"
								} mix-blend-overlay`}></div>
						</div>

						<h1 className="text-2xl font-bold transition-colors duration-300 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
							Blue Sprout Agency
						</h1>
					</Link>

					{/* Desktop Menu */}
					<div className="hidden lg:flex items-center space-x-6">
						{menuItems.map((item, index) =>
							item.label === "Contact" ? (
								<Link
									key={index}
									to={item.path}
									className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
										isActive(item.path)
											? isDark
												? "bg-orange-600 text-white"
												: "bg-teal-600 text-white"
											: isDark
											? "bg-orange-500 text-white hover:bg-orange-600"
											: "bg-teal-500 text-white hover:bg-teal-600"
									}`}>
									{item.label}
								</Link>
							) : (
								<Link
									key={index}
									to={item.path}
									className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 transform ${
										isActive(item.path)
											? isDark
												? "text-orange-400 bg-orange-500/20 shadow-md"
												: "text-teal-600 bg-teal-50 shadow-md"
											: isDark
											? "text-gray-300 hover:text-white hover:bg-orange-500/20 hover:shadow-md"
											: "text-gray-700 hover:text-teal-600 hover:bg-teal-50 hover:shadow-md"
									}`}>
									{item.label}
								</Link>
							)
						)}

						{/* Theme Toggle */}
						<button
							onClick={toggleTheme}
							className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 transform shadow-lg ${
								isDark
									? "bg-gray-800 text-orange-400 hover:bg-orange-500 hover:text-white shadow-orange-500/20"
									: "bg-gray-100 text-teal-600 hover:bg-teal-500 hover:text-white shadow-teal-500/20"
							}`}>
							{isDark ? (
								<Sun className="w-5 h-5" />
							) : (
								<Moon className="w-5 h-5" />
							)}
						</button>
					</div>

					{/* Mobile Menu Buttons */}
					<div className="lg:hidden flex items-center space-x-3">
						<button
							onClick={toggleTheme}
							className={`p-2 rounded-lg transition-all duration-300 ${
								isDark
									? "bg-gray-800 text-orange-400 hover:bg-orange-500 hover:text-white"
									: "bg-gray-100 text-teal-600 hover:bg-teal-500 hover:text-white"
							}`}>
							{isDark ? (
								<Sun className="w-5 h-5" />
							) : (
								<Moon className="w-5 h-5" />
							)}
						</button>
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className={`p-2 rounded-lg transition-all duration-300 ${
								isDark
									? "bg-orange-500 text-white hover:bg-orange-600"
									: "bg-teal-500 text-white hover:bg-teal-600"
							}`}>
							{isMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div
						className={`lg:hidden mt-4 p-4 rounded-xl shadow-xl transition-all duration-300 animate-fade-in ${
							isDark
								? "bg-gray-800/95 border border-gray-700 backdrop-blur-md"
								: "bg-white/95 border border-gray-200 backdrop-blur-md"
						}`}>
						{menuItems.map((item, index) => (
							<Link
								key={index}
								to={item.path}
								onClick={() => setIsMenuOpen(false)}
								className={`block py-3 px-4 text-sm font-medium rounded-lg mb-2 transition-all duration-300 last:mb-0 ${
									isActive(item.path)
										? isDark
											? "text-orange-400 bg-orange-500/20"
											: "text-teal-600 bg-teal-50"
										: isDark
										? "text-gray-300 hover:text-white hover:bg-orange-500/20"
										: "text-gray-700 hover:text-teal-600 hover:bg-teal-50"
								}`}>
								{item.label}
							</Link>
						))}
					</div>
				)}
			</div>
		</nav>
	);
};
