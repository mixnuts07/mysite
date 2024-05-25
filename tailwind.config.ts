import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./_components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	plugins: [require("@tailwindcss/typography")],
	theme: {
		extend: {
			colors: {
				primary: "rgb(249,245,236)",
			},
		},
	},
};
export default config;
