<script setup>
const props = defineProps(["page_id"]);
const { pending, data: content } = useLazyFetch(
	`/api/notion/retrieve-block-children/${props.page_id}`
);
watch(content, (newContent) => {});
</script>

<template>
	<Transition>
		<section v-if="!pending" class="notion-content">
			<div v-for="block in content.results" :key="block.id" class="notion-block">
				<NotionHeading1
					v-if="block.type == 'heading_1' && !block.has_children"
					:block="block"
				>
				</NotionHeading1>
				<NotionToggle
					v-else-if="
						(block.type == 'heading_1' ||
							block.type == 'heading_2' ||
							block.type == 'heading_3') &&
						block.has_children
					"
					:block="block"
				>
				</NotionToggle>
				<NotionHeading2
					v-else-if="block.type == 'heading_2' && !block.has_children"
					:block="block"
				>
				</NotionHeading2>
				<NotionHeading3
					v-else-if="block.type == 'heading_3' && !block.has_children"
					:block="block"
				>
				</NotionHeading3>
				<NotionParagraph
					v-else-if="block.type == 'paragraph'"
					:block="block"
				>
				</NotionParagraph>
				<NotionSubpage
					v-else-if="block.type == 'child_page'"
					:block="block"
				>
				</NotionSubpage>
				<NotionCode v-else-if="block.type == 'code'" :block="block" />
				<NotionCallout
					v-else-if="block.type == 'callout'"
					:block="block"
				/>
				<NotionImage v-else-if="block.type == 'image'" :block="block" />
				<NotionQuote v-else-if="block.type == 'quote'" :block="block" />
				<NotionToDo v-else-if="block.type == 'to_do'" :block="block" />
				<NotionTable v-else-if="block.type == 'table'" :block="block" />
				<NotionToggle
					v-else-if="block.type == 'toggle'"
					:block="block"
				/>
				<NotionSyncedBlock
					v-else-if="block.type == 'synced_block'"
					:block="block"
				/>
				<NotionEquation
					v-else-if="block.type == 'equation'"
					:expression="block.equation.expression"
				/>
				<NotionDivider v-else-if="block.type == 'divider'" />
				<NotionColumnList
					v-else-if="block.type == 'column_list'"
					:block="block"
				/>
				<NotionLinkToPage v-else-if="block.type == 'link_to_page'" :block="block" />

				<NotionTableOfContents
					v-else-if="block.type == 'table_of_contents'"
					:content="
						content.results.filter((block) => {
							return (
								block.type == 'heading_1' ||
								block.type == 'heading_2' ||
								block.type == 'heading_3'
							);
						})
					"
				/>
				<ul
					v-else-if="
						block.type == 'bulleted_list_item' ||
						block.type == 'numbered_list_item'
					"
				>
					<li class="notion-list-item">
						<NotionRichText
							:richText="block[block.type].rich_text"
						/>
					</li>
				</ul>
				<NotionUnsupported v-else :block="block" />
			</div>
		</section>
	</Transition>
	<Transition>
		<div v-if="pending">
			<Skeleton class="h-64" />
			<Skeleton class="h-32" />
			<Skeleton class="h-64" />
			<Skeleton class="h-24" />
		</div>
	</Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
