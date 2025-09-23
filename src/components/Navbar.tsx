// components/Navbar.tsx - Updated with Shiny Active Items
import { Mail, Phone, LogIn, Moon, Sun, Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const location = useLocation();
	const navigate = useNavigate();
	const { theme, isDark, toggleTheme } = useTheme();

	// Handle scroll effect for navbar background
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const menuItems: { label: string; path: string }[] = [
		{ label: "Home", path: "/" },
		{ label: "About", path: "/about" },
		{ label: "Services", path: "/services" },
		{ label: "Our Clients", path: "/clients" },
		// { label: "Portfolio", path: "/portfolio" },
		{ label: "Contact", path: "/contact" },
	];

	const isActive = (path: string) => {
		if (path === "/" && location.pathname === "/") return true;
		if (path !== "/" && location.pathname === path) return true;
		return false;
	};

	const handleSmoothScroll = (path: string) => {
		setIsMenuOpen(false);
		navigate(path);
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 100);
	};

	// Dynamic logo source based on theme
	const logoSrc = isDark ? "/blueWhiteLogo.png" : "/bluelightbluelogo.png";

	// Dynamic navbar styling based on theme
	const navbarStyle = {
		backgroundColor: isScrolled ? `${theme.background}f5` : theme.background,
		borderBottomColor: theme.primary,
		backdropFilter: isScrolled ? "blur(10px)" : "none",
	};

	return (
		<>
			<nav
				className="fixed left-0 right-0 top-0 z-[9999] transition-all duration-300 shadow-lg border-0"
				style={navbarStyle}>
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
					<div className="flex items-center justify-between">
						{/* Logo Section */}
						<Link
							to="/"
							className="flex items-center group"
							onClick={() => handleSmoothScroll("/")}>
							<img
								src={logoSrc}
								alt="Blue Sprout Agency Logo"
								className="h-27 w-auto transition-all duration-300 group-hover:scale-105"
								onError={(e) => {
									// Fallback to text logo if image fails
									e.currentTarget.style.display = "none";
									const fallback = e.currentTarget
										.nextElementSibling as HTMLElement;
									if (fallback) fallback.classList.remove("hidden");
								}}
							/>
							{/* Fallback text logo */}
							<div className="hidden text-2xl font-bold">
								<span style={{ color: theme.primary }}>Blue</span>
								<span style={{ color: theme.text }}>Sprout</span>
							</div>
						</Link>

						{/* Desktop Menu */}
						<div className="hidden lg:flex items-center space-x-6">
							{menuItems.map((item, index) =>
								item.label === "Contact" ? (
									<button
										key={index}
										onClick={() => handleSmoothScroll(item.path)}
										className="px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-white"
										style={{
											backgroundColor: theme.primary,
											boxShadow: `0 0 20px ${theme.primary}40`,
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.backgroundColor = `${theme.primary}cc`;
											e.currentTarget.style.boxShadow = `0 0 25px ${theme.primary}60`;
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.backgroundColor = theme.primary;
											e.currentTarget.style.boxShadow = `0 0 20px ${theme.primary}40`;
										}}>
										{item.label}
									</button>
								) : (
									<button
										key={index}
										onClick={() => handleSmoothScroll(item.path)}
										className="text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
										style={{
											color: isActive(item.path) ? "white" : theme.text,
											backgroundColor: isActive(item.path)
												? theme.primary
												: "transparent",
											boxShadow: isActive(item.path)
												? `0 0 15px ${theme.primary}50, inset 0 1px 0 rgba(255,255,255,0.3)`
												: "none",
											textShadow: isActive(item.path)
												? "0 0 10px rgba(255,255,255,0.8)"
												: "none",
											background: isActive(item.path)
												? `linear-gradient(135deg, ${theme.primary} 0%, ${theme.primary}dd 100%)`
												: "transparent",
										}}
										onMouseEnter={(e) => {
											if (!isActive(item.path)) {
												e.currentTarget.style.color = theme.primary;
												e.currentTarget.style.backgroundColor = `${theme.primary}15`;
												e.currentTarget.style.boxShadow = `0 0 10px ${theme.primary}30`;
											}
										}}
										onMouseLeave={(e) => {
											if (!isActive(item.path)) {
												e.currentTarget.style.color = theme.text;
												e.currentTarget.style.backgroundColor = "transparent";
												e.currentTarget.style.boxShadow = "none";
											}
										}}>
										{item.label}
									</button>
								)
							)}

							{/* Contact Action Buttons */}
							<div className="flex items-center gap-3">
								<a
									href="mailto:support@bluesproutagency.com"
									className="p-2 rounded-full transition-all duration-300 hover:scale-105"
									style={{
										backgroundColor: isDark ? theme.surface : "white",
										color: theme.primary,
										border: isDark ? "none" : `1px solid ${theme.border}`,
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = theme.primary;
										e.currentTarget.style.color = "white";
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = isDark
											? theme.surface
											: "white";
										e.currentTarget.style.color = theme.primary;
									}}
									title="Email Us">
									<Mail className="w-4 h-4" />
								</a>

								<a
									href="tel:+16572174737"
									className="p-2 rounded-full transition-all duration-300 hover:scale-105"
									style={{
										backgroundColor: isDark ? theme.surface : "white",
										color: theme.primary,
										border: isDark ? "none" : `1px solid ${theme.border}`,
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = theme.primary;
										e.currentTarget.style.color = "white";
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = isDark
											? theme.surface
											: "white";
										e.currentTarget.style.color = theme.primary;
									}}
									title="Call Us">
									<Phone className="w-4 h-4" />
								</a>

								<button
									onClick={() => navigate("/signin")}
									className="p-2 rounded-full transition-all duration-300 hover:scale-105"
									style={{
										backgroundColor: theme.primary,
										color: "white",
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = `${theme.primary}cc`;
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = theme.primary;
									}}
									title="Sign In">
									<LogIn className="w-4 h-4" />
								</button>
							</div>

							{/* Theme Toggle */}
							<button
								onClick={toggleTheme}
								className="p-2 rounded-lg transition-all duration-300 hover:scale-105"
								style={{
									backgroundColor: isDark ? theme.surface : "white",
									color: theme.primary,
									border: isDark ? "none" : `1px solid ${theme.border}`,
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.backgroundColor = theme.primary;
									e.currentTarget.style.color = "white";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.backgroundColor = isDark
										? theme.surface
										: "white";
									e.currentTarget.style.color = theme.primary;
								}}
								title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}>
								{isDark ? (
									<Sun className="w-4 h-4" />
								) : (
									<Moon className="w-4 h-4" />
								)}
							</button>
						</div>

						{/* Mobile Menu Button */}
						<div className="lg:hidden">
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="p-2 rounded-lg transition-all duration-300"
								style={{
									backgroundColor: theme.primary,
									color: "white",
								}}>
								{isMenuOpen ? (
									<X className="w-5 h-5" />
								) : (
									<Menu className="w-5 h-5" />
								)}
							</button>
						</div>
					</div>

					{/* Mobile Menu */}
					{isMenuOpen && (
						<div
							className="lg:hidden mt-4 p-4 rounded-xl backdrop-blur-sm border"
							style={{
								backgroundColor: `${theme.background}f5`,
								borderColor: theme.border,
							}}>
							{menuItems.map((item, index) => (
								<button
									key={index}
									onClick={() => handleSmoothScroll(item.path)}
									className="block w-full text-left py-3 px-4 text-sm font-medium rounded-lg mb-2 transition-all duration-300"
									style={{
										color: isActive(item.path) ? "white" : theme.text,
										backgroundColor: isActive(item.path)
											? theme.primary
											: "transparent",
										boxShadow: isActive(item.path)
											? `0 0 15px ${theme.primary}50, inset 0 1px 0 rgba(255,255,255,0.3)`
											: "none",
										textShadow: isActive(item.path)
											? "0 0 10px rgba(255,255,255,0.8)"
											: "none",
										background: isActive(item.path)
											? `linear-gradient(135deg, ${theme.primary} 0%, ${theme.primary}dd 100%)`
											: "transparent",
									}}>
									{item.label}
								</button>
							))}

							{/* Mobile Contact Buttons */}
							<div
								className="flex items-center justify-center gap-3 mt-4 pt-4 border-t"
								style={{ borderColor: theme.border }}>
								<a
									href="mailto:support@bluesproutagency.com"
									className="p-2 rounded-full transition-all duration-300"
									style={{
										backgroundColor: theme.surface,
										color: theme.primary,
									}}
									title="Email Us">
									<Mail className="w-4 h-4" />
								</a>
								<a
									href="tel:+16572174737"
									className="p-2 rounded-full transition-all duration-300"
									style={{
										backgroundColor: theme.surface,
										color: theme.primary,
									}}
									title="Call Us">
									<Phone className="w-4 h-4" />
								</a>
								<button
									onClick={() => navigate("/signin")}
									className="p-2 rounded-full transition-all duration-300"
									style={{
										backgroundColor: theme.primary,
										color: "white",
									}}
									title="Sign In">
									<LogIn className="w-4 h-4" />
								</button>
								<button
									onClick={toggleTheme}
									className="p-2 rounded-lg transition-all duration-300"
									style={{
										backgroundColor: theme.surface,
										color: theme.primary,
									}}>
									{isDark ? (
										<Sun className="w-4 h-4" />
									) : (
										<Moon className="w-4 h-4" />
									)}
								</button>
							</div>
						</div>
					)}
				</div>
			</nav>

			{/* Spacer to prevent content from hiding behind fixed navbar */}
			<div className="h-[76px]" />
		</>
	);
};
