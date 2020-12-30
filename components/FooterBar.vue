<template>
  <div class="bg-white py-2 px-8 flex justify-center space-x-6">
		<a href="https://www.linkedin.com/in/emma-stotz/" target="_blank">
			<LinkedInSvg class="fill-current text-gray-400 w-5 h-auto" />
		</a>
		<a href="https://github.com/emmastotz" target="_blank">
    	<GithubSvg class="fill-current text-gray-400 w-5 h-auto" />
		</a>
  </div>
</template>

<script>
import GithubSvg from '@/components/icons/GithubSvg.vue'
import LinkedInSvg from '@/components/icons/LinkedInSvg.vue'

export default {
	components: {
		GithubSvg,
		LinkedInSvg,
	}
}
</script>
