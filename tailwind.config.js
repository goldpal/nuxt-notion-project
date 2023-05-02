module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
	],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			{
				corporate: {
					...require("daisyui/src/colors/themes")[
						"[data-theme=corporate]"
					],
					"--btn-text-case": "uppercase",
					"--rounded-btn": "0.2rem",
					"--rounded-badge": "0.5rem",
					"--animation-btn": "0.25s",
				},
				black: {
					...require("daisyui/src/colors/themes")[
						"[data-theme=black]"
					],
					"--btn-text-case": "uppercase",
					"--rounded-btn": "0.2rem",
					"--rounded-badge": "0.5rem",
					"--animation-btn": "0.25s",
				},
			},
		],
		darkTheme: "black",
	},
};
// #10151a
