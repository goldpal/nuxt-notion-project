<template>
    <p :id="block.id" class="notion-paragraph">
        <NotionRichText :richText="block.paragraph.rich_text" />
    </p>
</template>

<script setup>
const props = defineProps(['block'])
</script>
