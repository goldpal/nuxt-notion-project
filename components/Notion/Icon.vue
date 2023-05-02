<template>
    <span v-if="icon" class="notion-icon not-prose">
        <span v-if="icon.type == 'emoji'">{{ icon.emoji }}</span>
        <span v-if="icon.type == 'file'">
            <img class="dark:invert" :src="icon[icon.type].url" :class="{'w-14 h-14': large, 'w-5 h-5': !large}" />
        </span>
    </span>
</template>

<script setup>
const props = defineProps(['icon', 'large'])
</script>
