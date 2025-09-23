// App.tsx - Redesigned with Theme Context
import { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Loading from "./pages/Loading";
import FAQs from "./components/FAQs";
// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Contact = lazy(() => import("./pages/Contact"));
const Clients = lazy(() => import("./pages/Clients"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Privacy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/TermsOfService"));

// Global Analytics Setup
declare global {
	interface Window {
		dataLayer: any[];
	}
}

// Main App Content Component (needs theme context)
const AppContent = () => {
	const { theme, isDark } = useTheme();

	// Google Analytics setup
	useEffect(() => {
		const script = document.createElement("script");
		script.async = true;
		script.src = `https://www.googletagmanager.com/gtag/js?id=${
			import.meta.env.VITE_GA_MEASUREMENT_ID
		}`;
		document.head.appendChild(script);

		window.dataLayer = window.dataLayer || [];
		function gtag(...args: any[]) {
			(window.dataLayer as any).push(args);
		}
		gtag("js", new Date());
		gtag("config", import.meta.env.VITE_GA_MEASUREMENT_ID);
	}, []);

	return (
		<Router>
			<div
				className="min-h-screen transition-all duration-300 relative"
				style={{
					color: theme.text,
					backgroundColor: theme.background,
				}}>
				{/* Dynamic Background Layer */}
				<div className="fixed inset-0 w-full h-full -z-10">
					{/* Background Image - Only show on dark theme */}
					{isDark && (
						<>
							<div
								className="absolute inset-0 w-full h-full"
								style={{
									backgroundImage:
										'url("https://cdn.shopify.com/s/files/1/0262/9838/4432/files/0830-mogo2pro-Projector_for_Conference_Room.png?v=1725501470")',
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundAttachment: "fixed",
								}}
							/>
							{/* Dark theme overlays */}
							<div
								className="absolute inset-0"
								style={{ backgroundColor: `${theme.background}cc` }}
							/>
							<div
								className="absolute inset-0 mix-blend-multiply"
								style={{ backgroundColor: `${theme.primary}60` }}
							/>
						</>
					)}

					{/* Dot pattern - for both themes */}
					<div className="absolute inset-0 opacity-10">
						<div
							className="absolute inset-0"
							style={{
								backgroundImage: `radial-gradient(circle at 1px 1px, ${theme.primary} 1px, transparent 0)`,
								backgroundSize: "50px 50px",
							}}
						/>
					</div>

					{/* Floating Elements - adjusted for theme */}
					<div className="absolute inset-0 overflow-hidden pointer-events-none">
						<div
							className="absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
							style={{ backgroundColor: theme.primary }}
						/>
						<div
							className="absolute top-40 right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"
							style={{ backgroundColor: isDark ? "#ffffff" : theme.secondary }}
						/>
						<div
							className="absolute -bottom-8 left-40 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow"
							style={{ backgroundColor: theme.secondary }}
						/>
					</div>
				</div>

				{/* Navigation */}
				<Navbar />

				{/* Main Content with Suspense */}
				<main className="relative z-10">
					<Suspense fallback={<Loading />}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/services" element={<Services />} />
							<Route path="/clients" element={<Clients />} />
							<Route path="/testimonials" element={<Testimonials />} />
							<Route path="/contact" element={<Contact />} />
							{/* 404 Route - MUST be last */}
							<Route path="*" element={<NotFound />} />
							<Route path="/privacy" element={<Privacy />} />
							<Route path="/terms" element={<Terms />} />
							<Route path="/faqs" element={<FAQs />} />

							<Route path="/loading-test" element={<Loading />} />
						</Routes>
					</Suspense>
				</main>

				{/* Footer */}
				<Footer />

				{/* Global Animations */}
				<style>{`
          @keyframes float {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          
          .animate-float { 
            animation: float 7s ease-in-out infinite; 
          }
          .animate-float-delayed { 
            animation: float 7s ease-in-out infinite 2s; 
          }
          .animate-float-slow { 
            animation: float 10s ease-in-out infinite 4s; 
          }
        `}</style>
			</div>
		</Router>
	);
};

// Root App Component with Theme Provider
export const App = () => {
	return (
		<ThemeProvider defaultTheme="dark">
			<AppContent />
		</ThemeProvider>
	);
};
