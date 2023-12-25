<template>
	<div id="about" class="w-full h-full pt-12 relative px-4 md:px-10 overflow-x-hidden overflow-y-auto lg:pb-6">
		<NuxtPicture
			class="absolute -right-60 -top-10 z-0"
			format="webp"
			src="shadow.png"
			:imgAttrs="{ class: 'w-[350px] 2xl:w-[600px]' }"
			sizes="sm:200px md:450px"
			quality="100"
			alt="Frontend Decoration - gradient from blue to purple blurred shadow"
		/>
		<div class="relative z-10">
			<div class="w-screen mt-12 -ml-10 -mr-10 opacity-10">
				<div data-marquee class="flex">
					<h2 class="uppercase whitespace-nowrap">&nbsp;About * Skills * Technologies * Resume * Successes *</h2>
					<h2 class="uppercase whitespace-nowrap">&nbsp;About * Skills * Technologies * Resume * Successes *</h2>
				</div>
			</div>
			<h2 class="relative -mt-5 uppercase z-10 pb-4">* about</h2>
			<div class="my-5 pb-4">
				<h3 class="text-base mb-5 xl:text-lg inline-block">summary</h3>
				<p>
					&#128075; Hi there! I'm a Frontend Developer with over +8 years of hands-on experience, currently enhancing
					digital solutions at
					<NuxtLink target="_blank" to="https://www.salestube.tech/">SalesTube powered by hmmh Poland.</NuxtLink>
				</p>
				<div
					class="hs-accordion-group xl:grid xl:grid-cols-2 xl:gap-x-5 xl:gap-y-3 xl:my-5"
					data-hs-accordion-always-open
				>
					<div
						v-for="accordion in aboutAccordion"
						class="hs-accordion"
						:class="{ active: accordion.active }"
						id="hs-basic-always-open-heading-one"
					>
						<button
							class="hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 text-sm xl:text-base font-metana w-full justify-between text-start text-white hover:text-gray-500 border-b hs-accordion-active:border-primary"
							aria-controls="hs-basic-always-open-collapse-one"
						>
							<div><span v-html="accordion.emoji"></span>{{ accordion.label }}</div>
							<Chevron
								class="hs-accordion-active:text-primary hs-accordion-active:rotate-180 transition-transform duration-500 block w-4 h-4"
							/>
						</button>
						<div
							id="hs-basic-always-open-collapse-one"
							class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
							:class="{ hidden: !accordion.active }"
							aria-labelledby="hs-basic-heading-one"
						>
							<div class="py-3">
								<p class="text-sm text-gray-600 dark:text-gray-200 xl:text-base">
									{{ accordion.content }}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-col justify-start my-5 border-white border border-opacity-20 rounded-xl p-4">
					<div>
						<h4 class="text-base xl:text-lg mb-5 inline-block">&#128142; Most important skills:</h4>
					</div>
					<div class="text-base flex flex-wrap gap-x-5 gap-y-2 xl:text-lg">
						<div
							v-for="skill in skills"
							class="relative after:content-[''] last-of-type:after:hidden after:block after:w-1 after:h-1 after:rounded-full after:bg-white after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2"
						>
							{{ skill }}
						</div>
					</div>
				</div>
			</div>
			<Reviews />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Chevron from '~/assets/icons/chevron.svg'

const aboutAccordion = ref([
	{
		emoji: '&#128200;',
		label: ' Value Delivered',
		content:
			'Developed online stores that collectively generate over 1M PLN in sales per month. Worked on rich JavaScript (Vue.js) applications and Headless CMS systems like Storyblok, Contentful, and WP with GraphQL. Managed and delivered over 50+ WordPress sites with 99% customer satisfaction. Successfully fixed critical WordPress issues, improving website reliability and user experience.',
		active: true,
	},
	{
		emoji: '&#128187;',
		label: ' Programming Mastery:',
		content:
			'Specialized in Vue.js, building scalable and maintainable applications. Developed custom WordPress themes for a variety of industries. Integrated headless CMS solutions, focusing on performance and user experience.',
		active: false,
	},
	{
		emoji: '&#128736;',
		label: ' Tech Stack:',
		content: 'Nuxt3, Vue3(Composition Api), JavaScript, GraphQL, PHP, HTML, CSS, SASS, Tailwind, GIT',
		active: false,
	},
	{
		emoji: '&#128295;',
		label: ' Tools:',
		content: 'Vite, Storyblok, Contentful, Algolia, WordPress, Woocommerce, GitLab, Jira, Asana',
		active: false,
	},
	{
		emoji: '&#127793;',
		label: ' Continuous Growth:',
		content: `I'm deeply committed to personal and professional growth, staying current with the latest in frontend development.`,
		active: false,
	},
	{
		emoji: '&#129309;',
		label: ` Let's Connect:`,
		content: `I'm open to new opportunities and love tackling challenges that push the boundaries of my skills. Feel free to reach out!`,
		active: false,
	},
])

const skills = ref(['Nuxt3', 'Vue3', 'JavaScript ES6', 'Storyblok', 'WordPress', 'Woocommerce', 'GraphQL', 'Tailwind'])
</script>
