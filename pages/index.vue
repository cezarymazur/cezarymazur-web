<template>
	<Loading />
	<DarkModeSwitch />
	<Menu />
	<BackToTop />
	<div id="scrollspy-scrollable-parent-1">
		<Hero />
		<Work />
		<About />
		<Blog :articles="articles" />
		<Contact />
	</div>
	<Footer />
</template>

<script setup>
import { ref } from 'vue'

const endpoint = ref('https://dev.to/api/articles?username=cezarymazur')
const articles = ref()

async function getArticles() {
	const response = await fetch(endpoint.value)
	articles.value = await response.json()
}

getArticles()

if (process.client) {
	function Marquee(selector, speed) {
		const parentSelectors = document.querySelectorAll(selector)
		parentSelectors.forEach(parent => {
			const clone = parent.innerHTML
			const firstElement = parent.children[0]
			let i = 0
			parent.insertAdjacentHTML('beforeend', clone)
			parent.insertAdjacentHTML('beforeend', clone)

			setInterval(function () {
				firstElement.style.marginLeft = `-${i}px`
				if (i > firstElement.clientWidth) {
					i = 0
				}
				i = i + speed
			}, 0)
		})
	}
	window.addEventListener('load', Marquee('[data-marquee]', 0.25))

	function focus() {
		document.title = 'Frontend Developer | WordPress and Vue3 Specialist | Cezary Mazur'
	}
	function blur() {
		document.title = 'Hurry up! ⏳ Come back and hire the best Frontend Developer!'
	}

	window.addEventListener('blur', blur)
	window.addEventListener('focus', focus)

	// Coursor

	if (window.innerWidth >= 1280) {
		const cur = window.curDot({
			zIndex: 1000,
			diameter: 30,
			easing: 4,
			background: 'transparent',
		})

		const linksCursor = {
			background: '#4bb7c0',
			borderColor: 'transparent',
			scale: 0.3,
		}

		const headingsCursor = {
			background: '#4bb7c0',
			borderColor: 'transparent',
			scale: 3,
		}

		cur.over('h1', headingsCursor)
		cur.over('h2', headingsCursor)
		cur.over('h2', headingsCursor)
		cur.over('h3', headingsCursor)
		cur.over('h4', headingsCursor)
		cur.over('h5', headingsCursor)

		cur.over('li', linksCursor)
		cur.over('button', linksCursor)
		cur.over('#emoji', linksCursor)
		cur.over('a', linksCursor)
		cur.over('article', linksCursor)
		cur.over('[data-likes]', linksCursor)
		cur.over('#button-3', linksCursor)
	}
}
</script>
