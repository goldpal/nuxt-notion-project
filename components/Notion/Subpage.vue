<template>
	<NuxtLink v-if="!pending" :to="`/page/${block.id}`" class="notion-subpage">
		<span class="flex items-center gap-2 notion-subpage-text">
			<NotionIcon :icon="header.icon" />
			{{ block.child_page.title }}
			&neArr;</span
		>
	</NuxtLink>
	<Skeleton v-else class="h-8" />
</template>

<script setup>
const props = defineProps(["block"]);
const { pending, data: header } = await useLazyFetch(
	`/api/notion/retrieve-page/${props.block.id}`
);
watch(header, (newHeader) => {});
</script>
