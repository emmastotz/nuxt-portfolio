<template>
  <div class="bg-white rounded-lg shadow divide-y mx-auto">
    <div class="px-6 py-6">
      <h2 class="font-bold tracking-wider text-yellow-900 text-center">
        <slot name="title" />
      </h2>
    </div>
    <div class="px-6 py-6 text-gray-500 text-center">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>
