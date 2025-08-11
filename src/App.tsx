// App.tsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";

const App = () => {
	const [isDark, setIsDark] = useState(false);

	const toggleTheme = () => setIsDark(!isDark);

	return (
		<Router>
			<div
				className={`min-h-screen transition-all duration-300 ${
					isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
				}`}>
				<Navbar isDark={isDark} toggleTheme={toggleTheme} />

				<Routes>
					<Route path="/" element={<Home isDark={isDark} />} />
					<Route path="/about" element={<About isDark={isDark} />} />
					<Route path="/services" element={<Services isDark={isDark} />} />
					<Route path="/clients" element={<Clients isDark={isDark} />} />

					<Route path="/pricing" element={<Pricing isDark={isDark} />} />
					<Route
						path="/testimonials"
						element={<Testimonials isDark={isDark} />}
					/>
					<Route path="/contact" element={<Contact isDark={isDark} />} />
				</Routes>

				<Footer isDark={isDark} />
			</div>
		</Router>
	);
};

export default App;
