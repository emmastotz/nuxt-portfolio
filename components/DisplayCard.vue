<template>
  <div class="bg-white rounded-lg shadow max-w-6xl divide-y">
      <div class="px-6 py-6">
        <slot name="title" />
      </div>
      <div class="px-6 py-6">
        <slot name="content" />
      </div>
  </div>
</template>

<script>
export default {

}
</script>
