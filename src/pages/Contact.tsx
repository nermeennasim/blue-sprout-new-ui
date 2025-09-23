// pages/Contact.tsx - Updated with Theme Context
import React from "react";
import { Contact as ContactComponent } from "../components/Contact";
import { useTheme } from "../context/ThemeContext";

const Contact: React.FC = () => {
	const { theme } = useTheme();

	return (
		<div
			className="pt-32 min-h-screen"
			style={{ backgroundColor: theme.background }}>
			<ContactComponent />
		</div>
	);
};

export default Contact;
