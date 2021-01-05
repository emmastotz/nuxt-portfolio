<template>
  <main class="divide-y divide-gray-800">
    <div class="grid grid-cols-1 gap-4">
      <h2 class="text-center text-gray-800 text-sm font-body font-semibold uppercase tracking-widest md:text-left">Professional Projects</h2>
      <div class="grid gap-6 md:grid-cols-3 md:items-center lg:gap-8 xl:gap-10">
        <PortfolioCard v-for="project in projects" :key="project.id" v-bind="{ project }" />
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 mt-6 pt-6">
      <h2 class="text-center text-gray-800 text-sm font-body font-semibold uppercase tracking-widest md:text-left">Side Projects</h2>
      <div class="grid gap-6">
        <SideProjectCard v-for="project in sideProjects" :key="project.id" v-bind="{ project }" />
      </div>
    </div>
  </main>
</template>

<script>
import PortfolioCard from '@/components/PortfolioCard.vue'
import SideProjectCard from '@/components/SideProjectCard.vue'

export default {
  components: {
    PortfolioCard,
    SideProjectCard,
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
      ],
      sideProjects: [
        {
          id: 1,
          name: 'Replace the Space',
          subtitle: 'Vanilla Javascript.',
          description: 'Space-themed hangman',
          link: 'https://emmastotz.github.io/replace-the-space/',
          date: 'Sep 2019',
        },
        {
          id: 2,
          name: 'Chum Bucket',
          subtitle: 'An exercise in creating a REST API.',
          description: "Don't get catfished, find the right chum",
          link: 'https://immense-wave-93212.herokuapp.com/',
          date: 'Nov 2019',
        },
        {
          id: 3,
          name: 'Giftastic',
          subtitle: 'Using an open-source API.',
          description: 'Choosy moms choose gif',
          link: 'https://emmastotz.github.io/giftastic/',
          date: 'Oct 2019',
        },
      ]
    }
  },
}
</script>
