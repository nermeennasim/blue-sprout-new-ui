import React, { useState } from "react";
import { InputField } from "./InputField";
import { FormField } from "./FormField";

interface ContactProps {
	isDark: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDark }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form Submitted", formData);
		// TODO: Connect to AWS SES or email service
	};

	return (
		<section
			id="contact"
			className={`py-20 mb-24 px-6 transition-all duration-300 ${
				isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
			}`}>
			<div className="max-w-4xl mx-auto px-4 md:px-8">
				<h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

				<div className="text-center mb-8 space-y-3">
					<p>
						📞 Call us at{" "}
						<a href="tel:+16572174737" className="text-blue-500 underline">
							(657) 217-4737
						</a>
					</p>
					<p>
						📧 Email:{" "}
						<a
							href="mailto:support@bluesproutagency.com"
							className="text-blue-500 underline">
							support@bluesproutagency.com
						</a>
					</p>
					<a
						href="https://calendly.com/your-calendar-link"
						target="_blank"
						rel="noopener noreferrer"
						className={`inline-block mt-4 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
							isDark
								? "bg-orange-500 text-white hover:bg-orange-600"
								: "bg-teal-600 text-white hover:bg-teal-700"
						}`}>
						📅 Book a Free Call
					</a>
				</div>

				{/* Form Start */}
				<form
					onSubmit={handleSubmit}
					className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 md:p-12 space-y-6">
					<FormField label="Your Name" htmlFor="name" isDark={isDark}>
						<InputField
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="e.g. First Last"
							isDark={isDark}
							label={""}
						/>
					</FormField>

					<FormField label="Your Email" htmlFor="email" isDark={isDark}>
						<InputField
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="e.g. abc@example.com"
							isDark={isDark}
							label={""}
						/>
					</FormField>

					<FormField label="Phone Number" htmlFor="phone" isDark={isDark}>
						<InputField
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							placeholder="e.g. 1112223333"
							isDark={isDark}
							pattern="[0-9]{10}"
							inputMode="numeric"
							maxLength={10}
							label={""}
						/>
					</FormField>

					<FormField
						label="Your Message (max 200 characters)"
						htmlFor="message"
						isDark={isDark}>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							maxLength={200}
							required
							rows={4}
							placeholder="Type your message here..."
							className="p-3 border rounded-lg w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 resize-none"
						/>
					</FormField>

					<div className="mx-4 md:mx-8">
						<button
							type="submit"
							className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
								isDark
									? "bg-orange-500 text-white hover:bg-orange-600"
									: "bg-teal-600 text-white hover:bg-teal-700"
							}`}>
							📨 Send Message
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};
