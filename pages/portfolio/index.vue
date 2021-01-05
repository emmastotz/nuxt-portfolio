<template>
  <div class="grid grid-cols-1 gap-4">
    <h2 class="text-center text-gray-800 text-sm font-body font-semibold uppercase tracking-widest md:text-left">Professional Projects</h2>
    <div class="grid gap-6 md:grid-cols-3 md:items-center lg:gap-8 xl:gap-10">
      <PortfolioCard v-for="project in projects" :key="project.id" v-bind="{ project }" />
    </div>
  </div>
</template>

<script>
import PortfolioCard from '@/components/PortfolioCard.vue'

export default {
  components: {
    PortfolioCard,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'WhiteHawk CEC',
          description: ['Front-end development', 'UI design'],
          link: 'https://whitehawk.com/',
          image: '/images/computer.jpg',
          date: 'Jan 2020 - Current',
        },
        {
          id: 2,
          name: 'Southwest Spirits',
          description: ['Marketing material development', 'Product design'],
          link: '/portfolio/southwest-spirits',
          image: '/images/mule.jpg',
          date: 'May 2019 - Feb 2020 ',
        },
        {
          id: 3,
          name: 'Virginia Distillery Co.',
          description: ['Brand development', 'Marketing material development'],
          link: '/portfolio/virginia-distillery-co',
          image: '/images/distillery.jpg',
          date: 'Sep 2016 - Oct 2019',
        },
      ]
    }
  },
}
</script>
