<template>
    <div
        class="notion-callout"
        :class="{
            'notion-bg-red':
                block.callout.color == 'red_background',
            'notion-bg-pink':
                block.callout.color == 'pink_background',
            'notion-bg-purple':
                block.callout.color == 'purple_background',
            'notion-bg-blue':
                block.callout.color == 'blue_background',
            'notion-bg-green':
                block.callout.color == 'green_background',
            'notion-bg-yellow':
                block.callout.color == 'yellow_background',
            'notion-bg-orange':
                block.callout.color == 'orange_background',
            'notion-bg-brown':
                block.callout.color == 'brown_background',
            'notion-bg-gray':
                block.callout.color == 'gray_background',
        }"
    >
        <NotionIcon class="notion-callout-icon" :icon="block.callout.icon" />
        <div class="notion-callout-text">
            <NotionRichText :richText="block.callout.rich_text" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['block'])
</script>
