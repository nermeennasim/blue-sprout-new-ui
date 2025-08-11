/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {},
	},

	darkMode: "class",
	theme: {
		extend: {
			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px, -50px) scale(1.1)",
					},
					"66%": {
						transform: "translate(-20px, 20px) scale(0.9)",
					},
					"100%": {
						transform: "translate(0px, 0px) scale(1)",
					},
				},
				gradient: {
					"0%": {
						"background-position": "0% 50%",
					},
					"50%": {
						"background-position": "100% 50%",
					},
					"100%": {
						"background-position": "0% 50%",
					},
				},
				textDance: {
					"0%, 100%": {
						transform: "translateY(0px) rotate(0deg)",
					},
					"25%": {
						transform: "translateY(-5px) rotate(1deg)",
					},
					"50%": {
						transform: "translateY(0px) rotate(-1deg)",
					},
					"75%": {
						transform: "translateY(-3px) rotate(0.5deg)",
					},
				},
				slideUp: {
					from: {
						transform: "translateY(50px)",
						opacity: "0",
					},
					to: {
						transform: "translateY(0)",
						opacity: "1",
					},
				},
				slideInLeft: {
					from: {
						transform: "translateX(-100px)",
						opacity: "0",
					},
					to: {
						transform: "translateX(0)",
						opacity: "1",
					},
				},
				slideInRight: {
					from: {
						transform: "translateX(100px)",
						opacity: "0",
					},
					to: {
						transform: "translateX(0)",
						opacity: "1",
					},
				},
				slideInUp: {
					from: {
						transform: "translateY(50px)",
						opacity: "0",
					},
					to: {
						transform: "translateY(0)",
						opacity: "1",
					},
				},
				fadeInUp: {
					from: {
						transform: "translateY(30px)",
						opacity: "0",
					},
					to: {
						transform: "translateY(0)",
						opacity: "1",
					},
				},
				flyRight: {
					"0%": {
						transform: "translateX(-100vw)",
					},
					"50%": {
						transform: "translateX(50vw)",
					},
					"100%": {
						transform: "translateX(100vw)",
					},
				},
				flyLeft: {
					"0%": {
						transform: "translateX(100vw)",
					},
					"50%": {
						transform: "translateX(-50vw)",
					},
					"100%": {
						transform: "translateX(-100vw)",
					},
				},
				float: {
					"0%, 100%": {
						transform: "translateY(0px)",
					},
					"50%": {
						transform: "translateY(-10px)",
					},
				},
				pulseGlow: {
					"0%, 100%": {
						"box-shadow": "0 0 20px rgba(147, 51, 234, 0.3)",
					},
					"50%": {
						"box-shadow": "0 0 40px rgba(147, 51, 234, 0.6)",
					},
				},
				pulseRing: {
					"0%": {
						"box-shadow": "0 0 0 0 rgba(147, 51, 234, 0.7)",
					},
					"70%": {
						"box-shadow": "0 0 0 10px rgba(147, 51, 234, 0)",
					},
					"100%": {
						"box-shadow": "0 0 0 0 rgba(147, 51, 234, 0)",
					},
				},
				spinSlow: {
					from: {
						transform: "rotate(0deg)",
					},
					to: {
						transform: "rotate(360deg)",
					},
				},
				bounceCustom: {
					"0%, 100%": {
						transform: "translateY(0)",
					},
					"50%": {
						transform: "translateY(-20px)",
					},
				},
			},
			animation: {
				blob: "blob 7s infinite",
				gradient: "gradient 8s ease infinite",
				"text-dance": "textDance 3s ease-in-out infinite",
				"slide-up": "slideUp 1s ease-out",
				"slide-up-delay": "slideUp 1s ease-out 0.3s both",
				"slide-in-left": "slideInLeft 1s ease-out 0.5s both",
				"slide-in-right": "slideInRight 1s ease-out 0.7s both",
				"slide-in-up": "slideInUp 1s ease-out 0.6s both",
				"fade-in-up": "fadeInUp 1s ease-out 0.8s both",
				"fly-right": "flyRight 8s linear infinite",
				"fly-left": "flyLeft 8s linear infinite 2s",
				float: "float 3s ease-in-out infinite",
				"pulse-glow": "pulseGlow 2s ease-in-out infinite",
				"pulse-ring": "pulseRing 2s ease-in-out infinite",
				"spin-slow": "spinSlow 8s linear infinite",
				"bounce-slow": "bounceCustom 3s ease-in-out infinite",
			},
			backgroundSize: {
				"400%": "400% 400%",
			},
			animationDelay: {
				2000: "2s",
				4000: "4s",
			},
		},
	},
	plugins: [react(), tailwindcss(), autoprefixer()],
};
