<template>
	<div class="relative z-10">
		<h3 class="text-base mb-5 xl:text-lg">what others say?</h3>
		<div class="relative my-5 grid md:grid-cols-2 2xl:grid-cols-4 gap-5">
			<div
				v-for="item in testimorials"
				class="relative overflow-hidden w-full border border-white border-opacity-20 bg-black bg-opacity-40 rounded-xl hover:border-primary transition-all duration-500"
			>
				<blockquote class="relative h-full flex flex-col justify-between p-4 xl:p-6">
					<div class="relative">
						<p class="text-white text-sm lg:text-base" v-html="item.text"></p>
					</div>

					<footer class="mt-6">
						<div class="flex items-center">
							<div class="flex-shrink-0">
								<NuxtPicture
									:imgAttrs="{ class: 'h-10 w-10 rounded-full' }"
									:src="item.img"
									alt="Image Description"
									sizes="sm:50px"
									quality="100"
								></NuxtPicture>
							</div>
							<div class="ms-4">
								<div class="font-metana text-white text-sm">{{ item.name }}</div>
								<div class="text-xs text-white">{{ item.title }}</div>
							</div>
						</div>
					</footer>
				</blockquote>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const testimorials = ref([
	{
		img: 'jakub-j.jpg',
		text: `I created my website a few years ago and it needed to be refreshed, changed and moved to a faster server. Several dozen e-mails and inquiries about cooperation, waiting for replies, quotes... Contact with Cezary was <u>professional</u> from the very beginning, his commitment exceeded that of the competition. Reviewed projects, excellent execution of previous orders. The choice was simple - Cezary. He is an <u>expert</u> in what he does, each proposal was discussed and carefully considered. Conscientious work, <u>no delays, everything as planned</u>. If you're looking for someone with a wealth of knowledge and experience at Woocommerce, you've definitely come to the right place!`,
		name: 'Jakub Jewak',
		title: 'Owner at PanOptyk',
		link: 'https://panoptyk.pl',
	},
	{
		img: 'daniel-t.jpeg',
		text: `Cezary has extensive experience in implementing solutions based on <u>WordPress and Woocommerce</u>. He is characterized by <u>very good communication</u> and a comprehensive approach to the assigned tasks. I fully recommend cooperation with Cezary.`,
		name: 'Daniel Tomaszewski',
		title: 'CEO at Sellision',
		link: 'https://sellision.com',
	},
	{
		img: 'oliwia-k.jpg',
		text: `Cezary has truly surpassed expectations as both a Designer and FrontEnd developer. The website they crafted for our business boasts a powerful product catalog with over 1000 items, striking a <u>perfect balance between aesthetics and functionality.</u> The design is not only visually captivating but also incredibly user-friendly, resulting in a noticeable boost in engagement. Throughout the collaboration, Cezary demonstrated <u>exceptional professionalism, responsiveness, and a keen understanding of our brand.</u> I wholeheartedly recommend his services to anyone seeking a top-notch website that not only looks impressive but also delivers a seamless user experience.`,
		name: 'Oliwia Karasiewicz',
		title: 'CEO at PHU SystemyPneumatyczne',
		link: 'https://systemypneumatyczne.pl',
	},
	{
		img: 'daniel-r.jpeg',
		text: `I work with Cezary on a daily basis on many projects. I can always count on his very <u>high quality of work and commitment in the most difficult cases.</u> Cezary is characterized by <u>proactivity</u>, <u>regularity</u> and <u>willingness to take on even the most difficult challenges.</u> It is worth noting that he also introduces a great atmosphere in the team and willingly shares a huge amount of technical knowledge. He is a tech-savy guy! I sincerely recommend cooperation with Cezary!`,
		name: 'Daniel Rychlik',
		title: 'Project Manager at Salestube',
		link: 'https://salestube.tech',
	},
])
</script>

<style lang="scss" scoped></style>
