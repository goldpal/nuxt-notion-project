import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	head: {
		charset: "utf-8",
		viewport: "width=device-width, initial-scale=1",
		link: [
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/public/icons/favicon.svg",
			},
		],
	},
	css: ["@/assets/css/notion.css", "@/assets/css/tailwind.css"],
	runtimeConfig: {
		public: {
			notionRootPage: "",
		},
	},
	buildModules: ["@nuxtjs/tailwindcss"],
});
