import React, { useState } from "react";
import { Menu, X, Sprout, Sun, Moon } from "lucide-react";

export interface NavbarProps {
	isDark: boolean;
	toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const menuItems: { label: string; id: string }[] = [
		{ label: "About", id: "about" },
		{ label: "Services", id: "services" },
		{ label: "Pricing", id: "pricing" },
		{ label: "Testimonials", id: "testimonials" },
		{ label: "Contact", id: "contact" },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${
				isDark
					? "bg-gray-900/95 border-gray-700"
					: "bg-white/95 border-gray-200"
			} shadow-xl border-b-2 transition-all duration-300`}>
			<div className="w-full max-w-6xl mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center space-x-3">
						<div
							className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 transform shadow-lg ${
								isDark
									? "bg-gradient-to-br from-orange-500 to-orange-600 shadow-orange-500/30"
									: "bg-gradient-to-br from-teal-500 to-blue-600 shadow-teal-500/30"
							}`}>
							<Sprout className="w-6 h-6 text-white" />
						</div>
						<h1
							className={`text-2xl font-bold transition-colors duration-300 ${
								isDark ? "text-white" : "text-gray-800"
							}`}>
							Blue Sprout Agency
						</h1>
					</div>

					{/* Desktop Menu */}
					<div className="hidden lg:flex items-center space-x-6">
						{menuItems.map((item, index) =>
							item.label === "Contact" ? (
								<a
									key={index}
									href={`#${item.id}`}
									className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
										isDark
											? "bg-orange-500 text-white hover:bg-orange-600"
											: "bg-teal-500 text-white hover:bg-teal-600"
									}`}>
									{item.label}
								</a>
							) : (
								<a
									key={index}
									href={`#${item.id}`}
									className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 transform ${
										isDark
											? "text-gray-300 hover:text-white hover:bg-orange-500/20 hover:shadow-md"
											: "text-gray-700 hover:text-teal-600 hover:bg-teal-50 hover:shadow-md"
									}`}>
									{item.label}
								</a>
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
							<a
								key={index}
								href={`#${item.id}`}
								onClick={() => setIsMenuOpen(false)}
								className={`block py-3 px-4 text-sm font-medium rounded-lg mb-2 transition-all duration-300 last:mb-0 ${
									isDark
										? "text-gray-300 hover:text-white hover:bg-orange-500/20"
										: "text-gray-700 hover:text-teal-600 hover:bg-teal-50"
								}`}>
								{item.label}
							</a>
						))}
					</div>
				)}
			</div>
		</nav>
	);
};
