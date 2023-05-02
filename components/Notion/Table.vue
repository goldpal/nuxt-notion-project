<script setup>
const props = defineProps(["block"]);
const { data: content } = await useFetch(
	`/api/notion/retrieve-block-children/${props.block.id}`
);
</script>

<template>
	<div class="overflow-x-auto">
		<table class="notion-table">
			<tbody class="notion-table-body">
				<tr
					class="notion-table-tr"
					v-for="(tableRow, rowIndex) in content.results"
					:key="rowIndex"
				>
					<td
						class="notion-table-td"
						v-for="(cell, cellIndex) in tableRow[tableRow.type]
							.cells"
						:key="cellIndex"
					>
						<NotionRichText :richText="cell" />
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
