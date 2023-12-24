<template>
	<div data-likes class="relative inline-flex items-center justify-center mb-6 ml-4 group">
		<Hearth
			class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-8 transition-all duration-500 text-red-600 stroke-red-600 group-hover:text-red-600 group-hover:stroke-red-600"
			:fontControlled="false"
		/>
		<div
			data-likes-number
			class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-slate-50"
		>
			{{ number }}
		</div>
	</div>
</template>

<script setup>
import Hearth from '~/assets/icons/hearth.svg'

defineProps({ number: String })
</script>

<style scoped></style>
