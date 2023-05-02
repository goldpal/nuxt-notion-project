<script setup>
const props = defineProps(["block"]);
const { data: content } = await useFetch(
	`/api/notion/retrieve-block-children/${props.block.id}`
);
</script>

<template>
	<div
		class="notion-column-list"
		:class="{
			'grid-cols-2': content.results.length == 2,
			'grid-cols-3': content.results.length == 3,
			'grid-cols-4': content.results.length == 4,
			'grid-cols-5': content.results.length == 5,
			'grid-cols-6': content.results.length == 6,
		}"
	>
		<section
			class="notion-column"
			:class="{
				'col-span-2 lg:col-span-1': content.results.length == 2,
				'col-span-3 lg:col-span-1': content.results.length == 3,
				'col-span-4 lg:col-span-1': content.results.length == 4,
				'col-span-5 lg:col-span-1': content.results.length == 5,
				'col-span-6 lg:col-span-1': content.results.length == 6,
			}"
			v-for="column in content.results"
			:key="column.id"
		>
			<NotionContent :page_id="column.id" />
		</section>
	</div>
</template>
