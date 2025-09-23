// types/aboutCards.ts
export interface ImageData {
  src: string;
  alt: string;
  description: string;
}

export interface ImageCategories {
  team: ImageData[];
  workspace: ImageData[];
  technology: ImageData[];
  results: ImageData[];
}

export interface AboutCardData {
  id: string;
  layout: "image-left" | "image-right";
  title: string;
  subtitle?: string;
  content: string[];
  highlights: string[];
  image: {
    category: keyof ImageCategories;
    index: number;
    caption?: string;
  };
  accent_color: string;
}

export interface AboutCardsConfig {
  imageCategories: ImageCategories;
  cards: AboutCardData[];
}

// types/aboutCards.ts
export interface AboutCard {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption?: string;
  highlights: string[];
  accentColor: string;
}// data/aboutCards.json