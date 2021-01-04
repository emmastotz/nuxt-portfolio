<template>
  <div class="mx-8 my-8 space-y-8">
    <div class="flex flex-col justify-between items-center space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8 xl:justify-around">
      <div class="flex-shrink-0 rounded-full shadow-lg p-5 bg-white">
        <img src="/images/emma.jpg" class="object-cover rounded-full h-32 w-auto lg:h-40"/>
      </div>
      <DisplayCard> 
        <template #title>
          <h2 class="text-lg font-bold tracking-wider text-yellow-900 text-center">Hello, I'm Emma. Nice to meet you.</h2>
        </template>
        <template #content>
          <div class="flex">
            <p class="prose text-gray-500 text-center">
              Since beginning my journey as a designer nearly 5 years ago I've done remote work for startups, collaborated with Marketing and Brand teams to create digital and print designs for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my abilities one design problem at a time.
            </p>
          </div>
        </template>
      </DisplayCard>
    </div>
    <div class="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8">
      <DisplayCard> 
        <template #title>
          <h2 class="font-bold tracking-wider text-yellow-900 text-center">Designer</h2>
        </template>
        <template #content>
          <div class="grid gap-6">
            <p class="text-gray-500 text-center">
              I value simple content structure, clean design patterns, and thoughtful interactions.
            </p>
            <div class="text-center">
              <h3 class="text-yellow-900 font-semibold">Things I enjoy designing:</h3>
              <p class="text-gray-500">
                UX, UI, Mobile, Apps, Logos
              </p>
            </div>
            <ul class="text-center">
              <span class="text-yellow-900 font-semibold">Design Tools:</span>
              <li class="text-gray-500">Figma</li>
              <li class="text-gray-500">Adobe Creative Cloud</li>
              <li class="text-gray-500">Balsamiq</li>
              <li class="text-gray-500">Pen & Paper</li>
              <li class="text-gray-500">Sketch</li>
            </ul>
          </div>
        </template>
      </DisplayCard>
      <DisplayCard> 
        <template #title>
          <h2 class="font-bold tracking-wider text-yellow-900 text-center">Front-end Developer</h2>
        </template>
        <template #content>
          <div class="grid gap-6">
            <p class="text-gray-500 text-center">
              I like to code things from scratch, and enjoy bringing ideas to life in the browser.
            </p>
            <div class="text-center">
              <h3 class="text-yellow-900 font-semibold">Languages I speak:</h3>
              <p class="text-gray-500">
                HTML, CSS, Javascript, Java, Vue, Tailwind, React
              </p>
            </div>
            <ul class="text-center">
              <span class="text-yellow-900 font-semibold">Dev Tools:</span>
              <li class="text-gray-500">Github</li>
              <li class="text-gray-500">Visual Studio Code</li>
              <li class="text-gray-500">IntelliJ</li>
              <li class="text-gray-500">Stack Overflow</li>
              <li class="text-gray-500">Gitbash</li>
            </ul>
          </div>
        </template>
      </DisplayCard>
    </div>
  </div>
</template>

<script>
import DisplayCard from '@/components/DisplayCard.vue'

export default {
  components: {
    DisplayCard,
  }  
}
</script>
