<template>
	<label class="notion-date">
		<span v-if="dateEnd"> {{ dateStart }} &mdash; {{ dateEnd }} </span>
		<span v-else>{{ dateStart }}</span>
	</label>
</template>

<script setup>
const props = defineProps(["data"]);

const dateStart = computed(() => {
	if (props.data.date.start) {
		if (props.data.date.start.length < 12) {
			let temp = new Date(props.data.date.start);
			return temp.toLocaleDateString();
		} else {
			let temp = new Date(props.data.date.start);
			return temp.toLocaleString();
		}
	} else {
		return null;
	}
});

const dateEnd = computed(() => {
	if (props.data.date.end) {
		if (props.data.date.end.length < 12) {
			let temp = new Date(props.data.date.end);
			return temp.toLocaleDateString();
		} else {
			let temp = new Date(props.data.date.end);
			return temp.toLocaleString();
		}
	} else {
		return null;
	}
});
</script>
