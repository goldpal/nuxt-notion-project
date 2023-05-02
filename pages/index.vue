<template>
	<main class="max-w-6xl mx-auto p-6 lg:p-0">
		<article class="prose max-w-none py-10">
			<h1 class="text-5xl">Nuxt 3 Notion</h1>
			<p>Render your Notion page with Nuxt</p>
			<p>
				<NuxtLink
					:to="`/page/${config.notionRootPage}`"
					class="btn btn-block lg:btn-md btn-outline gap-2"
				>
					Go to the page &rArr;
				</NuxtLink>
			</p>
			<h2>To do</h2>
			<div>
				<label class="notion-to-do-label" v-for="todo in todos" :key="todo.todo">
					<input type="checkbox" class="notion-to-do-checkbox" v-model="todo.done"/>
					<div
						class="notion-to-do-label-text"
						:class="{
							'notion-to-do-label-text-checked': todo.done,
						}"
					>{{todo.todo}}</div>
				</label>
			</div>
			<h2>Component list</h2>
			<table>
				<thead>
					<th>Status</th>
					<th>Component type</th>
					<th>Comment</th>
				</thead>
				<tbody>
					<tr
						v-for="component in components.sort((a, b) =>
							a.progress > b.progress
								? -1
								: b.progress > a.progress
								? 1
								: 0
						)"
						:key="component.name"
					>
						<td>
							<span
								class="badge"
								:class="{
									'badge-success': component.progress > 60,
									'badge-warning':
										component.progress > 30 &&
										component.progress <= 60,
									'badge-error': component.progress <= 40,
								}"
								max="100"
							>
								{{ component.progress }}%
							</span>
						</td>
						<td class="font-bold">{{ component.name }}</td>
						<td>{{ component.comment }}</td>
					</tr>
				</tbody>
			</table>
		</article>
	</main>
</template>

<script setup>
const config = useRuntimeConfig();
const todos = ref([
	{
		todo: "Create link to page component",
		done: true,
	},
	{
		todo: "Make header columnd and header row visible",
		done: false,
	},
	{
		todo: "Make bullet list display children",
		done: false,
	},
	{
		todo: "Code highlighting",
		done: false,
	},
	{
		todo: "Make numbered list items numbered",
		done: false,
	},
	{
		todo: "Make inline equations",
		done: false,
	},
	{
		todo: "Make inline equations",
		done: false,
	},
	{
		todo: "Create bookmark component",
		done: false,
	},
	{
		todo: "Create embed component",
		done: false,
	},
	{
		todo: "Create video component",
		done: false,
	},
	{
		todo: "Create audio component",
		done: false,
	},
	{
		todo: "Create file component",
		done: false,
	},
	{
		todo: "Create database component",
		done: false,
	},
	{
		todo: "Create breadcrumbs component",
		done: false,
	},
]);
const components = ref([
	{
		name: "Heading 1",
		progress: 100,
		comment: "",
	},
	{
		name: "Heading 2",
		progress: 100,
		comment: "",
	},
	{
		name: "Heading 3",
		progress: 100,
		comment: "",
	},
	{
		name: "Rich Text",
		progress: 100,
		comment: "",
	},
	{
		name: "To-do list",
		progress: 100,
		comment: "",
	},
	{
		name: "Subpage",
		progress: 100,
		comment: "",
	},
	{
		name: "Table",
		progress: 90,
		comment: "No visual header column, header row",
	},
	{
		name: "Bullet list",
		progress: 80,
		comment: "Doesn't display children items",
	},
	{
		name: "Numbered list",
		progress: 60,
		comment:
			"Numbered lists don't get numbered, doesn't display children items",
	},
	{
		name: "Quote",
		progress: 100,
		comment: "API doesn't send any info on large option for quotes",
	},
	{
		name: "Divider",
		progress: 100,
		comment: "",
	},
	{
		name: "Link to page",
		progress: 100,
		comment: "",
	},
	{
		name: "Callout",
		progress: 100,
		comment: "",
	},
	{
		name: "Columns",
		progress: 100,
		comment: "",
	},
	{
		name: "Code",
		progress: 80,
		comment: "No syntax highlighting",
	},
	{
		name: "User mention",
		progress: 80,
		comment: "User gets only highlighted",
	},
	{
		name: "Page mentioning",
		progress: 100,
		comment: "",
	},
	{
		name: "Date mentioning / reminder",
		progress: 100,
		comment: "Right now no reminder info is passed via API",
	},
	{ name: "Emojis", progress: 100, comment: "" },
	{
		name: "Inline equation",
		progress: 50,
		comment: "Inline equations get rendered as block equations for now",
	},
	{ name: "Images", progress: 100, comment: "" },
	{
		name: "Bookmark",
		progress: 0,
		comment: "Trying to find nice iframe npm package",
	},
	{
		name: "Embed",
		progress: 0,
		comment: "Trying to find nice iframe npm package",
	},
	{ name: "Video", progress: 0, comment: "Not yet implemented" },
	{ name: "Audio", progress: 0, comment: "Not yet implemented" },
	{ name: "File", progress: 0, comment: "Not yet implemented" },
	{
		name: "Databases",
		progress: 0,
		comment: "Not yet implemented; hard to implement. Will think about it",
	},
	{
		name: "Table of contents",
		progress: 70,
		comment: "Doesn't display headings when in a collumn",
	},
	{ name: "Block equation", progress: 100, comment: "" },
	{ name: "Breadcrumbs", progress: 0, comment: "Not yet implemented" },
	{ name: "Synced block", progress: 100, comment: "" },
	{ name: "Toggle headings", progress: 100, comment: "" },
]);
</script>
