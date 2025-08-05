// pages/About.tsx
import Section from "../components/Section";

interface AboutProps {
	isDark: boolean;
}

const About: React.FC<AboutProps> = ({}) => {
	return (
		<Section id="about-page" className="pt-32 pb-20">
			<h1 className="text-4xl font-bold mb-8">About Blue Sprout Agency</h1>
			<div className="max-w-4xl mx-auto text-left space-y-6">
				<p className="text-lg">
					We are a team of creatives and developers helping small businesses
					grow their digital presence through modern, user-friendly solutions.
				</p>
				<p className="text-lg">
					Founded with the mission to make professional web development
					accessible to businesses of all sizes, we combine creativity with
					technical expertise to deliver outstanding results.
				</p>
			</div>
		</Section>
	);
};

export default About;
