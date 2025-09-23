// components/FAQ.tsx - Comprehensive FAQ Component
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import ScrollAnimatedSection from "./ScrollAnimatedSection";

interface FAQItem {
	id: string;
	question: string;
	answer: string;
	category: string;
}

const faqData: FAQItem[] = [
	// Project Process & Timeline
	{
		id: "q1",
		question: "How long does it take to design a website?",
		answer:
			"Most projects take 4-6 weeks depending on scope and complexity. Simple websites can be completed in 2-3 weeks, while complex e-commerce or custom applications may take 8-12 weeks. We provide a detailed timeline during our initial consultation.",
		category: "Process & Timeline",
	},
	{
		id: "q2",
		question: "What information do you need to get started?",
		answer:
			"We'll need your brand guidelines (if available), content, business goals, target audience information, and examples of websites you like. We provide a detailed questionnaire to streamline this process and ensure we capture all your requirements.",
		category: "Process & Timeline",
	},
	{
		id: "q3",
		question: "How many revisions are included in your packages?",
		answer:
			"Our standard packages include 3 rounds of revisions at each milestone. This allows for feedback and refinements while keeping the project on track. Additional revisions can be purchased if needed at $75 per hour.",
		category: "Process & Timeline",
	},

	// Services & Maintenance
	{
		id: "q4",
		question: "Do you also handle website maintenance?",
		answer:
			"Yes! We offer comprehensive maintenance packages including security updates, performance monitoring, content updates, backup management, and priority support. Our maintenance plans start at $99/month.",
		category: "Services",
	},
	{
		id: "q5",
		question: "What happens if I need changes after the website launches?",
		answer:
			"We offer ongoing maintenance packages and can handle updates, security patches, and content changes. Minor updates are included in our maintenance plans, while major changes are quoted separately.",
		category: "Services",
	},
	{
		id: "q6",
		question: "Do you help with digital marketing beyond website design?",
		answer:
			"Absolutely! We offer SEO optimization, social media management, content marketing, Google Ads management, and email marketing services. We can create a comprehensive digital marketing strategy for your business.",
		category: "Services",
	},

	// Technical & Integration
	{
		id: "q7",
		question: "Do you provide website hosting?",
		answer:
			"Yes, we offer managed hosting solutions optimized for speed and security, starting at $29/month. Alternatively, we can work with your preferred hosting provider to ensure everything runs smoothly.",
		category: "Technical",
	},
	{
		id: "q8",
		question: "Will my website be mobile-friendly and fast-loading?",
		answer:
			"Absolutely! All our websites are fully responsive, optimized for mobile devices, and built with modern performance best practices. We guarantee fast loading times and excellent user experience across all devices.",
		category: "Technical",
	},
	{
		id: "q9",
		question:
			"Can you integrate with my existing tools (CRM, payment systems, etc.)?",
		answer:
			"Yes, we specialize in integrations with popular business tools like Stripe, PayPal, Square, HubSpot, Mailchimp, Shopify, and many others. We'll assess your needs and recommend the best integration approach.",
		category: "Technical",
	},

	// Business & Industries
	{
		id: "q10",
		question: "What industries do you work with?",
		answer:
			"We work with businesses across all industries including real estate, healthcare, restaurants, e-commerce, professional services, education, fitness, and more. Our experience spans from startups to established enterprises.",
		category: "Business",
	},
	{
		id: "q11",
		question: "Do you provide content and SEO as well?",
		answer:
			"Yes! We offer content writing services, SEO optimization, keyword research, and ongoing content strategy. Our team includes experienced copywriters and SEO specialists who can help your website rank higher in search results.",
		category: "Business",
	},
	{
		id: "q12",
		question:
			"Can you show me examples of results you've achieved for other clients?",
		answer:
			"We'd be happy to share case studies and specific metrics during our consultation call. We have helped clients achieve 200%+ increases in website traffic, improved conversion rates, and significant business growth.",
		category: "Business",
	},

	// Pricing & Investment
	{
		id: "q13",
		question: "How much does a website cost?",
		answer:
			"Website costs vary based on complexity and features. Basic websites start at $2,999, while e-commerce and custom applications range from $5,999-$15,999+. We provide detailed quotes after understanding your specific requirements.",
		category: "Pricing",
	},
	{
		id: "q14",
		question: "Do you offer payment plans?",
		answer:
			"Yes, we offer flexible payment options including milestone-based payments (50% upfront, 50% on completion) and monthly payment plans for larger projects. We want to make professional web design accessible to all businesses.",
		category: "Pricing",
	},
	{
		id: "q15",
		question: "What's included in your ongoing maintenance packages?",
		answer:
			"Our maintenance packages include security updates, performance monitoring, content updates (up to 2 hours/month), backup management, uptime monitoring, and priority support. Plans start at $99/month.",
		category: "Pricing",
	},

	// Getting Started
	{
		id: "q16",
		question: "How do I know which service package is right for my business?",
		answer:
			"We offer a free consultation where we assess your needs, goals, and budget to recommend the best solution. Every business is unique, and we'll create a custom proposal that fits your specific requirements.",
		category: "Getting Started",
	},
	{
		id: "q17",
		question: "Do you work with businesses outside of California?",
		answer:
			"Yes! We work with clients nationwide and internationally through video calls and digital collaboration tools. Distance is no barrier to creating amazing websites and digital experiences.",
		category: "Getting Started",
	},
	{
		id: "q18",
		question: "What if I'm not satisfied with the final result?",
		answer:
			"Client satisfaction is our top priority. We work closely with you throughout the process with regular check-ins and revisions. If you're not completely satisfied, we'll work together to make it right.",
		category: "Getting Started",
	},

	// Additional Services
	{
		id: "q19",
		question:
			"Can you help with a website redesign, or do you only build new sites?",
		answer:
			"We handle both new websites and complete redesigns. We can also do partial updates if you just need specific improvements like better mobile responsiveness, speed optimization, or updated design elements.",
		category: "Services",
	},
	{
		id: "q20",
		question:
			"What makes Blue Sprout different from other web design agencies?",
		answer:
			"We focus on small business growth with personalized attention, comprehensive digital solutions beyond just design, ongoing partnership rather than one-time projects, and transparent communication throughout the entire process.",
		category: "Business",
	},
];

