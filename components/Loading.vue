<template>
	<div
		v-if="loading"
		class="fixed w-full h-full bg-sky-950 text-slate-100 text-center flex flex-col gap-5 justify-center items-center z-[100]"
	>
		<div
			class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-primary rounded-full"
			role="status"
			aria-label="loading"
		>
			<span class="sr-only">Loading...</span>
		</div>
		<div class="font-metana text-lg">Loading...</div>
	</div>
</template>

<script setup>
let loading = ref(true)

if (process.client) {
	loading.value = false
}
</script>

<style lang="scss" scoped></style>
