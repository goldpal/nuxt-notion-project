<script setup>
const route = useRoute();
const { pending, data: page } = useLazyFetch(
	`/api/notion/retrieve-page/${route.params.id}`
);
watch(page, (newPage) => {});
</script>

<template>
	<main class="max-w-6xl mx-auto p-6 lg:p-0">
		<article v-if="!pending" class="prose max-w-none py-12">
			<div v-if="page.cover">
				<img
					v-if="page.cover"
					class="w-full h-64 object-cover rounded-box mt-2 mb-4"
					:src="page.cover[page.cover.type].url"
					alt="zdjęcie posta"
				/>
			</div>
			<div class="flex items-center gap-4">
				<div v-if="page.icon">
					<NotionIcon :icon="page.icon" :large="true" />
				</div>
				<h1 class="text-5xl p-0 my-6" v-if="page.properties.title">
					{{
						page.properties.title[page.properties.title.type][0][
							page.properties.title[page.properties.title.type][0]
								.type
						].content
					}}
				</h1>
				<!-- This is a fallback value when you access a page when it doesn't have a 'title' property, like when it's a database item -->
				<h1 class="text-5xl p-0 my-6" v-else>
					{{
						page.properties[
							Object.keys(page.properties)
								.filter(
									(property) =>
										page.properties[property].type ==
										"title"
								)
								.pop()
						][
							page.properties[
								Object.keys(page.properties)
									.filter(
										(property) =>
											page.properties[property].type ==
											"title"
									)
									.pop()
							].type
						][0][page.properties[
							Object.keys(page.properties)
								.filter(
									(property) =>
										page.properties[property].type ==
										"title"
								)
								.pop()
						][
							page.properties[
								Object.keys(page.properties)
									.filter(
										(property) =>
											page.properties[property].type ==
											"title"
									)
									.pop()
							].type
						][0].type].content
					}}
				</h1>
			</div>
			<NotionContent :page_id="route.params.id" />
		</article>
		<article v-else class="prose max-w-none py-10">
			<Skeleton class="h-16 my-6" />
			<Skeleton class="h-32 my-6" />
			<Skeleton class="h-64 my-6" />
			<Skeleton class="h-24 my-6" />
		</article>
	</main>
</template>

<style></style>
