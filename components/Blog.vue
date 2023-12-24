<template>
	<div id="blog" class="w-full h-auto relative px-4 md:px-10 pt-12 overflow-x-hidden overflow-y-auto">
		<div class="relative z-10">
			<div class="w-screen mt-12 -ml-10 -mr-10 opacity-10">
				<div data-marquee class="flex">
					<h2 class="uppercase whitespace-nowrap">&nbsp;Blog * Articles * Guides * Stories *</h2>
					<h2 class="uppercase whitespace-nowrap">&nbsp;Blog * Articles * Guides * Stories *</h2>
				</div>
			</div>
			<h2 class="relative -mt-5 uppercase z-10 pb-4">* blog</h2>
			<h3 class="text-base my-5 xl:text-lg">recent posts</h3>
			<div class="relative my-5 grid lg:grid-cols-2 2xl:grid-cols-3 gap-5">
				<SingleArticle v-for="article in articles" :data="article" />
			</div>
			<div class="xl:grid xl:grid-cols-3 xl:gap-5">
				<a href="https://dev.to/cezarymazur" class="xl:col-start-2">
					<div
						class="w-full p-5 bg-black bg-opacity-40 text-white text-center rounded-xl border border-white border-opacity-20 group"
					>
						<p class="font-metana text-lg sm:text-xl 2xl:text-2xl">
							Read more useful aricles on my
							<span
								class="bg-white bg-opacity-10 border border-white px-2 text-white rounded-lg leading-10 group-hover:bg-opacity-40 transition-all duration-500"
								>dev.to</span
							>
						</p>

						<p />
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({ articles: Object })
</script>

<style lang="scss" scoped></style>
