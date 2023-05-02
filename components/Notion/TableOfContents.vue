<script setup>
const props = defineProps(["content"]);
</script>

<template>
<!-- FIXME: Figure out how to fix this component -->
	<nav class="notion-table-of-contents">
		<ul class="notion-table-of-contents-list">
			<li
				class="notion-table-of-contents-list-item"
				v-for="(block, index) in content"
				:key="index"
			>
				<a
					:class="{
						'notion-table-of-contents-list-item-h1':
							block.type == 'heading_1',
						'notion-table-of-contents-list-item-h2':
							block.type == 'heading_2',
						'notion-table-of-contents-list-item-h3':
							block.type == 'heading_3',
					}"
					class="notion-table-of-contents-list-item-link"
					:href="`#${block.id}`"
					><span
						v-for="(text, jndex) in block[block.type].rich_text"
						:key="jndex"
					>
						{{ text.plain_text }}
					</span></a
				>
			</li>
		</ul>
	</nav>
</template>
