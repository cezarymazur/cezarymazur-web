<template>
	<div class="block fixed z-50 right-1 bottom-0">
		<div class="hs-dropdown [--strategy:absolute] [--offset:55] 2xl:[--offset:70]" data-hs-dropdown-placement="top">
			<button
				type="button"
				class="hs-dropdown-toggle p-2 rounded-tl-xl w-[50px] h-[50px] 2xl:w-[65px] 2xl:h-[65px] innline-flex justify-center items-center gap-x-2 bg-white text-secondary shadow-sm hover:bg-gray-50 -mr-1"
			>
				<div class="menu-icon relative w-full h-full 2xl:w-[50px] 2xl:h-[50px] cursor-pointer">
					<input
						class="menu-icon__cheeckbox block w-full h-full cursor-pointer z-20 absolute opacity-0"
						type="checkbox"
					/>
					<div class="m-auto absolute top-0 bottom-0 right-0 left-0 h-[16px]">
						<span
							class="absolute block w-full h-[3px] rounded-sm bg-black transition-[all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965)] duration-300 top-0 hs-dropdown-open:rotate-45 hs-dropdown-open:top-[6px] 2xl:hs-dropdown-open:w-[50px]"
						></span>
						<span
							class="absolute block w-full h-[3px] rounded-sm bg-black transition-[all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965)] duration-300 bottom-0 hs-dropdown-open:-rotate-45 hs-dropdown-open:bottom-[6px] 2xl:hs-dropdown-open:w-[50px]"
						></span>
					</div>
				</div>
			</button>

			<div
				id="menuDropdown"
				data-hs-scrollspy="#scrollspy-1"
				class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-fdivl min-w-[250px] mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 bg-white shadow-md rounded-lg p-2 space-y-1 [--scrollspy-offset:100] lg:[--scrollspy-offset:30]"
			>
				<a
					v-for="item in menu"
					:target="item.target"
					:href="item.link"
					data-close-mobile
					class="w-full flex items-center gap-x-3.5 py-1 px-3 lg:py-2 xl:pr-36 2xl:pr-48 rounded-lg text-lg xl:text-xl font-metana text-black hover:bg-gray hs-scrollspy-active:bg-gray"
					:class="item.class"
				>
					{{ item.label }}
				</a>
			</div>
		</div>
	</div>
</template>

<script setup>
const menu = ref([
	{
		label: 'Home',
		link: '#home',
		target: '_self',
		class: 'active',
	},
	{
		label: 'Work',
		link: '#work',
		target: '_self',
	},
	{
		label: 'About',
		link: '#about',
		target: '_self',
	},
	{
		label: 'Blog',
		link: '#blog',
		target: '_self',
	},
	{
		label: 'Contact',
		link: '#contact',
		target: '_self',
	},
])
</script>
