<template>
  <div>
    <div class="block hover:bg-gray-50 dark:hover:bg-zinc-600">
      <div class="px-4 py-4 sm:px-6">
        <div class="flex items-center justify-between">
          <p class="truncate text-sm font-medium text-purple-600 dark:text-purple-500">#{{ job.id }}</p>
          <div class="ml-2 flex flex-shrink-0">
            <Badge v-if="job.completed" color="green">Completed</Badge>
            <Badge v-if="!job.completed" color="yellow">Pending</Badge>
          </div>
        </div>
        <div class="mt-2 sm:flex sm:justify-between">
          <div class="md:w-1/3 sm:flex">
            <p class="flex items-center text-sm text-gray-500 dark:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
              </svg>
              <span class="mr-2">Type:</span>
              <span class="text-purple-500 dark:text-purple-300 uppercase">{{ job.type }}</span>
            </p>
          </div>
          <div class="md:w-1/4 sm:flex">
            <p class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-200 sm:mt-0 sm:ml-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              <span class="mr-2">From:</span>
              <span class="text-purple-500 dark:text-purple-300">{{ job.aPort.fullyQualifiedName }}</span>
            </p>
          </div>
          <div class="md:w-1/4 sm:flex">
            <p class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-200 sm:mt-0 sm:ml-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              <span class="mr-2">To:</span>
              <span class="text-purple-500 dark:text-purple-300">{{ job.zPort.fullyQualifiedName }}</span>
            </p>
          </div>
          <div class="mt-2 flex-grow flex justify-end items-center text-sm text-gray-500 sm:mt-0">
            <ButtonPrimary v-if="!job.completed" @click="showCompleteModal">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Complete
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from "./Badge.vue";
import ButtonPrimary from "./ButtonPrimary.vue";

export default {
  name: "JobListItem",
  emits: ['complete-modal:show'],
  components: {ButtonPrimary, Badge},
  props: {
    job: {
      required: true,
      type: Object,
    },
  },
  methods: {
    showCompleteModal() {
      this.$emit('complete-modal:show');
    },
  }
}
</script>

<style scoped>

</style>