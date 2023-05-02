<template>
	<div
		data-skeleton
		class="text-5xl overflow-hidden relative rounded my-2 bg-base-100 border dark:border-base-300"
	></div>
</template>

<style>
[data-skeleton]::after {
	content: " ";
	box-shadow: 0 0 50px 9px rgb(184, 176, 176);
	position: absolute;
	top: 0;
	left: -100%;
	height: 100%;
	animation: load 1s infinite;
}
@keyframes load {
	0% {
		left: -100%;
	}
	100% {
		left: 150%;
	}
}
</style>
