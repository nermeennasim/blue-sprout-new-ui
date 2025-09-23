// pages/PrivacyPolicy.tsx - Redesigned with Card Layout
import React from "react";
import Section from "../components/Section";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
	const { theme, isDark } = useTheme();
	const navigate = useNavigate();

	const handleNavigation = (path: string) => {
		navigate(path);
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 100);
	};

	return (
		<Section id="privacy-policy" className="pt-32 pb-20 relative">
			{/* Background Image */}
			<div className="absolute inset-0 w-full h-full -z-10">
				<div
					className="absolute inset-0 w-full h-full opacity-10"
					style={{
						backgroundImage:
							'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop")',
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundAttachment: "fixed",
					}}
				/>
				<div
					className="absolute inset-0"
					style={{ backgroundColor: `${theme.background}95` }}
				/>
			</div>

			<div className="max-w-5xl mx-auto px-6 relative">
				{/* Header Card */}
				<div
					className="mb-12 p-8 rounded-2xl shadow-2xl border"
					style={{
						backgroundColor: theme.surface,
						borderColor: theme.border,
					}}>
					<div className="text-left">
						<h1
							className="text-4xl md:text-5xl font-bold mb-6"
							style={{ color: theme.text }}>
							Privacy Policy
						</h1>
						<div className="space-y-3">
							<p className="text-lg" style={{ color: theme.textSecondary }}>
								<strong style={{ color: theme.text }}>Last updated:</strong>{" "}
								August 29, 2025
							</p>
							<p
								className="text-base leading-relaxed max-w-4xl"
								style={{ color: theme.textSecondary }}>
								Blue Sprout Agency LLC ("we," "our," or "us") respects your
								privacy. This Privacy Policy explains how we collect, use, and
								protect your personal information when you visit our website{" "}
								<a
									href="https://bluesproutagency.com"
									className="underline hover:no-underline transition-all font-semibold"
									style={{ color: theme.primary }}>
									https://bluesproutagency.com
								</a>{" "}
								or interact with us.
							</p>
						</div>
					</div>
				</div>

				{/* Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Information Collection */}
					<div
						className="p-6 rounded-xl shadow-lg border"
						style={{
							backgroundColor: theme.surface,
							borderColor: theme.border,
						}}>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: theme.text }}>
							1. Information We Collect
						</h2>
						<p className="mb-4" style={{ color: theme.textSecondary }}>
							We may collect the following information when you use our website,
							forms, or services:
						</p>
						<ul className="space-y-2" style={{ color: theme.textSecondary }}>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>
									Name, email address, phone number, company name, and job
									title.
								</span>
							</li>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>
									Information you provide when contacting us or filling out
									forms.
								</span>
							</li>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>
									Technical information such as IP address, browser type, and
									website usage.
								</span>
							</li>
						</ul>
					</div>

					{/* How We Use Information */}
					<div
						className="p-6 rounded-xl shadow-lg border"
						style={{
							backgroundColor: theme.surface,
							borderColor: theme.border,
						}}>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: theme.text }}>
							2. How We Use Your Information
						</h2>
						<p className="mb-4" style={{ color: theme.textSecondary }}>
							We use your information to:
						</p>
						<ul className="space-y-2" style={{ color: theme.textSecondary }}>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>Provide and improve our services.</span>
							</li>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>Respond to inquiries and schedule consultations.</span>
							</li>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>Send relevant updates and marketing communications.</span>
							</li>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>
									Analyze website performance and enhance user experience.
								</span>
							</li>
						</ul>
					</div>

					{/* Data Sharing */}
					<div
						className="p-6 rounded-xl shadow-lg border"
						style={{
							backgroundColor: theme.surface,
							borderColor: theme.border,
						}}>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: theme.text }}>
							3. Sharing of Information
						</h2>
						<p className="mb-4" style={{ color: theme.textSecondary }}>
							We do not sell or rent your personal information. We may share
							information with:
						</p>
						<ul className="space-y-2" style={{ color: theme.textSecondary }}>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>
									Trusted service providers who help us operate our business.
								</span>
							</li>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>When required by law, regulation, or legal process.</span>
							</li>
						</ul>
					</div>

					{/* Data Security */}
					<div
						className="p-6 rounded-xl shadow-lg border"
						style={{
							backgroundColor: theme.surface,
							borderColor: theme.border,
						}}>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: theme.text }}>
							4. Data Security
						</h2>
						<p style={{ color: theme.textSecondary }}>
							We implement reasonable security measures to protect your personal
							data. However, no method of transmission over the internet is 100%
							secure.
						</p>
					</div>

					{/* Your Rights */}
					<div
						className="p-6 rounded-xl shadow-lg border"
						style={{
							backgroundColor: theme.surface,
							borderColor: theme.border,
						}}>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: theme.text }}>
							5. Your Rights
						</h2>
						<p style={{ color: theme.textSecondary }}>
							You may request access, correction, or deletion of your personal
							information by contacting us at:{" "}
							<a
								href="mailto:support@bluesproutagency.com"
								className="font-semibold underline hover:no-underline transition-all"
								style={{ color: theme.primary }}>
								support@bluesproutagency.com
							</a>
						</p>
					</div>

					{/* Cookies & Tracking */}
					<div
						className="p-6 rounded-xl shadow-lg border"
						style={{
							backgroundColor: theme.surface,
							borderColor: theme.border,
						}}>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: theme.text }}>
							6. Cookies & Tracking
						</h2>
						<p style={{ color: theme.textSecondary }}>
							Our website may use cookies or analytics tools to improve user
							experience. You can disable cookies in your browser settings.
						</p>
					</div>
				</div>

				{/* Additional Sections */}
				<div className="mt-8 space-y-6">
					{/* Third-Party Services */}
					<div
						className="p-6 rounded-xl shadow-lg border"
						style={{
							backgroundColor: theme.surface,
							borderColor: theme.border,
						}}>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: theme.text }}>
							7. Third-Party Services
						</h2>
						<p style={{ color: theme.textSecondary }}>
							Our website may contain links to third-party websites or services.
							We are not responsible for the privacy practices of these external
							sites. We encourage you to read their privacy policies.
						</p>
					</div>

					{/* Data Retention */}
					<div
						className="p-6 rounded-xl shadow-lg border"
						style={{
							backgroundColor: theme.surface,
							borderColor: theme.border,
						}}>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: theme.text }}>
							8. Data Retention
						</h2>
						<p style={{ color: theme.textSecondary }}>
							We retain your personal information only as long as necessary to
							fulfill the purposes outlined in this Privacy Policy, unless a
							longer retention period is required or permitted by law.
						</p>
					</div>
				</div>

				{/* Contact Section */}
				<div
					className="mt-8 p-8 rounded-2xl shadow-2xl border"
					style={{
						backgroundColor: theme.surface,
						borderColor: theme.border,
					}}>
					<h2 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>
						Contact Information
					</h2>
					<p className="mb-6" style={{ color: theme.textSecondary }}>
						If you have any questions about this Privacy Policy, please contact
						us:
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-3" style={{ color: theme.textSecondary }}>
							<p
								className="font-semibold text-lg"
								style={{ color: theme.text }}>
								Blue Sprout Agency LLC
							</p>
							<p>
								<strong>Email:</strong>{" "}
								<a
									href="mailto:support@bluesproutagency.com"
									className="underline hover:no-underline transition-all"
									style={{ color: theme.primary }}>
									support@bluesproutagency.com
								</a>
							</p>
							<p>
								<strong>Phone:</strong>{" "}
								<a
									href="tel:+16572174737"
									className="underline hover:no-underline transition-all"
									style={{ color: theme.primary }}>
									(657) 217-4737
								</a>
							</p>
							<p>
								<strong>Address:</strong> Chino, California, USA
							</p>
						</div>
						<div className="flex justify-end">
							<button
								onClick={() => handleNavigation("/")}
								className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-white shadow-lg"
								style={{ backgroundColor: theme.primary }}>
								Back to Home
							</button>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default PrivacyPolicy;
