<template>
	<div>
		<div class="bg-gray-800 pb-32">
			<nav class="bg-gray-800">
				<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div class="border-b border-gray-700">
						<div class="flex items-center justify-between h-16 px-4 sm:px-0">
							<div class="flex items-center">
								<!-- Logo -->
								<div class="flex-shrink-0">
									<img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
								</div>
								<div class="hidden md:block">
									<div class="ml-10 flex items-baseline space-x-4">
										<nuxt-link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white px-3 py-2 rounded-md text-sm font-medium">About Me</nuxt-link>

										<nuxt-link to="/portfolio" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white px-3 py-2 rounded-md text-sm font-medium">Portfolio</nuxt-link>

										<nuxt-link to="/contact" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</nuxt-link>
									</div>
								</div>
							</div>
							<div class="-mr-2 flex md:hidden">
								<!-- Mobile menu button -->
								<button class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" @click="toggle()">
									<span class="sr-only">Open main menu</span>
									<!--
										Heroicon name: menu

										Menu open: "hidden", Menu closed: "block"
									-->
									<MenuSvg 
										class="w-6 h-auto fill-current text-white" 
										:class="isOpen ? 'hidden' : 'block'" 
									/>
									<!--
										Heroicon name: x

										Menu open: "block", Menu closed: "hidden"
									-->
									<XSvg 
										class="w-6 h-auto fill-current text-white" 
										:class="isOpen ? 'block' : 'hidden'" 
									/>
								</button>
							</div>
						</div>
					</div>
				</div>

				<!--
					Mobile menu, toggle classes based on menu state.

					Open: "block", closed: "hidden"
				-->
				<div v-if="isOpen" class="hidden border-b border-gray-700 md:hidden">
					<div class="px-2 py-3 space-y-1 sm:px-3">
						<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
						<a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>

						<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

						<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

						<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>

						<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a>
					</div>
					<div class="pt-4 pb-3 border-t border-gray-700">
						<div class="flex items-center px-5">
							<div class="flex-shrink-0">
								<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
							</div>
							<div class="ml-3">
								<div class="text-base font-medium leading-none text-white">Tom Cook</div>
								<div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
							</div>
							<button class="ml-auto bg-gray-800 flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
								<span class="sr-only">View notifications</span>
								<!-- Heroicon name: bell -->
								<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
								</svg>
							</button>
						</div>
						<div class="mt-3 px-2 space-y-1">
							<a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>

							<a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>

							<a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
						</div>
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
import MenuSvg from 'heroicons/solid/menu.svg?inline'
import XSvg from 'heroicons/solid/x.svg?inline'

export default {
	components: {
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
