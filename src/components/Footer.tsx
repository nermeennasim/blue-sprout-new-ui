// components/Footer.tsx
import { Link } from "react-router-dom";
import { Sprout } from "lucide-react";

interface FooterProps {
	isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
	const currentYear = new Date().getFullYear();

	return (
		<footer
			className={`${
				isDark ? "bg-gray-800 text-gray-300" : "bg-gray-900 text-gray-100"
			} py-12`}>
			<div className="max-w-6xl mx-auto px-6">
				<div className="grid md:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="md:col-span-2">
						<Link to="/" className="flex items-center space-x-3 mb-4">
							<div
								className={`p-2 rounded-lg ${
									isDark ? "bg-orange-500" : "bg-teal-500"
								}`}>
								<Sprout className="w-6 h-6 text-white" />
							</div>
							<span className="text-xl font-bold text-white">
								Blue Sprout Agency
							</span>
						</Link>
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
								{ name: "Pricing", path: "/pricing" },
								{ name: "Testimonials", path: "/testimonials" },
								{ name: "Contact", path: "/contact" },
							].map((link, index) => (
								<li key={index}>
									<Link
										to={link.path}
										className={`hover:text-white transition-colors ${
											isDark ? "hover:text-orange-400" : "hover:text-teal-400"
										}`}>
										{link.name}
									</Link>
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
								className={`block hover:text-white transition-colors ${
									isDark ? "hover:text-orange-400" : "hover:text-teal-400"
								}`}>
								📘 Facebook: @bluesproutagency
							</a>
							<a
								href="https://instagram.com/bluesproutagency"
								target="_blank"
								rel="noopener noreferrer"
								className={`block hover:text-white transition-colors ${
									isDark ? "hover:text-orange-400" : "hover:text-teal-400"
								}`}>
								📸 Instagram: @bluesproutagency
							</a>
							<a
								href="https://twitter.com/blusproutagency"
								target="_blank"
								rel="noopener noreferrer"
								className={`block hover:text-white transition-colors ${
									isDark ? "hover:text-orange-400" : "hover:text-teal-400"
								}`}>
								🐦 Twitter: @blusproutagency
							</a>
						</div>

						{/* CTA */}
						<div className="mt-6">
							<Link
								to="/contact"
								className={`inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
									isDark
										? "bg-orange-500 text-white hover:bg-orange-600"
										: "bg-teal-500 text-white hover:bg-teal-600"
								}`}>
								Get Started Today
							</Link>
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
// components/Footer.tsx
