<template>
  <div v-if="project" class="shadow rounded-lg">
    <div class="bg-white rounded-t-lg p-4 border-b border-gray-200">
      <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
        <div class="ml-4 mt-4">
          <h3 class="leading-6 font-semibold text-yellow-900 md:text-sm">
            {{ project.name }}
          </h3>
          <p class="text-xs text-gray-400 md:hidden">{{ project.date }}</p>
        </div>
        <div v-if="isExternalLink" class="ml-4 mt-4 flex-shrink-0">
          <a :href="`${project.link}`" target="_blank" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-900 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-800">
            View
          </a>
        </div>
        <div v-else class="ml-4 mt-4 flex-shrink-0">
          <nuxt-link :to="`${project.link}`" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-900 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-800">
            View
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="group relative bg-white rounded-b-lg px-4 py-5 sm:px-6">
      <img 
        class="object-cover h-40 w-auto mx-auto rounded-lg opacity-100 transition duration-300 ease-in group-hover:opacity-10 xl:h-56" 
        :src="`${project.image}`" 
        :alt="`${project.name}`"
      >
      <div class="absolute top-12 left-0 w-full transition opacity-0 duration-300 ease-in group-hover:opacity-100 xl:top-20">
        <ul class="text-center p-2 rounded-lg text-white">
          <span class="text-sm text-yellow-900 font-semibold">Highlights:</span>
          <li 
            class="text-yellow-900" 
            v-for="item in project.description" 
            :key="item"
          >
            &rarr;
            <span class="text-sm text-gray-700">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    }
  },
  computed: {
    isExternalLink() {
      if(this.project.link === 'https://whitehawk.com/') {
        return true
      }
      return false
    }
  }
}
</script>
