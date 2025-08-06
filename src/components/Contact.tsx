// Clean minimalist Contact.tsx component
import React, { useState, useEffect } from "react";
import { InputField } from "./InputField";
import { FormField } from "./FormField";
import { useEmailMutation } from "../hooks/useEmailMutation";

export interface ContactProps {
	isDark: boolean;
}

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

export const Contact: React.FC<ContactProps> = ({ isDark }) => {
	const [contactFormData, setContactFormData] = useState<ContactFormData>({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [showConfirmation, setShowConfirmation] = useState(false);
	const emailMutation = useEmailMutation();

	// Form is under development - set to true to disable form
	const isFormUnderDevelopment = true;

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
					color: isDark ? "#f97316" : "#0d9488", // Orange for dark, teal for light
					textColor: "#ffffff",
					branding: false, // Remove "powered by Calendly"
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
	}, [isDark]);

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
			await emailMutation.mutate(contactFormData);
			setShowConfirmation(true);
			setContactFormData({ name: "", email: "", phone: "", message: "" });
		} catch (error) {
			console.error("Form submission failed:", error);
		}
	};

	// Success screen
	if (showConfirmation) {
		return (
			<section
				className={`py-20 px-6 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
				<div className="max-w-2xl mx-auto text-center">
					<div
						className={`p-8 rounded-xl ${
							isDark ? "bg-gray-800" : "bg-white"
						} shadow-lg`}>
						<div className="text-6xl mb-4">✅</div>
						<h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
						<p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
							We'll get back to you within 24 hours.
						</p>
						<button
							onClick={() => setShowConfirmation(false)}
							className={`px-6 py-3 rounded-lg font-semibold ${
								isDark
									? "bg-orange-500 hover:bg-orange-600"
									: "bg-teal-600 hover:bg-teal-700"
							} text-white transition-colors`}>
							Send Another Message
						</button>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className={`py-20 px-6 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
			<div className="max-w-4xl mx-auto">
				{/* Development Banner - Show when form is under development */}
				{isFormUnderDevelopment && (
					<div className="text-center mb-8">
						<div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-bold shadow-lg text-sm md:text-base mb-4">
							🚧 Contact Form Under Development - Use Schedule Button or Call
							Direct!
						</div>
					</div>
				)}

				{/* Header */}
				<div className="text-center mb-12">
					<h2
						className={`text-3xl font-bold mb-4 ${
							isDark ? "text-white" : "text-gray-800"
						}`}>
						Get In Touch
					</h2>
					<p
						className={`text-lg mb-6 ${
							isDark ? "text-gray-300" : "text-gray-600"
						}`}>
						Ready to grow your business? Send us a message or schedule a free
						consultation.
					</p>

					{/* Quick Contact Info */}
					<div className="space-y-2 mb-8">
						<p className={isDark ? "text-gray-300" : "text-gray-600"}>
							📞{" "}
							<a
								href="tel:+16572174737"
								className="text-blue-500 hover:text-blue-600 font-semibold">
								(657) 217-4737
							</a>
						</p>
						<p className={isDark ? "text-gray-300" : "text-gray-600"}>
							📧{" "}
							<a
								href="mailto:support@bluesproutagency.com"
								className="text-blue-500 hover:text-blue-600">
								support@bluesproutagency.com
							</a>
						</p>
					</div>

					{/* Popup Schedule Button */}
					<div className="mb-8">
						<p
							className={`text-sm mb-3 ${
								isDark ? "text-gray-400" : "text-gray-500"
							}`}>
							💡 <strong>Tip:</strong> Look for the floating "Schedule Free
							Call" button to book instantly!
						</p>
					</div>
				</div>
				{/* Contact Form */}
				<div
					className={`rounded-xl shadow-lg p-8 max-w-2xl mx-auto ${
						isDark ? "bg-gray-800" : "bg-white"
					} ${isFormUnderDevelopment ? "opacity-75" : ""}`}>
					<h3
						className={`text-xl font-semibold mb-6 text-center ${
							isDark ? "text-white" : "text-gray-800"
						}`}>
						Send Us a Message
					</h3>

					{/* Form status indicator */}
					{isFormUnderDevelopment && (
						<div
							className={`p-4 rounded-lg border-2 border-dashed mb-6 ${
								isDark
									? "border-yellow-400 bg-yellow-900/20 text-yellow-200"
									: "border-yellow-500 bg-yellow-50 text-yellow-700"
							}`}>
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
						<div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
							<p className="font-medium">Message failed to send</p>
							<p className="text-sm">{emailMutation.error}</p>
						</div>
					)}

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid md:grid-cols-2 gap-6">
							<FormField label="Name" htmlFor="name" isDark={isDark}>
								<InputField
									type="text"
									name="name"
									value={contactFormData.name}
									onChange={handleChange}
									placeholder="Your name"
									isDark={isDark}
									label=""
									required
								/>
							</FormField>

							<FormField label="Email" htmlFor="email" isDark={isDark}>
								<InputField
									type="email"
									name="email"
									value={contactFormData.email}
									onChange={handleChange}
									placeholder="your@email.com"
									isDark={isDark}
									label=""
									required
								/>
							</FormField>
						</div>

						<FormField label="Phone (Optional)" htmlFor="phone" isDark={isDark}>
							<InputField
								type="tel"
								name="phone"
								value={contactFormData.phone}
								onChange={handleChange}
								placeholder="(555) 123-4567"
								isDark={isDark}
								label=""
							/>
						</FormField>

						<FormField label="Message" htmlFor="message" isDark={isDark}>
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
								className={`p-3 border rounded-lg w-full resize-none transition-colors ${
									isDark
										? "bg-gray-700 border-gray-600 text-white focus:border-orange-500"
										: "bg-gray-50 border-gray-300 text-gray-900 focus:border-teal-500"
								} focus:outline-none focus:ring-2 focus:ring-opacity-20 ${
									isDark ? "focus:ring-orange-500" : "focus:ring-teal-500"
								}`}
							/>
							<div
								className={`text-right text-sm mt-1 ${
									isDark ? "text-gray-400" : "text-gray-500"
								}`}>
								{contactFormData.message.length}/500
							</div>
						</FormField>

						<button
							type="submit"
							disabled={isButtonDisabled}
							className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
								isButtonDisabled
									? "bg-gray-400 cursor-not-allowed text-gray-600"
									: isDark
									? "bg-orange-500 text-white hover:bg-orange-600"
									: "bg-teal-600 text-white hover:bg-teal-700"
							} transform hover:scale-105`}>
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
											d="M4 12a8 8 0 018-8V0C5.373 0 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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
								<p
									className={`text-sm ${
										isDark ? "text-gray-400" : "text-gray-500"
									}`}>
									Required: Name, Email, Message (minimum 10 characters)
								</p>
							</div>
						)}
					</form>
				</div>
			</div>
		</section>
	);
};
