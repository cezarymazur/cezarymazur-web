<template>
	<div id="contact" class="w-full h-full relative px-4 md:px-10 pt-12 overflow-x-hidden overflow-y-auto lg:-mt-[125px]">
		<NuxtPicture
			class="absolute -right-52 z-0 bottom-0"
			format="webp"
			src="shadow-2.png"
			:imgAttrs="{ class: 'w-[350px] lg:w-[350px] 2xl:w-[600px]' }"
			sizes="sm:200px md:450px"
			quality="100"
			alt="Frontend Decoration - gradient from blue to purple blurred shadow"
		/>
		<div class="relative z-10 lg:mt-[200px]">
			<div class="w-screen mt-12 -ml-10 -mr-10 opacity-10">
				<div data-marquee class="flex">
					<h2 class="uppercase whitespace-nowrap">&nbsp;Contact * Social Media * Message * Phone * Email *</h2>
					<h2 class="uppercase whitespace-nowrap">&nbsp;Contact * Social Media * Message * Phone * Email *</h2>
				</div>
			</div>
			<h2 class="relative -mt-5 uppercase z-10 pb-4">* contact</h2>
			<div class="my-5 grid md:grid-cols-2 gap-5 xl:gap-16 xl:my-16">
				<div v-for="link in links" class="my-3">
					<h3 class="font-grotesk text-white opacity-40 text-xl">{{ link.label }}</h3>
					<NuxtLink
						:to="link.url"
						:target="link.target"
						format="webp"
						class="text-3xl font-metana text-primary hover:underline xl:text-5xl"
						>{{ link.cta }}</NuxtLink
					>
				</div>
			</div>
			<div class="flex gap-5 flex-wrap -ml-1 my-3">
				<div
					v-for="media in socialMedia"
					class="text-4xl hover:text-primary transition-colors duration-500 xl:text-5xl"
				>
					<NuxtLink :to="media.link" :target="media.target" aria-label="Read more in the Social Media!">
						<linkedin v-if="media.label === 'linkedin'" />
						<github v-else-if="media.label === 'github'" />
						<behance v-else-if="media.label === 'behance'" />
						<tiktok v-else-if="media.label === 'tiktok'" />
						<dev v-else-if="media.label === 'dev'" />
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import linkedin from '~/assets/icons/linkedin.svg'
import github from '~/assets/icons/github.svg'
import behance from '~/assets/icons/behance.svg'
import tiktok from '~/assets/icons/tiktok.svg'
import dev from '~/assets/icons/dev.svg'

const socialMedia = ref([
	{
		label: 'linkedin',
		link: 'https://www.linkedin.com/in/cezary-mazur/',
		icon: '/icons/linkedin.svg',
		target: '_blank',
	},
	{ label: 'dev', link: 'https://dev.to/czarecki', icon: '/icons/dev.svg', target: '_blank' },
	{ label: 'github', link: 'https://github.com/czarecki', icon: '/icons/github.svg', target: '_blank' },
	{ label: 'behance', link: 'https://www.behance.net/cezarymazur', icon: '/icons/behance.svg', target: '_blank' },
	{ label: 'tiktok', link: 'https://www.tiktok.com/@cezary.mazur', icon: '/icons/tiktok.svg', target: '_blank' },
])

const links = ref([
	{
		label: 'Email',
		cta: 'Drop me a line',
		url: 'mailto:kontakt@cezarymazur.pl',
		target: '',
	},
	{
		label: 'Calendly',
		cta: 'Book a call',
		url: 'https://calendly.com/cezarymazur',
		target: '_blank',
	},
	{
		label: 'Linkedin',
		cta: `Let's connect`,
		url: 'https://www.linkedin.com/in/cezary-mazur/',
		target: '_blank',
	},
	{
		label: 'Whatsapp',
		cta: `Chat directly`,
		url: 'https://wa.me/48883599988',
		target: '_blank',
	},
])
</script>

<style lang="scss" scoped></style>
