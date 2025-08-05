// pages/Contact.tsx
import { Contact as ContactComponent } from "../components/Contact";

interface ContactPageProps {
	isDark: boolean;
}

const Contact: React.FC<ContactPageProps> = ({ isDark }) => {
	return (
		<div className="pt-32">
			<ContactComponent isDark={isDark} />
		</div>
	);
};

export default Contact;
