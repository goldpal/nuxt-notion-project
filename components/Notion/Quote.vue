<script setup>
const props = defineProps(["block"]);

// This is to extract block info without the rich text
// const withoutQuote = computed(() => {
//     const { ['quote']: _, ...without } = props.block;
//     return without
// })
</script>

<template>
	<blockquote class="notion-quote">
		<NotionRichText :richText="block.quote.rich_text" />
	</blockquote>
</template>
