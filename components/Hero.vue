<template>
	<div id="home" class="w-full xl:h-screen relative overflow-x-hidden px-4 md:px-10">
		<NuxtPicture
			class="absolute -right-36 -top-48 md:-right-42 md:-top-42"
			format="png"
			src="shadow.png"
			:imgAttrs="{
				class: 'w-[350px] md:w-[450px] 2xl:w-[600px]',
			}"
			sizes="sm:200px md:450px"
			quality="100"
		/>
		<NuxtPicture
			class="absolute right-0 top-0 md:right-6 md:top-6 2xl:top-20 2xl:right-20"
			format="png"
			src="face.png"
			:imgAttrs="{ class: 'w-[125px] md:w-[200px] xl:w-[250px] 2xl:w-[300px]' }"
			sizes="sm:200px xl:300px"
			quality="80"
		/>
		<div
			class="md:h-auto xl:h-screen w-full flex flex-row flex-wrap justify-start md:items-center md:content-around pt-20 xl:pt-0"
		>
			<div class="sm:w-full md:flex md:flex-col md:gap-20 xl:gap-0 xl:flex-row xl:justify-between 2xl:justify-around">
				<div class="block relative">
					<LikesCounter :number="'&nbsp;'" />
					<h1>
						Hi, i'm <br /><span>Cezary Mazur</span><br />
						i'm a frontend deveoper.
					</h1>
					<div class="flex flex-row flex-wrap items-center justify-center sm:justify-start mt-6 lg:mt-8 gap-3 lg:gap-5">
						<NuxtLink
							to="https://panoptyk.pl/"
							target="_blank"
							class="flex relative bg-white text-secondary rounded-md lg:rounded-xl p-2 lg:p-4 font-medium text-center items-center group pr-8 lg:pr-12 lg:pl-6"
						>
							&#128293; &nbsp; Latest project:
							<span class="font-metana ml-2 group-hover:underline hidden xs:block">www.panoptyk.pl</span>
							<svg
								class="absolute right-2 lg:right-6 bottom-1/2 translate-y-1/2 flex-shrink-0 w-4 h-4 group-hover:right-4 transition-all duration-500 antialiased"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
							</svg>
						</NuxtLink>
						<NuxtLink to="/#blog" class="block text-center lg:text-left text-sm lg:text-md hover:underline"
							>Read recent articles</NuxtLink
						>
					</div>
				</div>
				<div class="relative grid grid-cols-2 grid-rows-2 items-top my-8 w-full xl:w-1/3">
					<div
						class="hs-tooltip [--placement:bottom] 2xl:[--placement:right] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
					>
						<button type="button" class="hs-tooltip-toggle">
							<div
								:onClick="fetchAnotherEmoji"
								id="emoji"
								class="text-6xl md:text-8xl xl:text-7xl 2xl:text-9xl"
								v-html="emoji"
							></div>
							<span
								class="hs-tooltip-content lg:hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 md:opacity-100 lg:opacity-0 transition-opacity inline-block absolute lg:invisible z-10 bg-white bg-opacity-40 rounded-lg p-2 font-bold"
								role="tooltip"
							>
								Click to see random icon
							</span>
						</button>
					</div>

					<div class="text-center p-4 2xl:p-16 pr-2 2xl:pr-6 border-b border-white mr-4 2xl:mr-10 border-opacity-20">
						<h3>8+</h3>
						<p>
							years of<br />
							<u>experience</u>
						</p>
					</div>
					<div class="text-center p-4 2xl:p-16 pb-2 2xl:pb-6 border-l border-white mb-4 2xl:mb-10 border-opacity-20">
						<h3>34+</h3>
						<p><u>success</u> <br />stories</p>
					</div>
					<div class="text-center p-4 2xl:p-16 pt-0 2xl:pt-6 border-r border-white mt-4 2xl:mt-10 border-opacity-20">
						<h3>10k+</h3>
						<p>lines <br />of <u>code</u></p>
					</div>
					<div class="text-center p-4 2xl:p-16 pl-2 2xl:pl-6 border-t border-white ml-4 2xl:ml-10 border-opacity-20">
						<h3>13+</h3>
						<p>different <br /><u>technologies</u></p>
					</div>
				</div>
			</div>

			<div class="w-full xl:absolute xl:bottom-10 xl:left-0">
				<div class="font-metana text-center xl:text-base 2xl:text-left 2xl:ml-64">chosen success stories:</div>
				<div class="mt-5 2xl:mt-10">
					<div
						class="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-6 md:gap-x-10 2xl:justify-evenly 2xl:mr-20 2xl:ml-20 items-center"
					>
						<NuxtLink to="https://systemypneumatyczne.pl/" target="_blank">
							<SystemyLogo
								class="w-auto h-10 lg:h-16 fill-white opacity-30 lg:opacity-10 hover:opacity-100 transition-opacity duration-500"
								:fontControlled="false"
							/>
						</NuxtLink>
						<NuxtLink to="https://panoptyk.pl/" target="_blank">
							<PanoLogo
								class="w-auto h-6 lg:h-8 fill-white opacity-30 lg:opacity-10 hover:opacity-100 transition-opacity duration-500"
								:fontControlled="false"
							/>
						</NuxtLink>
						<NuxtLink to="https://makro-bud.pl/" target="_blank">
							<MakroLogo
								class="w-auto h-4 lg:h-6 fill-white opacity-30 lg:opacity-10 hover:opacity-100 transition-opacity duration-500"
								:fontControlled="false"
							/>
						</NuxtLink>

						<NuxtLink to="#">
							<MoysoyLogo
								class="w-auto h-4 lg:h-6 fill-white opacity-30 lg:opacity-10 hover:opacity-100 transition-opacity duration-500"
								:fontControlled="false"
							/>
						</NuxtLink>
						<NuxtLink to="https://dermis-kosmetologia.pl/" target="_blank">
							<DermisLogo
								class="w-auto h-6 lg:h-10 fill-white opacity-30 lg:opacity-10 hover:opacity-100 transition-opacity duration-500"
								:fontControlled="false"
							/>
						</NuxtLink>
					</div>
				</div>
			</div>
			<NuxtPicture
				class="block absolute -left-72 md:-left-96 bottom-0 z-0 2xl:-left-80"
				format="png"
				src="shadow.png"
				:imgAttrs="{ class: 'w-[420px] md:w-[600px]' }"
				sizes="sm:200px md:450px"
				quality="100"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import MakroLogo from '~/assets/icons/makro.svg'
import PanoLogo from '~/assets/icons/pano.svg'
import MoysoyLogo from '~/assets/icons/moysoy.svg'
import SystemyLogo from '~/assets/icons/systemy.svg'
import DermisLogo from '~/assets/icons/dermis.svg'

const endpoint = 'https://emojihub.yurace.pro/api/random'

const emoji = ref('&#128187;')
const timeout = ref()

async function getRandomEmoji() {
	const response = await fetch(endpoint)
	const emojiHtml = await response.json()
	emoji.value = emojiHtml.htmlCode[0]
}

function fetchAnotherEmoji() {
	clearTimeout(timeout.value)
	getRandomEmoji()
	timeout.value = setTimeout(() => {
		emoji.value = '&#128187;'
	}, 2000)
	timeout.value()
}
</script>

<style scoped></style>
