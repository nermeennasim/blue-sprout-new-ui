// components/Footer.tsx
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import sprtLogo192 from "../assets/sprout-logo-192.png";

export interface FooterProps {
	isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
	const currentYear = new Date().getFullYear();
	const navigate = useNavigate();

	// Debug function to handle navigation
	const handleGetStartedClick = (e: React.MouseEvent) => {
		e.preventDefault();
		console.log("Get Started button clicked - navigating to /contact");
		navigate("/contact");

		// Scroll to top after navigation
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 100);
	};

	// Handle all navigation with smooth scroll
	const handleNavigation = (path: string) => {
		navigate(path);
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 100);
	};

	return (
		<footer
			className={`relative z-10 ${
				isDark ? "bg-gray-800 text-gray-300" : "bg-gray-900 text-gray-100"
			} py-12`}>
			<div className="max-w-6xl mx-auto px-6">
				<div className="grid md:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="md:col-span-2">
						<button
							onClick={() => handleNavigation("/")}
							className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity">
							<div
								className={`p-2 rounded-lg ${
									isDark ? "bg-orange-500" : "bg-teal-500"
								}`}>
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
							</div>
							<span className="text-xl font-bold text-white">
								Blue Sprout Agency
							</span>
						</button>
						<p className="mb-4 max-w-md">
							Helping small businesses grow their digital presence with
							professional social media management, web development, and video
							editing.
						</p>
						<div className="space-y-2 text-sm">
							<div>📍 Chino, California, USA</div>
							<div>📧 support@bluesproutagency.com</div>
							<div>📞 (657) 217-4737</div>
							<div>🌐 www.bluesproutagency.com</div>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
						<ul className="space-y-2">
							{[
								{ name: "Home", path: "/" },
								{ name: "About", path: "/about" },
								{ name: "Services", path: "/services" },
								{ name: "Our Clients", path: "/clients" },
								{ name: "Pricing", path: "/pricing" },
								{ name: "Testimonials", path: "/testimonials" },
								{ name: "Contact", path: "/contact" },
							].map((link, index) => (
								<li key={index}>
									<button
										onClick={() => handleNavigation(link.path)}
										className={`hover:text-white transition-colors text-left ${
											isDark ? "hover:text-orange-400" : "hover:text-teal-400"
										}`}>
										{link.name}
									</button>
								</li>
							))}
						</ul>
					</div>

					{/* Social & Contact */}
					<div>
						<h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
						<div className="space-y-3">
							<a
								href="https://facebook.com/bluesproutagency"
								target="_blank"
								rel="noopener noreferrer"
								className={`flex items-center space-x-2 hover:text-white transition-colors ${
									isDark ? "hover:text-orange-400" : "hover:text-teal-400"
								}`}>
								<FaFacebook className="w-5 h-5" />
								<span>Facebook: @bluesproutagency</span>
							</a>
							<a
								href="https://instagram.com/bluesproutagency"
								target="_blank"
								rel="noopener noreferrer"
								className={`flex items-center space-x-2 hover:text-white transition-colors ${
									isDark ? "hover:text-orange-400" : "hover:text-teal-400"
								}`}>
								<FaInstagram className="w-5 h-5" />
								<span>Instagram: @bluesproutagency</span>
							</a>
							<a
								href="https://twitter.com/blusproutagency"
								target="_blank"
								rel="noopener noreferrer"
								className={`flex items-center space-x-2 hover:text-white transition-colors ${
									isDark ? "hover:text-orange-400" : "hover:text-teal-400"
								}`}>
								<FaTwitter className="w-5 h-5" />
								<span>Twitter: @blusproutagency</span>
							</a>
							<a
								href="https://www.linkedin.com/company/blue-sprout-agency/"
								target="_blank"
								rel="noopener noreferrer"
								className={`flex items-center space-x-2 hover:text-white transition-colors ${
									isDark ? "hover:text-orange-400" : "hover:text-teal-400"
								}`}>
								<FaLinkedin className="w-5 h-5" />
								<span>Linkedin: @blue-sprout-agency</span>
							</a>
						</div>

						{/* CTA - Updated with debugging and smooth scroll */}
						<div className="mt-6 space-y-3">
							<button
								onClick={handleGetStartedClick}
								className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer ${
									isDark
										? "bg-orange-500 text-white hover:bg-orange-600"
										: "bg-teal-500 text-white hover:bg-teal-600"
								}`}>
								Get Started Today
							</button>

							{/* Alternative Link version for testing */}
							<button
								onClick={() => handleNavigation("/contact")}
								className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2 ${
									isDark
										? "border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
										: "border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white"
								}`}>
								Contact Us
							</button>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
					<p>
						&copy; {currentYear} Blue Sprout Agency LLC. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
