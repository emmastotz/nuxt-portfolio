<template>
  <div class="bg-yellow-900">
    <div>
      <HeaderBar />
    </div>
    <!-- Overlay -->
    <main class="min-h-screen -mt-32">
      <div class="max-w-7xl mx-auto pb-8 px-4 sm:px-6 lg:px-8">
        <div class="bg-gray-200 rounded-lg shadow py-6 sm:px-6">
          <div class="rounded-lg">
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
import HeaderBar from '@/components/HeaderBar.vue'
import FooterBar from '@/components/FooterBar.vue'

export default {
  components: {
    HeaderBar,
    FooterBar,
  }
}
</script>
