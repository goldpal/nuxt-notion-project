<template>
	<section class="notion-code">
		<pre
			v-for="(element, index) in block[block.type].rich_text"
			:key="index"
			>{{ element[element.type].content }}</pre
		>
		<div v-if="block[block.type].caption" class="notion-caption">
			<NotionRichText :richText="block[block.type].caption" />
		</div>
	</section>
</template>

<script setup>
const props = defineProps(["block"]);
</script>
