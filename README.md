## Table of contents

-   [Front-end Example (Nuxt)](#front-end-example)
-   [Back-end Example (Notion)](#back-end-example)
-   [Documentation](#documentation)
-   [Stack](#stack)
-   [Setup](#setup)
-   [Development Server](#development-server)
-   [Production](#production)

## Stack

<p align="center">
    <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nuxtjs/nuxtjs-original.svg" width=32 height=32>
    <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/tailwindcss/tailwindcss-plain.svg" width=32 height=32>
    <img src="https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg" width=32 height=32>
</p>

## Documentation

Look at the [Nuxt 3 documentation](https://v3.nuxtjs.org), [Tailwind documentation](https://tailwindcss.com/docs/installation) and [Notion API documentation](https://developers.notion.com/reference/intro) to learn more.
This application is also using [DaisyUI](daisyui.com), a TailwindCSS component library.

## Setup

1. Clone this repository

```sh
git clone https://github.com/goldpal/nuxt-notion-project
```

2. Create an `.env` file in the root folder

```env
NOTION_ACCESS_TOKEN="your-integration-access-token"
NUXT_PUBLIC_NOTION_ROOT_PAGE="page-you-want-to-render"
```

3. Delete `layouts/` folder

4. Replace the existing `/pages/index.vue` file with:

```html
<script setup>
	const config = useRuntimeConfig();
	navigateTo(`/page/${config.notionRootPage}`);
</script>
```

5. Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npx nuxi dev
```

## Production

Build the application for production:

```bash
npx nuxi build
```

Locally preview production build:

```bash
npx nuxi preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Roadmap

Check what is planned for this project [here](https://lustrous-sawine-579ca9.netlify.app/)