// Group FAQs by category
const groupedFAQs = faqData.reduce((acc, faq) => {
	if (!acc[faq.category]) {
		acc[faq.category] = [];
	}
	acc[faq.category].push(faq);
	return acc;
}, {} as Record<string, FAQItem[]>);

const FAQItemComponent: React.FC<{
	faq: FAQItem;
	isOpen: boolean;
	onClick: () => void;
}> = ({ faq, isOpen, onClick }) => {
	const { theme } = useTheme();

	return (
		<div
			className="border rounded-lg transition-all duration-300 hover:shadow-md"
			style={{ borderColor: theme.border, backgroundColor: theme.surface }}>
			<button
				onClick={onClick}
				className="w-full p-6 text-left flex items-center justify-between transition-colors"
				style={{ color: theme.text }}>
				<h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
				<div className="flex-shrink-0">
					{isOpen ? (
						<FaChevronUp style={{ color: theme.primary }} />
					) : (
						<FaChevronDown style={{ color: theme.primary }} />
					)}
				</div>
			</button>

			{isOpen && (
				<div
					className="px-6 pb-6 text-base leading-relaxed border-t"
					style={{
						color: theme.textSecondary,
						borderColor: theme.border,
					}}>
					<div className="pt-4">{faq.answer}</div>
				</div>
			)}
		</div>
	);
};

const FAQSection: React.FC<{
	title: string;
	faqs: FAQItem[];
	openItems: Set<string>;
	toggleItem: (id: string) => void;
}> = ({ title, faqs, openItems, toggleItem }) => {
	const { theme } = useTheme();

	return (
		<div className="mb-12">
			<h2
				className="text-2xl font-bold mb-6 text-center"
				style={{ color: theme.text }}>
				{title}
			</h2>
			<div className="space-y-4">
				{faqs.map((faq) => (
					<FAQItemComponent
						key={faq.id}
						faq={faq}
						isOpen={openItems.has(faq.id)}
						onClick={() => toggleItem(faq.id)}
					/>
				))}
			</div>
		</div>
	);
};

