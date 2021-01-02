<template>
  <footer class="bg-white">
		<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
			<div class="flex justify-center space-x-6 md:order-2">
				<a href="https://www.linkedin.com/in/emma-stotz/" target="_blank" class="text-gray-400 hover:text-gray-500">
					<span class="sr-only">LinkedIn</span>
					<LinkedInSvg class="fill-current text-gray-400 w-6 h-auto" />
				</a>

				<a href="https://github.com/emmastotz" target="_blank" class="text-gray-400 hover:text-gray-500">
					<span class="sr-only">GitHub</span>
					<GithubSvg class="fill-current text-gray-400 w-6 h-auto" />
				</a>

				<a href="#" class="text-gray-400 hover:text-gray-500">
					<span class="sr-only">Dribbble</span>
					<DribbbleSvg class="fill-current text-gray-400 w-6 h-auto" />
				</a>
			</div>
			<div class="mt-8 md:mt-0 md:order-1">
				<p class="text-center text-base text-gray-400">
					&copy; Emma Stotz, 2021. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
import DribbbleSvg from '@/components/icons/DribbbleSvg.vue'
import GithubSvg from '@/components/icons/GithubSvg.vue'
import LinkedInSvg from '@/components/icons/LinkedInSvg.vue'

export default {
	components: {
		DribbbleSvg,
		GithubSvg,
		LinkedInSvg,
	}
}
</script>