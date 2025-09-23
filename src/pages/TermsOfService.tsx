// pages/TermsOfService.tsx - Redesigned with Card Layout
import React from "react";
import Section from "../components/Section";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const TermsOfService: React.FC = () => {
	const { theme } = useTheme();
	const navigate = useNavigate();

	const handleNavigation = (path: string) => {
		navigate(path);
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 100);
	};

	return (
		<Section id="terms-of-service" className="pt-32 pb-20 relative">
			{/* Background Image */}
			<div className="absolute inset-0 w-full h-full -z-10">
				<div
					className="absolute inset-0 w-full h-full opacity-10"
					style={{
						backgroundImage:
							'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop")',
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
							Terms of Service
						</h1>
						<div className="space-y-3">
							<p className="text-lg" style={{ color: theme.textSecondary }}>
								<strong style={{ color: theme.text }}>Last updated:</strong>{" "}
								August 29, 2025
							</p>
							<p
								className="text-base leading-relaxed max-w-4xl"
								style={{ color: theme.textSecondary }}>
								These Terms of Service ("Terms") govern your use of the Blue
								Sprout Agency LLC website and services. By accessing or using
								our services, you agree to be bound by these Terms.
							</p>
						</div>
					</div>
				</div>

				{/* Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Acceptance of Terms */}
					<div
						className="p-6 rounded-xl shadow-lg border"
						style={{
							backgroundColor: theme.surface,
							borderColor: theme.border,
						}}>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: theme.text }}>
							1. Acceptance of Terms
						</h2>
						<p style={{ color: theme.textSecondary }}>
							By accessing and using this website and our services, you accept
							and agree to be bound by the terms and provision of this
							agreement. If you do not agree to abide by the above, please do
							not use this service.
						</p>
					</div>

					{/* Services Description */}
					<div
						className="p-6 rounded-xl shadow-lg border"
						style={{
							backgroundColor: theme.surface,
							borderColor: theme.border,
						}}>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: theme.text }}>
							2. Services Description
						</h2>
						<p className="mb-4" style={{ color: theme.textSecondary }}>
							Blue Sprout Agency LLC provides digital marketing and web
							development services including:
						</p>
						<ul className="space-y-2" style={{ color: theme.textSecondary }}>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>Website design and development</span>
							</li>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>Social media management</span>
							</li>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>Video content creation</span>
							</li>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>Branding and graphic design</span>
							</li>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>Digital marketing consultation</span>
							</li>
						</ul>
					</div>

					{/* Payment Terms */}
					<div
						className="p-6 rounded-xl shadow-lg border"
						style={{
							backgroundColor: theme.surface,
							borderColor: theme.border,
						}}>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: theme.text }}>
							3. Payment Terms
						</h2>
						<ul className="space-y-2" style={{ color: theme.textSecondary }}>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>
									Payment terms will be specified in individual service
									agreements
								</span>
							</li>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>
									All fees are due as specified in the project contract
								</span>
							</li>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>Late payments may incur additional fees</span>
							</li>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>
									Refund policies are outlined in individual service agreements
								</span>
							</li>
						</ul>
					</div>

					{/* Intellectual Property */}
					<div
						className="p-6 rounded-xl shadow-lg border"
						style={{
							backgroundColor: theme.surface,
							borderColor: theme.border,
						}}>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: theme.text }}>
							4. Intellectual Property
						</h2>
						<p className="mb-4" style={{ color: theme.textSecondary }}>
							Upon full payment, clients will own the rights to custom work
							created specifically for them. However, Blue Sprout Agency LLC
							retains the right to:
						</p>
						<ul className="space-y-2" style={{ color: theme.textSecondary }}>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>
									Use completed work in our portfolio and marketing materials
								</span>
							</li>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>
									Retain rights to general methodologies and techniques
								</span>
							</li>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>
									Use non-confidential information for future projects
								</span>
							</li>
						</ul>
					</div>

					{/* Client Responsibilities */}
					<div
						className="p-6 rounded-xl shadow-lg border"
						style={{
							backgroundColor: theme.surface,
							borderColor: theme.border,
						}}>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: theme.text }}>
							5. Client Responsibilities
						</h2>
						<p className="mb-4" style={{ color: theme.textSecondary }}>
							Clients are responsible for:
						</p>
						<ul className="space-y-2" style={{ color: theme.textSecondary }}>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>Providing accurate and timely information</span>
							</li>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>Timely feedback and approvals</span>
							</li>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>Payment according to agreed terms</span>
							</li>
							<li className="flex items-start space-x-2">
								<span style={{ color: theme.primary }}>•</span>
								<span>Maintaining confidentiality of login credentials</span>
							</li>
						</ul>
					</div>

					{/* Limitation of Liability */}
					<div
						className="p-6 rounded-xl shadow-lg border"
						style={{
							backgroundColor: theme.surface,
							borderColor: theme.border,
						}}>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: theme.text }}>
							6. Limitation of Liability
						</h2>
						<p style={{ color: theme.textSecondary }}>
							Blue Sprout Agency LLC shall not be liable for any indirect,
							incidental, special, consequential, or punitive damages, or any
							loss of profits or revenues, whether incurred directly or
							indirectly.
						</p>
					</div>
				</div>

				{/* Additional Sections */}
				<div className="mt-8 space-y-6">
					{/* Project Timelines */}
					<div
						className="p-6 rounded-xl shadow-lg border"
						style={{
							backgroundColor: theme.surface,
							borderColor: theme.border,
						}}>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: theme.text }}>
							7. Project Timelines
						</h2>
						<p style={{ color: theme.textSecondary }}>
							Project timelines are estimates based on information provided by
							the client. Delays in client feedback, content provision, or scope
							changes may affect delivery dates. We will communicate any delays
							promptly.
						</p>
					</div>

					{/* Termination */}
					<div
						className="p-6 rounded-xl shadow-lg border"
						style={{
							backgroundColor: theme.surface,
							borderColor: theme.border,
						}}>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: theme.text }}>
							8. Termination
						</h2>
						<p style={{ color: theme.textSecondary }}>
							Either party may terminate services with written notice. Upon
							termination, payment for work completed up to the termination date
							will be due. All materials and access will be returned or revoked
							accordingly.
						</p>
					</div>

					{/* Privacy and Confidentiality */}
					<div
						className="p-6 rounded-xl shadow-lg border"
						style={{
							backgroundColor: theme.surface,
							borderColor: theme.border,
						}}>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: theme.text }}>
							9. Privacy and Confidentiality
						</h2>
						<p style={{ color: theme.textSecondary }}>
							We respect your privacy and maintain confidentiality of client
							information. Please refer to our{" "}
							<button
								onClick={() => handleNavigation("/privacy-policy")}
								className="underline hover:no-underline transition-all font-semibold"
								style={{ color: theme.primary }}>
								Privacy Policy
							</button>{" "}
							for detailed information on how we handle your data.
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
						If you have any questions about these Terms of Service, please
						contact us:
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

export default TermsOfService;
