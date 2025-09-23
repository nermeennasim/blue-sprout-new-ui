// components/ScrollAnimatedSection.tsx
import React, { useEffect, useRef, useState } from "react";

interface ScrollAnimatedSectionProps {
	id?: string;
	children: React.ReactNode;
	className?: string;
	title?: string;
	subtitle?: string;
	animationType?:
		| "fade-up"
		| "slide-left"
		| "slide-right"
		| "dance"
		| "bounce"
		| "slide-up";
}

export const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({
	id = "",
	children,
	className = "",
	title,
	subtitle,
	// isDark = false,
	animationType = "fade-up",
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -50px 0px",
			}
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	const getAnimationClass = () => {
		if (!isVisible) return "opacity-0 transform translate-y-8";

		switch (animationType) {
			case "slide-left":
				return "animate-slide-in-from-left";
			case "slide-right":
				return "animate-slide-in-from-right";
			case "dance":
				return "animate-text-dance-in";
			case "bounce":
				return "animate-bounce-up";
			default:
				return "animate-fade-slide-up";
		}
	};

	const getTitleAnimationClass = () => {
		if (!isVisible) return "opacity-0 transform translate-y-8";
		return "animate-title-dance";
	};

	const getSubtitleAnimationClass = () => {
		if (!isVisible) return "opacity-0 transform translate-y-8";
		return "animate-subtitle-slide";
	};

	return (
		<>
			<section
				ref={sectionRef}
				id={id}
				className={`py-20 px-6 transition-all duration-1000 scroll-mt-24 ${className}`}>
				<div className="max-w-6xl mx-auto">
					{/* Animated Title and Subtitle Header */}
					{(title || subtitle) && (
						<div className="text-center mb-16">
							{title && (
								<h2
									className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${getTitleAnimationClass()}`}>
									{title.split(" ").map((word, index) => (
										<span
											key={index}
											className={`inline-block mr-3 ${
												isVisible
													? "animate-word-dance"
													: "opacity-0 transform translate-y-4"
											}`}
											style={{ animationDelay: `${index * 0.1}s` }}>
											{word}
										</span>
									))}
								</h2>
							)}
							{subtitle && (
								<p
									className={`text-lg md:text-xl max-w-3xl mx-auto transition-all duration-1000 delay-500 
									 ${getSubtitleAnimationClass()}`}>
									{subtitle}
								</p>
							)}
						</div>
					)}

					{/* Animated Section Content */}
					<div
						className={`transition-all duration-1000 delay-700 ${getAnimationClass()}`}>
						{children}
					</div>
				</div>
			</section>

			{/* Animation Styles */}
			<style>{`
        @keyframes fade-slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-from-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-from-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes text-dance-in {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-10px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bounce-up {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.8);
          }
          60% {
            opacity: 0.8;
            transform: translateY(-15px) scale(1.1);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes title-dance {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          50% {
            opacity: 0.7;
            transform: translateY(-5px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes subtitle-slide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes word-dance {
          0% {
            opacity: 0;
            transform: translateY(20px) rotateX(90deg);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-5px) rotateX(0deg) scale(1.1);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
          }
        }

        .animate-fade-slide-up {
          animation: fade-slide-up 0.8s ease-out forwards;
        }

        .animate-slide-in-from-left {
          animation: slide-in-from-left 1s ease-out forwards;
        }

        .animate-slide-in-from-right {
          animation: slide-in-from-right 1s ease-out forwards;
        }

        .animate-text-dance-in {
          animation: text-dance-in 1.2s ease-out forwards;
        }

        .animate-bounce-up {
          animation: bounce-up 1s ease-out forwards;
        }

        .animate-title-dance {
          animation: title-dance 1s ease-out forwards;
        }

        .animate-subtitle-slide {
          animation: subtitle-slide 0.8s ease-out forwards;
        }

        .animate-word-dance {
          animation: word-dance 0.8s ease-out forwards;
        }
      `}</style>
		</>
	);
};

export default ScrollAnimatedSection;
