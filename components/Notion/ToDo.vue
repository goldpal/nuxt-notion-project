<script setup>
const props = defineProps(["block"]);
</script>

<template>
	<div class="notion-to-do">
		<label class="notion-to-do-label">
			<input
				type="checkbox"
				v-model="block[block.type].checked"
				class="notion-to-do-checkbox"
			/>
			<div class="notion-to-do-label-text" :class="{'notion-to-do-label-text-checked': block[block.type].checked}">
				<NotionRichText :richText="block[block.type].rich_text" />
			</div>
		</label>
		<div class="pl-8">
			<NotionContent v-if="block.has_children" :page_id="block.id"/>
		</div>
	</div>
</template>

<style>

</style>
