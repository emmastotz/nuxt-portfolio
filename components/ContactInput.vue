<template>
  <div class="px-4 py-5 bg-white sm:p-6">
    <div class="grid grid-cols-6 gap-6">
      <div class="col-span-6 sm:col-span-3">
        <label for="first_name" class="block text-sm font-medium text-gray-700">Full name</label>
        <input v-model="proxy.name" type="text" name="full_name" id="full_name" autocomplete="name" class="mt-1 focus:ring-yellow-900 focus:border-yellow-900 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>

      <div class="col-span-6 sm:col-span-4">
        <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
        <input v-model="proxy.email" type="text" name="email_address" id="email_address" autocomplete="email" class="mt-1 focus:ring-yellow-900 focus:border-yellow-900 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>

      <div class="col-span-6 sm:col-span-4">
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea v-model="message" type="text" name="message" id="message" rows="5" class="mt-1 focus:ring-yellow-900 focus:border-yellow-900 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
      </div>
    </div>
  </div>
</template>

<script>
import { objectProxy } from '@/util/computedProxies'

export default {
  props: {
    value: {
      type: Object,
      default: null
    }
  },
  computed: {
    proxy: objectProxy
  }
}
</script>
