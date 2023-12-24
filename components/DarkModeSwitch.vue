<template>
	<div class="fixed z-50 right-1 bottom-16 2xl:bottom-20 2xl:right-3">
		<div class="hs-dropdown [--strategy:absolute] [--offset:55]" data-hs-dropdown-placement="top">
			<button
				type="button"
				class="hs-dropdown-toggle hs-dark-mode group flex items-center text-white hover:text-primary font-medium text-sm group"
			>
				<span
					data-lightmode-switch-label
					class="hidden 2xl:block bg-white text-secondary rounded-md border-1 px-2 py-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500"
					>Click to change light mode</span
				>
				<Moon class="hs-dark-mode-active:hidden block w-10 h-10 ml-3 fill-none" :fontControlled="false" />
				<svg
					class="hs-dark-mode-active:block hidden w-10 h-10 ml-3 fill-none"
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
					<circle cx="12" cy="12" r="4" />
					<path d="M12 8a2 2 0 1 0 4 4" />
					<path d="M12 2v2" />
					<path d="M12 20v2" />
					<path d="m4.93 4.93 1.41 1.41" />
					<path d="m17.66 17.66 1.41 1.41" />
					<path d="M2 12h2" />
					<path d="M20 12h2" />
					<path d="m6.34 17.66-1.41 1.41" />
					<path d="m19.07 4.93-1.41 1.41" />
				</svg>
			</button>

			<div
				id="selectThemeDropdown"
				class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-full min-w-[250px] mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-2 space-y-1"
			>
				<button
					type="button"
					class="hs-auto-mode-active:bg-gray w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-lg font-metana text-black hover:bg-gray"
					data-hs-theme-click-value="auto"
				>
					System based
				</button>

				<button
					type="button"
					class="hs-dark-mode-active:bg-gray w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-lg font-metana text-black hover:bg-gray"
					data-hs-theme-click-value="dark"
				>
					Dark mode
				</button>
				<button
					type="button"
					class="hs-default-mode-active:bg-gray w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-lg font-metana text-black hover:bg-gray"
					data-hs-theme-click-value="default"
				>
					Light mode
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import Sun from '~/assets/icons/sun.svg'
import Moon from '~/assets/icons/moon.svg'
</script>
