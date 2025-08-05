// pages/Testimonials.tsx
import Section from "../components/Section";
import { Star, Quote } from "lucide-react";

interface TestimonialsProps {
	isDark: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ isDark }) => {
	return (
		<Section id="testimonials-page" className="pt-32 pb-20">
			<div className="text-center mb-16">
				<h1 className="text-4xl font-bold mb-8">Client Success Story</h1>
				<p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
					Real results from a local business we helped grow in Chino, California
				</p>
			</div>

			<div className="max-w-4xl mx-auto">
				<div
					className={`p-8 md:p-12 rounded-2xl shadow-2xl border ${
						isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
					}`}>
					<div className="flex flex-col md:flex-row items-center md:items-start gap-8">
						<div className="flex-shrink-0">
							<div
								className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold ${
									isDark
										? "bg-gradient-to-br from-purple-500 to-pink-500"
										: "bg-gradient-to-br from-purple-600 to-pink-600"
								} text-white shadow-lg`}>
								BT
							</div>
						</div>

						<div className="flex-1 text-center md:text-left">
							<Quote
								className={`w-8 h-8 mb-4 mx-auto md:mx-0 ${
									isDark ? "text-purple-400" : "text-purple-600"
								}`}
							/>

							<div className="flex justify-center md:justify-start mb-4">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="w-5 h-5 text-yellow-400 fill-current"
									/>
								))}
							</div>

							<p
								className={`text-lg md:text-xl mb-6 italic leading-relaxed ${
									isDark ? "text-gray-300" : "text-gray-700"
								}`}>
								"Blue Sprout Agency transformed our online presence completely!
								As a local DJ service in Chino, we were struggling to reach new
								clients. Their social media strategy and professional website
								helped us book 3x more events. The team really understands the
								local market and knows how to make small businesses shine
								online."
							</p>

							<div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-bold">
								🚀 3x More Event Bookings
							</div>

							<div>
								<div
									className={`font-bold text-xl ${
										isDark ? "text-white" : "text-gray-900"
									}`}>
									BlackTie Events Founder
								</div>
								<div
									className={`text-lg ${
										isDark ? "text-purple-400" : "text-purple-600"
									}`}>
									Local DJ Service
								</div>
								<div
									className={`text-sm ${
										isDark ? "text-gray-400" : "text-gray-500"
									}`}>
									📍 Chino, California
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className={`text-center mt-16 p-8 rounded-2xl ${
					isDark
						? "bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30"
						: "bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200"
				}`}>
				<h2
					className={`text-2xl md:text-3xl font-bold mb-4 ${
						isDark ? "text-white" : "text-gray-800"
					}`}>
					Ready to Grow Like BlackTie Events?
				</h2>
				<p
					className={`text-lg mb-6 max-w-2xl mx-auto ${
						isDark ? "text-gray-300" : "text-gray-600"
					}`}>
					Let's create your success story next. Get the same results for your
					business.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="tel:+16572174737"
						className="px-8 py-4 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-colors">
						📞 Call: (657) 217-4737
					</a>
					<a
						href="sms:+16572174737?&body=Hi%20Blue%20Sprout%20Agency!%20I'd%20like%20to%20discuss%20growing%20my%20business%20like%20BlackTie%20Events%20did."
						className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-bold hover:bg-purple-600 hover:text-white transition-colors">
						💬 Text Us
					</a>
				</div>
			</div>
		</Section>
	);
};

export default Testimonials;
