<template>
  <div class="mx-8 my-8 space-y-8">
    <div class="flex flex-col justify-between items-center space-y-8 md:items-end lg:flex-row lg:space-y-0 lg:space-x-8">
      <div class="flex-shrink-0 rounded-full shadow-lg p-5 bg-white md:-mt-36">
        <img src="/images/emma.jpg" class="object-cover rounded-full h-32 w-auto lg:h-40 border-2 border-gray-200"/>
      </div>
      <DisplayCard> 
        <template #title>
          <h2 class="text-lg">Hello, I'm Emma. Nice to meet you.</h2>
        </template>
        <template #content>
          <p>
            Since beginning my journey as a designer nearly 5 years ago I've done remote work for startups, collaborated with Marketing and Brand teams to create digital and print designs for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my abilities one design problem at a time.
          </p>
        </template>
      </DisplayCard>
    </div>
    <div class="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8">
      <DisplayCard> 
        <template #title>
          Designer
        </template>
        <template #content>
          <div class="grid gap-6">
            <p>
              I value simple content structure, clean design patterns, and thoughtful interactions.
            </p>
            <div>
              <h3 class="text-yellow-900 font-semibold">Things I enjoy designing:</h3>
              <p>
                UX, UI, Mobile, Apps, Logos
              </p>
            </div>
            <ul>
              <span class="text-yellow-900 font-semibold">Design Tools:</span>
              <li>Figma</li>
              <li>Adobe Creative Cloud</li>
              <li>Balsamiq</li>
              <li>Pen & Paper</li>
              <li>Sketch</li>
            </ul>
          </div>
        </template>
      </DisplayCard>
      <DisplayCard> 
        <template #title>
          Front-end Developer
        </template>
        <template #content>
          <div class="grid gap-6">
            <p>
              I like to code things from scratch, and enjoy bringing ideas to life in the browser.
            </p>
            <div>
              <h3 class="text-yellow-900 font-semibold">Languages I speak:</h3>
              <p>
                HTML, CSS, Javascript, Vue, Tailwind, React, Java
              </p>
            </div>
            <ul>
              <span class="text-yellow-900 font-semibold">Dev Tools:</span>
              <li>Github</li>
              <li>Visual Studio Code</li>
              <li>IntelliJ</li>
              <li>Stack Overflow</li>
              <li>Gitbash</li>
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
