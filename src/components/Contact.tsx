// components/Contact.tsx - Updated with Theme Context
import React, { useState, useEffect } from "react";
import { InputField } from "./InputField";
import { FormField } from "./FormField";
import { useEmailMutation } from "../hooks/useEmailMutation";
import { useTheme } from "../context/ThemeContext";

// Add Calendly type declaration
declare global {
	interface Window {
		Calendly: any;
	}
}

export interface ContactFormData {
	name: string;
	email: string;
	phone: string;
	message: string;
}

export interface ApiResponse {
	success?: boolean;
	message?: string;
	error?: string;
	id?: string;
}

export const Contact: React.FC = () => {
	const { theme } = useTheme();
	const [contactFormData, setContactFormData] = useState<ContactFormData>({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [showConfirmation, setShowConfirmation] = useState(false);
	const emailMutation = useEmailMutation();

	// Form is under development - set to FALSE to enable form
	const isFormUnderDevelopment = false; // ✅ Set to false to enable

	// Load Calendly popup widget
	useEffect(() => {
		// Load CSS
		const link = document.createElement("link");
		link.href = "https://assets.calendly.com/assets/external/widget.css";
		link.rel = "stylesheet";
		document.head.appendChild(link);

		// Load Script
		const script = document.createElement("script");
		script.src = "https://assets.calendly.com/assets/external/widget.js";
		script.async = true;
		script.onload = () => {
			// Initialize badge widget after script loads
			if (window.Calendly) {
				window.Calendly.initBadgeWidget({
					url: "https://calendly.com/bluesproutagency/30min",
					text: "📅 Schedule Free Call",
					color: theme.primary,
					textColor: "#ffffff",
					branding: false,
				});
			}
		};
		document.head.appendChild(script);

		return () => {
			// Cleanup
			const existingScript = document.querySelector(
				'script[src="https://assets.calendly.com/assets/external/widget.js"]'
			);
			const existingLink = document.querySelector(
				'link[href="https://assets.calendly.com/assets/external/widget.css"]'
			);
			if (existingScript) document.head.removeChild(existingScript);
			if (existingLink) document.head.removeChild(existingLink);

			// Remove badge widget
			const badgeWidget = document.querySelector(".calendly-badge-widget");
			if (badgeWidget) badgeWidget.remove();
		};
	}, [theme.primary]);

	// Form validation
	const isFormValid =
		contactFormData.name.trim() !== "" &&
		contactFormData.email.trim() !== "" &&
		contactFormData.message.trim() !== "" &&
		contactFormData.message.length >= 10;

	// Button should be disabled if form is under development OR form is invalid OR currently loading
	const isButtonDisabled =
		isFormUnderDevelopment || !isFormValid || emailMutation.isLoading;

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setContactFormData((prev) => ({ ...prev, [name]: value }));
		if (emailMutation.error) {
			emailMutation.reset();
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Prevent submission if form is under development
		if (isFormUnderDevelopment) {
			alert(
				"🚧 Contact form is under development. Please use the Schedule Free Call button or call us directly at (657) 217-4737"
			);
			return;
		}

		if (!isFormValid) {
			alert("Please fill in all required fields.");
			return;
		}

		try {
			console.log("🚀 Submitting form data:", contactFormData);

			const result = await emailMutation.sendEmail(contactFormData);
			console.log("✅ Email sent successfully:", result);

			// Show confirmation and reset form
			setShowConfirmation(true);
			setContactFormData({
				name: "",
				email: "",
				phone: "",
				message: "",
			});
		} catch (error) {
			console.error("❌ Email submission failed:", error);
		}
	};

	const resetForm = () => {
		setShowConfirmation(false);
		emailMutation.reset();
	};

	// Success confirmation screen
	if (showConfirmation) {
		return (
			<section
				className="py-20 px-6"
				style={{ backgroundColor: theme.surface }}>
				<div className="max-w-2xl mx-auto text-center">
					<div
						className="p-8 rounded-xl shadow-lg border"
						style={{
							backgroundColor: theme.background,
							borderColor: theme.border,
						}}>
						<div className="text-6xl mb-4">✅</div>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: theme.text }}>
							Message Sent!
						</h2>
						<p className="mb-6" style={{ color: theme.textSecondary }}>
							We'll get back to you within 24 hours.
						</p>

						{emailMutation.data?.id && (
							<p
								className="text-sm mb-4"
								style={{ color: theme.textSecondary }}>
								Reference ID: {emailMutation.data.id}
							</p>
						)}

						<div className="space-y-4 mb-6">
							<p style={{ color: theme.textSecondary }}>
								📧 Check your email for a confirmation message
							</p>
							<p style={{ color: theme.textSecondary }}>
								Need immediate assistance? Call us at{" "}
								<a
									href="tel:+16572174737"
									className="underline font-medium"
									style={{ color: theme.primary }}>
									(657) 217-4737
								</a>
							</p>
						</div>

						<button
							onClick={resetForm}
							className="px-6 py-3 rounded-lg font-semibold text-white transition-colors"
							style={{ backgroundColor: theme.primary }}>
							Send Another Message
						</button>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="py-20 px-6" style={{ backgroundColor: theme.surface }}>
			<div className="max-w-4xl mx-auto">
				{/* Development Banner */}
				{isFormUnderDevelopment && (
					<div className="text-center mb-8">
						<div
							className="inline-flex items-center px-6 py-3 text-white rounded-full font-bold shadow-lg text-sm md:text-base mb-4"
							style={{
								background: `linear-gradient(45deg, ${theme.warning}, ${theme.error})`,
							}}>
							🚧 Contact Form Under Development - Use Schedule Button or Call
							Direct!
						</div>
					</div>
				)}

				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4" style={{ color: theme.text }}>
						Get In Touch
					</h2>
					<p className="text-lg mb-6" style={{ color: theme.textSecondary }}>
						Ready to grow your business? Send us a message or schedule a free
						consultation.
					</p>

					{/* Quick Contact Info */}
					<div className="space-y-2 mb-8">
						<p style={{ color: theme.textSecondary }}>
							📞{" "}
							<a
								href="tel:+16572174737"
								className="font-semibold hover:underline"
								style={{ color: theme.primary }}>
								(657) 217-4737
							</a>
						</p>
						<p style={{ color: theme.textSecondary }}>
							📧{" "}
							<a
								href="mailto:support@bluesproutagency.com"
								className="hover:underline"
								style={{ color: theme.primary }}>
								support@bluesproutagency.com
							</a>
						</p>
					</div>

					{/* Popup Schedule Button */}
					<div className="mb-8">
						<p className="text-sm mb-3" style={{ color: theme.textSecondary }}>
							💡 <strong>Tip:</strong> Look for the floating "Schedule Free
							Call" button to book instantly!
						</p>
					</div>
				</div>

				{/* Contact Form */}
				<div
					className={`rounded-xl shadow-lg p-8 max-w-2xl mx-auto border ${
						isFormUnderDevelopment ? "opacity-75" : ""
					}`}
					style={{
						backgroundColor: theme.background,
						borderColor: theme.border,
					}}>
					<h3
						className="text-xl font-semibold mb-6 text-center"
						style={{ color: theme.text }}>
						Send Us a Message
					</h3>

					{/* Form status indicator */}
					{isFormUnderDevelopment && (
						<div
							className="p-4 rounded-lg border-2 border-dashed mb-6"
							style={{
								borderColor: theme.warning,
								backgroundColor: `${theme.warning}20`,
								color: theme.warning,
							}}>
							<p className="text-center font-medium">
								⚠️ Form is temporarily disabled while we set up our email
								service.
								<br />
								<span className="text-sm">
									Please use the floating "Schedule Free Call" button or contact
									us directly!
								</span>
							</p>
						</div>
					)}

					{/* Error Display */}
					{emailMutation.isError && (
						<div
							className="mb-6 p-4 rounded-lg border"
							style={{
								backgroundColor: `${theme.error}20`,
								borderColor: theme.error,
								color: theme.error,
							}}>
							<p className="font-medium">Message failed to send</p>
							<p className="text-sm">{emailMutation.error}</p>
						</div>
					)}

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid md:grid-cols-2 gap-6">
							<FormField label="Name*" htmlFor="name">
								<InputField
									type="text"
									name="name"
									value={contactFormData.name}
									onChange={handleChange}
									placeholder="Your name"
									label=""
									required
								/>
							</FormField>

							<FormField label="Email*" htmlFor="email">
								<InputField
									type="email"
									name="email"
									value={contactFormData.email}
									onChange={handleChange}
									placeholder="your@email.com"
									label=""
									required
								/>
							</FormField>
						</div>

						<FormField label="Phone" htmlFor="phone">
							<InputField
								type="tel"
								name="phone"
								value={contactFormData.phone}
								onChange={handleChange}
								placeholder="(555) 123-4567"
								label=""
							/>
						</FormField>

						<FormField label="Message*" htmlFor="message">
							<textarea
								id="message"
								name="message"
								value={contactFormData.message}
								onChange={handleChange}
								minLength={10}
								maxLength={500}
								required
								rows={4}
								placeholder="Tell us about your business and how we can help..."
								className="p-3 border rounded-lg w-full resize-none transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-20"
								style={{
									backgroundColor: theme.surface,
									borderColor: theme.border,
									color: theme.text,
								}}
							/>
							<div
								className="text-right text-sm mt-1"
								style={{ color: theme.textSecondary }}>
								{contactFormData.message.length}/500
							</div>
						</FormField>

						<button
							type="submit"
							disabled={isButtonDisabled}
							className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
								isButtonDisabled ? "cursor-not-allowed" : ""
							}`}
							style={{
								backgroundColor: isButtonDisabled
									? theme.textSecondary
									: theme.primary,
								color: isButtonDisabled ? theme.background : "white",
							}}>
							{isFormUnderDevelopment ? (
								"🚧 Form Under Development"
							) : emailMutation.isLoading ? (
								<span className="flex items-center justify-center">
									<svg
										className="animate-spin -ml-1 mr-3 h-5 w-5"
										fill="none"
										viewBox="0 0 24 24">
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
									</svg>
									Sending...
								</span>
							) : !isFormValid ? (
								"📝 Please Fill Required Fields"
							) : (
								"Send Message"
							)}
						</button>

						{/* Form validation hints */}
						{!isFormUnderDevelopment && !isFormValid && (
							<div className="text-center mt-4">
								<p className="text-sm" style={{ color: theme.textSecondary }}>
									Required: Name, Email, Message (minimum 10 characters)
								</p>
							</div>
						)}

						{/* Mutation Status Indicators */}
						<div className="text-center space-y-2">
							{emailMutation.isLoading && (
								<p className="text-sm" style={{ color: theme.textSecondary }}>
									🚀 Sending your message via email API...
								</p>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};
