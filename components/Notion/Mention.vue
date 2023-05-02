<template>
	<span class="notion-mention"
		><!-- Użytkownik -->
		<span class="notion-mention-user" v-if="mention[mention.type].type == 'user'">
			@{{ mention[mention.type].user.name }}
		</span>

		<!-- Data -->
		<NotionDate v-if="mention[mention.type].type == 'date'" :data="mention[mention.type]" />

		<!-- Strona -->
		<span v-if="mention[mention.type].type == 'page'">
			<NuxtLink class="notion-mention-page" :to="`/page/${mention.mention.page.id}`"
				>{{ mention.plain_text }}</NuxtLink
			>
		</span></span
	>
</template>

<script setup>
const props = defineProps(["mention"]);
</script>
