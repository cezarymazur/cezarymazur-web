<template>
	<div class="w-full h-auto relative px-4 py-3 md:px-10 overflow-x-hidden overflow-y-auto">
		<div class="text-lg md:text-sm opacity-40">Cezary Mazur &#169; <span data-year></span></div>
	</div>
</template>

<script setup>
if (process.client) {
	const date = new Date()
	const yearOfDate = date.getFullYear() // 👉️ 2025
	document.querySelector('[data-year]').innerText = yearOfDate
}
</script>

<style lang="scss" scoped></style>
