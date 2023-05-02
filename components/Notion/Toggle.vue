<template>
    <div
        class="notion-toggle"
    >
        <input type="checkbox" />
        <NotionHeading1
            class="notion-toggle-title"
            v-if="block.type == 'heading_1'"
            :block="block"
        >
        </NotionHeading1>
        <NotionHeading2
            class="notion-toggle-title"
            v-else-if="block.type == 'heading_2'"
            :block="block"
        >
        </NotionHeading2>
        <NotionHeading3
            class="notion-toggle-title"
            v-else-if="block.type == 'heading_3'"
            :block="block"
        >
        </NotionHeading3>
        <div v-else class="notion-toggle-title">
            <NotionRichText :richText="block[block.type].rich_text" />
        </div>
        <div class="collapse-content">
            <NotionContent :page_id="block.id" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['block'])
</script>

