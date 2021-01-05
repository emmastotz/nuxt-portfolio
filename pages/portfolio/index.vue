<template>
  <div class="grid grid-cols-3 space-x-6">
    <PortfolioCard v-for="project in projects" :key="project.id" v-bind="{ project }" />
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
          description: ['Brand development', 'Marketing material development', 'Product design'],
          link: '/portfolio/virginia-distillery-co',
          image: '/images/distillery.jpg',
          date: 'Sep 2016 - Oct 2019',
        },
      ]
    }
  },
}
</script>
