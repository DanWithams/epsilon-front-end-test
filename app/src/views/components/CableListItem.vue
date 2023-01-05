<template>
  <div>
    <div class="block hover:bg-gray-50 dark:hover:bg-zinc-600">
      <div class="px-4 py-4 sm:px-6">
        <div class="flex items-center justify-between">
          <p class="truncate text-sm font-medium text-purple-600 dark:text-purple-500">{{ cable.name }}</p>
          <div class="ml-2 flex flex-shrink-0">
          </div>
        </div>
        <div class="mt-2 sm:flex sm:justify-between">
          <div class="md:w-1/3 sm:flex">
            <p class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-200 sm:mt-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              <span class="mr-2">From:</span>
              <span class="text-purple-500 dark:text-purple-300">{{ cable.aPort.fullyQualifiedName }}</span>
            </p>
          </div>
          <div class="md:w-1/3 sm:flex">
            <p class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-200 sm:mt-0 sm:ml-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              <span class="mr-2">To:</span>
              <span class="text-purple-500 dark:text-purple-300">{{ cable.zPort.fullyQualifiedName }}</span>
            </p>
          </div>
          <div class="mt-2 flex flex-grow items-center text-sm text-gray-500 sm:mt-0">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from "./Badge.vue";

export default {
  name: "CableListItem",
  components: {Badge},
  props: {
    cable: {
      required: true,
      type: Object,
      validitor: value => value.hasOwnProperty('id'),
    },
  },
}
</script>

<style scoped>

</style>