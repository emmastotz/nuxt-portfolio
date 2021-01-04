<template>
	<div>
		<div class="bg-gray-800 pb-32">
			<nav class="bg-gray-800">
				<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div class="border-b border-gray-700">
						<div class="flex items-center justify-between h-16 px-4 sm:px-0">
							<!-- Logo -->
							<div class="flex-shrink-0">
								<LogoSvg class="h-10 w-10 fill-current text-white"/>
							</div>
							<div class="hidden md:block">
								<div class="flex items-baseline space-x-4">
									<nuxt-link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white px-3 py-2 rounded-md text-sm font-medium">About Me</nuxt-link>

									<nuxt-link to="/portfolio" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white px-3 py-2 rounded-md text-sm font-medium">Portfolio</nuxt-link>

									<nuxt-link to="/contact" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</nuxt-link>
								</div>
							</div>
							<div class="-mr-2 flex md:hidden">
								<!-- Mobile menu button -->
								<button class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" @click="toggle()">
									<span class="sr-only">Open main menu</span>
									<MenuSvg 
										class="w-6 h-auto text-white" 
										:class="isOpen ? 'hidden' : 'block'" 
									/>
									<XSvg 
										class="w-6 h-auto text-white" 
										:class="isOpen ? 'block' : 'hidden'" 
									/>
								</button>
							</div>
						</div>
					</div>
				</div>

				<div class="hidden border-b border-gray-700 md:hidden" :class="isOpen ? 'block' : 'hidden'">
					<div class="px-2 py-3 space-y-1 sm:px-3">
						<nuxt-link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white block px-3 py-2 rounded-md text-base font-medium">About Me</nuxt-link>

						<nuxt-link to="/portfolio" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white block px-3 py-2 rounded-md text-base font-medium">Portfolio</nuxt-link>

						<nuxt-link to="/contact" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</nuxt-link>
					</div>
				</div>
			</nav>

			<!-- Header -->
			<header class="py-10">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 class="text-3xl font-bold text-white capitalize">
						{{ headerText }}
					</h1>
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
			if(this.$route.path === '/'){
				return 'About Me'
			}
			const path = this.$route.path.split('/')
			return path[1]
		}
	},
	methods: {
		toggle() {
      this.isOpen = !this.isOpen
    },
	}
}
</script>