export const FAQ: React.FC = () => {
	const { theme } = useTheme();
	const [openItems, setOpenItems] = useState<Set<string>>(new Set());
	const [searchTerm, setSearchTerm] = useState("");

	const toggleItem = (id: string) => {
		const newOpenItems = new Set(openItems);
		if (newOpenItems.has(id)) {
			newOpenItems.delete(id);
		} else {
			newOpenItems.add(id);
		}
		setOpenItems(newOpenItems);
	};

	const expandAll = () => {
		setOpenItems(new Set(faqData.map((faq) => faq.id)));
	};

	const collapseAll = () => {
		setOpenItems(new Set());
	};

	// Filter FAQs based on search term
	const filteredGroupedFAQs = Object.entries(groupedFAQs).reduce(
		(acc, [category, faqs]) => {
			const filteredFaqs = faqs.filter(
				(faq) =>
					faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
					faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
			);
			if (filteredFaqs.length > 0) {
				acc[category] = filteredFaqs;
			}
			return acc;
		},
		{} as Record<string, FAQItem[]>
	);

	return (
		<div
			className="min-h-screen py-20 transition-colors duration-300"
			style={{ backgroundColor: theme.background }}>
			<div className="max-w-4xl mx-auto px-6">
				{/* Header Section */}
				<ScrollAnimatedSection
					title="Frequently Asked Questions"
					subtitle="Everything you need to know about our services and process"
					className="text-center mb-16"
					animationType="fade-up">
					<div className="flex items-center justify-center mb-8">
						<FaQuestionCircle size={48} style={{ color: theme.primary }} />
					</div>
				</ScrollAnimatedSection>

				{/* Search and Controls */}
				<div className="mb-12">
					<div className="max-w-md mx-auto mb-6">
						<input
							type="text"
							placeholder="Search FAQs..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full px-4 py-3 rounded-lg border transition-colors"
							style={{
								backgroundColor: theme.surface,
								borderColor: theme.border,
								color: theme.text,
							}}
						/>
					</div>

					<div className="flex justify-center space-x-4 mb-8">
						<button
							onClick={expandAll}
							className="px-4 py-2 rounded-lg border transition-colors"
							style={{
								borderColor: theme.primary,
								color: theme.primary,
								backgroundColor: "transparent",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.backgroundColor = theme.primary;
								e.currentTarget.style.color = "white";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.backgroundColor = "transparent";
								e.currentTarget.style.color = theme.primary;
							}}>
							Expand All
						</button>
						<button
							onClick={collapseAll}
							className="px-4 py-2 rounded-lg border transition-colors"
							style={{
								borderColor: theme.border,
								color: theme.textSecondary,
								backgroundColor: "transparent",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.backgroundColor = theme.textSecondary;
								e.currentTarget.style.color = "white";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.backgroundColor = "transparent";
								e.currentTarget.style.color = theme.textSecondary;
							}}>
							Collapse All
						</button>
					</div>
				</div>

				{/* FAQ Categories */}
				{Object.entries(filteredGroupedFAQs).map(([category, faqs]) => (
					<FAQSection
						key={category}
						title={category}
						faqs={faqs}
						openItems={openItems}
						toggleItem={toggleItem}
					/>
				))}

				{/* No Results */}
				{Object.keys(filteredGroupedFAQs).length === 0 && searchTerm && (
					<div className="text-center py-12">
						<p style={{ color: theme.textSecondary }} className="text-lg mb-4">
							No FAQs found matching "{searchTerm}"
						</p>
						<button
							onClick={() => setSearchTerm("")}
							className="px-6 py-2 rounded-lg transition-colors"
							style={{ backgroundColor: theme.primary, color: "white" }}>
							Clear Search
						</button>
					</div>
				)}

				{/* Still Have Questions CTA */}
				<ScrollAnimatedSection
					className="text-center mt-16 p-8 rounded-xl"
					animationType="bounce">
					<h2 className="text-2xl font-bold mb-4" style={{ color: theme.text }}>
						Still Have Questions?
					</h2>
					<p className="text-lg mb-6" style={{ color: theme.textSecondary }}>
						Can't find the answer you're looking for? We're here to help!
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="/contact"
							className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-white"
							style={{ backgroundColor: theme.primary }}>
							Contact Us Today
						</a>
						<a
							href="tel:+16572174737"
							className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border"
							style={{
								borderColor: theme.primary,
								color: theme.primary,
							}}>
							Call (657) 217-4737
						</a>
					</div>
				</ScrollAnimatedSection>
			</div>
		</div>
	);
};

export default FAQ;
