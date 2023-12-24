<template>
	<NuxtLink
		class="inline-block text-xs px-10 py-4 mt-5 bg-secondary text-white rounded-xl font-metana xl:text-base hover:text-secondary hover:bg-transparent border-2 border-secondary hover:border-primary transition-all duration-300"
		:to="link"
		:target="target"
		>{{ label }}</NuxtLink
	>
</template>

<script setup>
defineProps({
	link: {
		type: String,
		default: '/#contact',
	},
	label: {
		type: String,
		default: 'Contact me',
	},
	target: {
		type: String,
		default: '_self',
	},
})
</script>
