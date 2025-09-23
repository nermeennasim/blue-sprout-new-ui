// components/about/AboutCardsSection.tsx
import React from "react";
import { AboutCardImageLeft } from "./cards/AboutCardImageLeft";
import { AboutCardImageRight } from "./cards/AboutCardImageRight";
import aboutCards from "../about/data/aboutCards.json";

export const AboutCardsSection: React.FC = () => {
	return (
		<section className="space-y-8">
			{aboutCards.map((card, idx) =>
				idx % 2 === 0 ? (
					<AboutCardImageLeft
						key={card.title}
						title={card.title}
						description={card.description}
						imageUrl={card.imageUrl}
						imageAlt={card.imageAlt}
						imageCaption={card.imageCaption}
						highlights={card.highlights}
						accentColor={card.accentColor}
					/>
				) : (
					<AboutCardImageRight
						key={card.title}
						title={card.title}
						description={card.description}
						imageUrl={card.imageUrl}
						imageAlt={card.imageAlt}
						imageCaption={card.imageCaption}
						highlights={card.highlights}
						accentColor={card.accentColor}
					/>
				)
			)}
		</section>
	);
};
