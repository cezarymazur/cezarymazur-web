<template>
	<button
		data-top
		class="fixed hidden right-16 2xl:right-24 bottom-3 2xl:bottom-4 font-metana text-xl 2xl:text-4xl text-white hover:text-primary transition-all duration-500 z-50"
	>
		Back to top
	</button>
</template>

<script setup>
if (process.client) {
	const btt = document.querySelector('[data-top]')

	window.addEventListener('scroll', function () {
		if (window.scrollY > 940) {
			btt.classList.remove('hidden')
		} else {
			btt.classList.add('hidden')
		}
	})

	btt.addEventListener('click', function (e) {
		e.preventDefault()
		window.scrollTo(0, 0)
	})
}
</script>
