<template>
	<div id="work" class="w-full h-auto relative px-4 md:px-10 pt-12 overflow-x-hidden overflow-y-auto">
		<NuxtPicture
			class="hidden lg:hidden absolute -left-36 top-0 z-0"
			format="png"
			src="shadow.png"
			:imgAttrs="{ class: 'w-[420px] md:w-[600px]' }"
			sizes="sm:200px md:450px"
			quality="100"
		/>
		<div class="w-screen mt-12 -ml-10 -mr-10 opacity-10">
			<div data-marquee class="flex">
				<h2 class="uppercase whitespace-nowrap">&nbsp;Work * Projects * Case Studies * Successes *</h2>
				<h2 class="uppercase whitespace-nowrap">&nbsp;Work * Projects * Case Studies * Successes *</h2>
			</div>
		</div>
		<h2 class="relative -mt-5 uppercase z-10 pb-4">* work</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-5 gap-5">
			<SingleCaseStudy v-for="caseStudy in caseStudies" :caseStudy="caseStudy" />
		</div>
		<div class="xl:grid xl:grid-cols-3 xl:gap-5">
			<div class="w-full p-5 bg-white text-secondary text-center rounded-xl xl:col-start-2">
				<h4 class="text-base">Do you want your company to be the <u>next success story</u>?</h4>
				<Button link="/#contact" label="Contact me" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
const caseStudies = ref([
	{
		img: 'pano.jpg',
		link: 'https://panoptyk.pl/',
		title: 'PanOptyk',
		name: 'optyk',
		date: 'November 2023',
		tags: ['Ecommerce', 'Design', 'PageSpeed', 'SEO', 'WebServices'],
	},
	{
		img: 'moysoy.jpg',
		link: 'https://moysoy.cezarymazur.pl/',
		title: 'Moysoy',
		name: 'moysoy',
		date: 'March 2020',
		tags: ['Ecommerce', 'BrandDesign', 'ProductsDesign'],
	},
	{
		img: 'systemy.jpg',
		link: 'https://systemypneumatyczne.pl/',
		title: 'Systemy Pneumatyczne',
		name: 'systemy',
		date: 'February 2021',
		tags: ['Ecommerce', 'Logo'],
	},
	{
		img: 'dermis.jpg',
		link: 'https://dermis-kosmetologia.pl/',
		title: 'Dermis',
		name: 'dermis',
		date: '09-2021',
		tags: ['Website', 'WebsiteDesign'],
	},
	{
		img: 'makro.jpg',
		link: 'https://makro-bud.pl/',
		title: 'Makro-bud',
		name: 'makro',
		date: 'November 2023',
		tags: ['Website', 'WebsiteDesign', 'Logo'],
	},
	{
		img: 'sellision.jpg',
		link: 'https://sellision.com/',
		title: 'Sellision',
		name: 'sellision',
		date: 'October 2022',
		tags: ['Website', 'WordPress'],
	},
])
</script>
