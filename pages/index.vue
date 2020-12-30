<template>
  <div class="mx-8 my-8">
    <DisplayCard> 
      <template #title>
        <h2 class="font-semibold tracking-wider">About Me</h2>
      </template>
      <template #content>
        <div class="flex">
          <div class="flex-1 rounded-full bg-gray-100">
            <img src="/static/images/emma.jpg" />
          </div>
          <p class="prose text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </template>
    </DisplayCard>
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
