<template>
  <div class="bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        {{ project.name }}
      </h3>
      <div class="max-w-xl text-xs text-gray-400">
        <p>
          {{ project.date }} | {{ project.description }}
        </p>
      </div>
            <div class="mt-2 max-w-xl text-sm text-gray-500">
        <p>
          {{ project.subtitle }}
        </p>
      </div>
      <div class="mt-1 text-sm">
        <a :href="`${project.link}`" class="font-medium text-yellow-900 hover:text-yellow-800"> View project <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    }
  }
}
</script>
