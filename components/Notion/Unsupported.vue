<script setup>
const props = defineProps(["block"]);
</script>

<template>
	<div class="notion-unsupported not-prose">
		<pre data-prefix="1"><code><span class="text-accent">typeof</span> {{ block.type }}</code></pre>
		<pre
			data-prefix=""
			class="bg-error text-error-content"
		><code>unsupported</code></pre>
	</div>
</template>
