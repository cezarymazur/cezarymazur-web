<template>
	<NuxtLink :to="caseStudy.link" target="_blank" class="relative rounded-xl overflow-hidden group">
		<NuxtPicture
			width="1024"
			height="768"
			:imgAttrs="{ class: 'transition-all w-full duration-500 xl:group-hover:scale-[1.05]' }"
			sizes="sm:400px md:600px"
			format="webp"
			quality="75"
			:src="caseStudy.img"
			alt="Case Study Main Picture - Visualization of the realization"
		/>
		<div
			class="relative xl:absolute transition-opacity duration-500 xl:opacity-0 group-hover:opacity-100 bottom-0 right-0 left-0 text-white bg-black xl:bg-secondary p-4 xl:p-6 bg-opacity-40 xl:bg-opacity-90 flex flex-col gap-5 border rounded-b-xl xl:border-t-0"
			:class="getTagColor(caseStudy.name, tagColors)"
		>
			<div>
				<h3 class="font-metana text-xl 2xl:text-2xl" :class="`text-${caseStudy.color}`">{{ caseStudy.title }}</h3>
				<div class="opacity-60">Created in {{ caseStudy.date }}</div>
			</div>
			<div class="flex gap-3 flex-wrap">
				<div
					v-for="tag in caseStudy.tags"
					class="bg-opacity-10 px-2 py-1 rounded-md border hover:bg-opacity-40 transition-all duration-500"
					:class="getTagColor(caseStudy.name, tagColors)"
				>
					#<span class="text-white">{{ tag }}</span>
				</div>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup>
defineProps({ caseStudy: Object })

const tagColors = {
	optyk: 'bg-[#01C4C6] border-[#01C4C6] text-[#01C4C6]',
	moysoy: 'bg-[#DAB1B9] border-[#DAB1B9] text-[#DAB1B9]',
	systemy: 'bg-[#5887E1] border-[#5887E1] text-[#5887E1]',
	dermis: 'bg-[#CCBEBB] border-[#CCBEBB] text-[#CCBEBB]',
	makro: 'bg-[#BAE272] border-[#BAE272] text-[#BAE272]',
	sellision: 'bg-[#D7C9FE] border-[#D7C9FE] text-[#D7C9FE]',
}

function getTagColor(tag, obj) {
	for (const [key, value] of Object.entries(obj)) {
		if (tag === key) {
			return value
		}
	}
}
</script>
