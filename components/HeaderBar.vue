<template>
	<div>
		<div class="bg-gray-800 pb-32">
			<nav class="bg-gray-800">
				<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div class="border-b border-gray-700">
						<div class="flex items-center justify-between h-16 px-4 sm:px-0">
							<!-- Logo -->
							<div class="flex-shrink-0">
								<div class="rounded-full bg-gray-200">
									<LogoSvg class="h-10 w-10 fill-current text-gray-800"/>
								</div>
							</div>
							<div class="hidden md:block">
								<div class="flex items-baseline space-x-4">
									<nuxt-link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white px-3 py-2 rounded-md text-sm font-medium font-body">About Me</nuxt-link>

									<nuxt-link to="/portfolio" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white px-3 py-2 rounded-md text-sm font-medium font-body">Portfolio</nuxt-link>

									<nuxt-link to="/contact" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white px-3 py-2 rounded-md text-sm font-medium font-body">Contact</nuxt-link>
								</div>
							</div>
							<div class="-mr-2 flex md:hidden">
								<!-- Mobile menu button -->
								<button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" @click="toggle()">
									<span class="sr-only">Open main menu</span>
									<!-- Menu Svg -->
									<svg 
										class="text-white h-6 w-auto"
										:class="isOpen ? 'hidden' : 'block'"  
										xmlns="http://www.w3.org/2000/svg" 
										viewBox="0 0 20 20" 
										fill="currentColor"
									>
										<path 
											fill-rule="evenodd" 
											d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" 
										/>
									</svg>
									<!-- X Svg -->
									<svg 
										class="text-white h-6 w-auto"
										:class="isOpen ? 'block' : 'hidden'" 
										xmlns="http://www.w3.org/2000/svg" 
										viewBox="0 0 20 20" 
										fill="currentColor"
									>
										<path 
											fill-rule="evenodd" 
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
											clip-rule="evenodd" 
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>

				<!-- Flyout Menu -->
				<div class="border-b border-gray-700 items-end" :class="isOpen ? 'block' : 'hidden'">
					<div class="px-2 py-3 space-y-1 sm:px-3">
						<nuxt-link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white block px-3 py-2 rounded-md text-base font-medium font-body">About Me</nuxt-link>

						<nuxt-link to="/portfolio" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white block px-3 py-2 rounded-md text-base font-medium font-body">Portfolio</nuxt-link>

						<nuxt-link to="/contact" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white block px-3 py-2 rounded-md text-base font-medium font-body">Contact</nuxt-link>
					</div>
				</div>
			</nav>

			<!-- Header -->
			<header class="py-10">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 class="text-3xl md:text-4xl font-bold text-white font-display">
						{{ headerText.title }}
					</h1>
					<p v-if="headerText.subtitle" class="text-gray-500 lg:text-lg">{{ headerText.subtitle }}</p>
				</div>
			</header>
		</div>
	</div>

</template>

<script>
import LogoSvg from '@/components/icons/LogoSvg.vue'
import MenuSvg from 'heroicons/solid/menu.svg?inline'
import XSvg from 'heroicons/solid/x.svg?inline'

export default {
	components: {
		LogoSvg,
		MenuSvg,
		XSvg,
	},
  data() {
    return {
      isOpen: false,
    }
  },
	computed: {
		headerText() {
			switch(this.$route.path) {
				case '/': 
					return { 
						title: 'Designer + Front-end Developer', 
						subtitle:'I design and code beautifully simple things. I love what I do.' 
					}
				case '/portfolio': 
					return {
						title: 'My Recent Work',
						subtitle:'Simple ways in which I have inspired wonder through code + design.' 
					}
				case '/contact': 					
					return {
						title: 'Get In Touch'
					}
			}
		}
	},
	methods: {
		toggle() {
      this.isOpen = !this.isOpen
    },
	}
}
</script>
