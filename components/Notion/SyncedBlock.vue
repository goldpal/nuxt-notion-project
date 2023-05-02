<script setup>
const props = defineProps(["block"]);
</script>

<template>
	<div class="notion-synced-block">
		<NotionContent v-if="block.synced_block.synced_from" :page_id="block.synced_block.synced_from.block_id" />
		<NotionContent v-else :page_id="block.id" />
	</div>
</template>
