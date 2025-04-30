module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#62BB46",
				secondary: "#000",
				lightBlack: "#4d4d4d",
				default: "#F9F9F9",
				lightGray: "#EDEDED",
				border: "#CDCDCD",
			},
			fontFamily: {
				sf: ["SF Pro Text", "sans-serif"],
			},
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1440px",
				"3xl": "1650px",
			},
		},
	},
	plugins: [],
};
