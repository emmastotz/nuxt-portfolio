<template>
  <div class="bg-gradient-to-bl from-white to-gray-400">
    <div class="sticky top-0 left-0">
      <NavigationBar />
    </div>
    <div class="mx-auto min-h-screen">
      <Nuxt />
    </div>
    <div class="sticky bottom-0 left-0">
      <FooterBar />
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import FooterBar from '@/components/FooterBar.vue'

export default {
  components: {
    NavigationBar,
    FooterBar,
  }
}
</script>
