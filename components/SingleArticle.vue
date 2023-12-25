<template>
	<NuxtLink :to="data.url" target="_blank" class="group hover:-translate-y-1 transition-transform duration-300">
		<article>
			<NuxtPicture
				:imgAttrs="{ class: 'rounded-t-xl w-full' }"
				:src="data.cover_image"
				format="webp"
				width="1000"
				height="420"
				:alt="data.title"
			/>
			<div class="rounded-b-xl bg-black bg-opacity-40 p-4 xl:p-6 border border-white border-t-0 border-opacity-20">
				<div class="flex justify-between items-center gap-3">
					<div class="flex flex-row items-center flex-nowrap">
						<NuxtPicture
							width="60"
							height="60"
							:imgAttrs="{ class: 'w-[60px] min-w-[40px]' }"
							:src="data.user.profile_image_90"
							format="webp"
							alt="Article Author Avatar"
						/>
						<div class="ml-2">
							<div class="font-metana text-sm sm:text-base whitespace-nowrap">{{ data.user.name }}</div>
							<div class="opacity-60">Posted on {{ data.readable_publish_date }}</div>
						</div>
					</div>
					<div class="flex gap-x-3 gap-y-1 flex-wrap justify-end">
						<div class="hidden sm:block">&#128338; {{ data.reading_time_minutes }} min</div>
						<div>&#128150; {{ data.public_reactions_count }}</div>
						<div>&#128172; {{ data.comments_count }}</div>
					</div>
				</div>
				<div class="font-metana text-lg sm:text-xl 2xl:text-2xl mt-5">
					{{ data.title }}
				</div>
				<div class="flex gap-3 mt-5 flex-wrap">
					<div v-for="tag in data.tag_list">
						<div
							class="bg-opacity-10 px-2 py-1 rounded-md border hover:bg-opacity-40 transition-all duration-500"
							:class="`${getTagColor(tag, tagColors)}`"
						>
							#<span class="text-white">{{ tag }}</span>
						</div>
					</div>
				</div>
			</div>
		</article>
	</NuxtLink>
</template>

<script setup>
const props = defineProps({ data: Object })

const tagColors = {
	default: 'bg-[#ff33e0] border-[#ff33e0] text-[#ff33e0]',
	tailwindcss: 'bg-[#000] border-[#000] text-[#000]',
	css: 'bg-[#2965F1] border-[#2965F1] text-[#2965F1]',
	webdev: 'bg-[#562765] border-[#562765] text-[#562765]',
	frontend: 'bg-[#ff33e0] border-[#ff33e0] text-[#ff33e0]',
	programming: 'bg-[#890606] border-[#890606] text-[#890606]',
	github: 'bg-[#000] border-[#000] text-[#000]',
	git: 'bg-[#F54D27] border-[#F54D27] text-[#F54D27]',
}

function getTagColor(tag, obj) {
	for (const [key, value] of Object.entries(obj)) {
		if (tag === key) {
			return value
		}
	}
}
</script>

<style lang="scss" scoped></style>
