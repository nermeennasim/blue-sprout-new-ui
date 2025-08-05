// Update your Contact.tsx component

import React, { useState } from "react";
import { InputField } from "./InputField";
import { FormField } from "./FormField";
import { useEmailMutation } from "../hooks/useEmailMutation";

export interface ContactProps {
	isDark: boolean;
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

export const Contact: React.FC<ContactProps> = ({ isDark }) => {
	const [ContactFormData, setContactFormData] = useState<ContactFormData>({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const [showConfirmation, setShowConfirmation] = useState(false);
	const emailMutation = useEmailMutation();

	// Banner control - set to true to show banner and disable form
	const isFormUnderDevelopment = true;

	// Check if form has required content
	const isFormValid =
		ContactFormData.name.trim() !== "" &&
		ContactFormData.email.trim() !== "" &&
		ContactFormData.message.trim() !== "" &&
		ContactFormData.message.length >= 10;

	// Button should be disabled if form is under development OR form is invalid OR currently loading
	const isButtonDisabled =
		isFormUnderDevelopment || !isFormValid || emailMutation.isLoading;

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setContactFormData((prev) => ({ ...prev, [name]: value }));

		// Clear previous errors when user starts typing
		if (emailMutation.error) {
			emailMutation.reset();
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Prevent submission if form is under development
		if (isFormUnderDevelopment) {
			alert(
				"🚧 Contact form is under development. Please call us directly at (657) 217-4737"
			);
			return;
		}

		// Prevent submission if form is not valid
		if (!isFormValid) {
			alert("Please fill in all required fields with valid information.");
			return;
		}

		try {
			console.log("🚀 Submitting form data:", ContactFormData);

			const result = await emailMutation.mutate(ContactFormData);

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
			// Error is already handled by the mutation hook
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
				id="contact"
				className={`py-20 mb-24 px-6 transition-all duration-300 ${
					isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
				}`}>
				<div className="max-w-4xl mx-auto px-4 md:px-8">
					<div
						className={`text-center p-8 rounded-lg ${
							isDark
								? "bg-gray-800 border border-gray-700"
								: "bg-white border border-gray-200"
						} shadow-lg`}>
						<div className="mb-6">
							<svg
								className="w-20 h-20 text-green-500 mx-auto mb-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<h2 className="text-3xl font-bold mb-4">🎉 Message Sent !</h2>
							<p
								className={`text-lg mb-6 ${
									isDark ? "text-gray-300" : "text-gray-600"
								}`}>
								Thank you for reaching out! We've received your message and will
								get back to you within 24 hours.
							</p>

							{emailMutation.data?.id && (
								<p
									className={`text-sm mb-4 ${
										isDark ? "text-gray-400" : "text-gray-500"
									}`}>
									Reference ID: {emailMutation.data.id}
								</p>
							)}

							<div className="space-y-4">
								<p className={isDark ? "text-gray-300" : "text-gray-600"}>
									📧 Check your email for a confirmation message
								</p>
								<p className={isDark ? "text-gray-300" : "text-gray-600"}>
									Need immediate assistance? Call us at{" "}
									<a
										href="tel:+16572174737"
										className="text-blue-500 underline font-medium">
										(657) 217-4737
									</a>
								</p>
							</div>
						</div>

						<button
							onClick={resetForm}
							className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
								isDark
									? "bg-orange-500 hover:bg-orange-600 text-white"
									: "bg-teal-600 hover:bg-teal-700 text-white"
							} transform hover:scale-105`}>
							Send Another Message
						</button>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section
			id="contact"
			className={`py-20 mb-24 px-6 transition-all duration-300 ${
				isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
			}`}>
			<div className="max-w-4xl mx-auto px-4 md:px-8">
				{/* Development Banner - Show only when under development */}
				{isFormUnderDevelopment && (
					<div className="text-center mb-8">
						<div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-bold shadow-lg text-sm md:text-base mb-6">
							🚧 Contact Form Under Development - Call Us Directly!
						</div>
					</div>
				)}

				<h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

				<div className="text-center mb-8 space-y-3">
					<p>
						📞 Call us at{" "}
						<a
							href="tel:+16572174737"
							className="text-blue-500 underline font-bold text-lg hover:text-blue-600 transition-colors">
							(657) 217-4737
						</a>
					</p>
					<p>
						📧 Email:{" "}
						<a
							href="mailto:support@bluesproutagency.com"
							className="text-blue-500 underline font-medium hover:text-blue-600 transition-colors">
							support@bluesproutagency.com
						</a>
					</p>

					{/* Calendar Booking Options */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
						{/* Option 1: Direct Email Scheduling */}
						<a
							href="mailto:support@bluesproutagency.com?subject=Schedule%20Free%20Consultation&body=Hi%20Blue%20Sprout%20Agency,%0A%0AI'd%20like%20to%20schedule%20a%20free%20consultation.%0A%0AMy%20preferred%20times:%0A-%20Monday%20to%20Friday:%20[Your%20preferred%20time]%0A-%20Phone%20number:%20[Your%20phone%20number]%0A-%20Business%20type:%20[Your%20business%20type]%0A%0AThank%20you!"
							className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
								isDark
									? "bg-orange-500 text-white hover:bg-orange-600"
									: "bg-teal-600 text-white hover:bg-teal-700"
							}`}>
							📅 Email to Schedule Free Call
						</a>

						{/* Option 2: SMS Scheduling */}
						<a
							href="sms:+16572174737?&body=Hi%20Blue%20Sprout%20Agency!%20I'd%20like%20to%20schedule%20a%20free%20consultation%20for%20my%20business."
							className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2 ${
								isDark
									? "border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
									: "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
							}`}>
							💬 Text to Schedule
						</a>
					</div>

					{/* Calendar Integration Note */}
					<div
						className={`mt-4 p-4 rounded-lg ${
							isDark
								? "bg-blue-900/30 border border-blue-500/30"
								: "bg-blue-50 border border-blue-200"
						}`}>
						<p
							className={`text-sm ${
								isDark ? "text-blue-200" : "text-blue-700"
							}`}>
							📋 <strong>Free 30-minute consultation includes:</strong>
							<br />
							• Business analysis & digital presence audit
							<br />
							• Custom growth strategy recommendations
							<br />• Pricing & timeline discussion
						</p>
					</div>
				</div>

				{/* API Status Indicator */}
				{emailMutation.isError && (
					<div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
						<div className="flex items-center">
							<svg
								className="w-5 h-5 mr-2"
								fill="currentColor"
								viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
									clipRule="evenodd"
								/>
							</svg>
							<div>
								<p className="font-medium">Email Failed to Send</p>
								<p className="text-sm">{emailMutation.error}</p>
							</div>
						</div>
					</div>
				)}

				{/* Form Start */}
				<form
					onSubmit={handleSubmit}
					className={`shadow-lg rounded-lg p-8 md:p-12 space-y-6 ${
						isDark ? "bg-gray-800" : "bg-white"
					} ${isFormUnderDevelopment ? "opacity-75" : ""}`}>
					{/* Form status indicator */}
					{isFormUnderDevelopment && (
						<div
							className={`p-4 rounded-lg border-2 border-dashed ${
								isDark
									? "border-yellow-400 bg-yellow-900/20 text-yellow-200"
									: "border-yellow-500 bg-yellow-50 text-yellow-700"
							}`}>
							<p className="text-center font-medium">
								⚠️ Form is temporarily disabled. Please use the contact
								information above.
							</p>
						</div>
					)}

					<FormField label="Your Name" htmlFor="name" isDark={isDark}>
						<InputField
							type="text"
							name="name"
							value={ContactFormData.name}
							onChange={handleChange}
							placeholder="e.g. First Last"
							isDark={isDark}
							label=""
							required
						/>
					</FormField>

					<FormField label="Your Email" htmlFor="email" isDark={isDark}>
						<InputField
							type="email"
							name="email"
							value={ContactFormData.email}
							onChange={handleChange}
							placeholder="e.g. abc@example.com"
							isDark={isDark}
							label=""
							required
						/>
					</FormField>

					<FormField
						label="Phone Number (Optional)"
						htmlFor="phone"
						isDark={isDark}>
						<InputField
							type="tel"
							name="phone"
							value={ContactFormData.phone}
							onChange={handleChange}
							placeholder="e.g. 1112223333"
							isDark={isDark}
							pattern="[0-9]{10}"
							inputMode="numeric"
							maxLength={10}
							label=""
						/>
					</FormField>

					<FormField
						label="Your Message (10-200 characters)"
						htmlFor="message"
						isDark={isDark}>
						<textarea
							id="message"
							name="message"
							value={ContactFormData.message}
							onChange={handleChange}
							minLength={10}
							maxLength={200}
							required
							rows={4}
							placeholder="Tell us about your project or ask us a question..."
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
							{ContactFormData.message.length}/200 characters
						</div>
					</FormField>

					<div className="mx-4 md:mx-8">
						<button
							type="submit"
							disabled={isButtonDisabled}
							className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
								isButtonDisabled
									? "bg-gray-400 cursor-not-allowed text-gray-600"
									: isDark
									? "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg transform hover:scale-105"
									: "bg-teal-600 text-white hover:bg-teal-700 hover:shadow-lg transform hover:scale-105"
							}`}>
							{isFormUnderDevelopment ? (
								"🚧 Form Under Development"
							) : emailMutation.isLoading ? (
								<span className="flex items-center justify-center">
									<svg
										className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
										xmlns="http://www.w3.org/2000/svg"
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
									Sending Message...
								</span>
							) : !isFormValid ? (
								"📝 Please Fill Required Fields"
							) : (
								"📨 Send Message"
							)}
						</button>
					</div>

					{/* Form validation hints */}
					{!isFormUnderDevelopment && !isFormValid && (
						<div className="text-center space-y-2">
							<p
								className={`text-sm ${
									isDark ? "text-gray-400" : "text-gray-500"
								}`}>
								Required: Name, Email, Message (minimum 10 characters)
							</p>
						</div>
					)}

					{/* Mutation Status Indicators */}
					<div className="text-center space-y-2">
						{emailMutation.isLoading && (
							<p
								className={`text-sm ${
									isDark ? "text-gray-300" : "text-gray-600"
								}`}>
								🚀 Sending your message via email API...
							</p>
						)}
					</div>
				</form>
			</div>
		</section>
	);
};
