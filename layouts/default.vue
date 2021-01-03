<template>
  <div class="bg-gradient-to-bl from-indigo-500 via-green-300 to-blue-400">
    <div>
      <NavigationBar />
    </div>
    <!-- Overlay -->
    <main class="-mt-32">
      <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
          <div class="rounded-lg min-h-screen">
            <Nuxt />
          </div>
        </div>
      </div>
    </main>
    <div>
      <FooterBar />
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/HeaderBar.vue'
import FooterBar from '@/components/FooterBar.vue'

export default {
  components: {
    NavigationBar,
    FooterBar,
  }
}
</script>
