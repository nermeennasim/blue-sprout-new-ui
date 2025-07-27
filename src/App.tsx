import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Section from "./components/Section"; // Reusable wrapper
import { Contact } from "./components/Contact";

const App = () => {
	const [isDark, setIsDark] = useState(false);

	const toggleTheme = () => setIsDark(!isDark);

	return (
		<div
			className={`transition-all duration-300 ${
				isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
			}`}>
			<Navbar isDark={isDark} toggleTheme={toggleTheme} />
			<Hero isDark={isDark} />

			<div className="bg-accent-dark text-white p-4 rounded shadow-glow-orange">
				This is using your custom Tailwind colors and shadow!
			</div>
			<Section id="about" className="mb-24 py-20">
				<h2 className="text-3xl font-bold mb-4">About Us</h2>
				<p className="max-w-3xl">
					We are a team of creatives and developers helping small businesses
					grow their digital presence through modern, user-friendly solutions.
				</p>
			</Section>

			<Section id="services" className="mb-24 py-20">
				<h2 className="text-3xl font-bold mb-4">Our Services</h2>
				<p className="max-w-3xl">
					We provide Social Media Management, Website Development, and more.
				</p>
			</Section>

			<Section id="pricing" className="mb-24 py-20">
				<h2 className="text-3xl font-bold mb-4">Pricing</h2>
				<p className="max-w-3xl">
					We offer flexible monthly plans to suit your business needs.
				</p>
			</Section>

			<Section id="testimonials" className="mb-24 py-20">
				<h2 className="text-3xl font-bold mb-4">Testimonials</h2>
				<p className="max-w-3xl">
					What our amazing clients say about working with Blue Sprout Agency.
				</p>
			</Section>

			<section id="contact" className="scroll-mt-24 mb-24 py-20">
				<Contact isDark={isDark} />
			</section>
		</div>
	);
};

export default App;
