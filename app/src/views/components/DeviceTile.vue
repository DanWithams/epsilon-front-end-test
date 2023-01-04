<template>
  <div class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white dark:bg-zinc-700 shadow">
    <div class="flex w-full items-center justify-between space-x-6 p-6">
      <div class="flex-1 truncate">
        <div class="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
          </svg>
          <h3 class="truncate text-sm font-medium text-gray-900 dark:text-gray-100">{{ title }}</h3>
          <Badge color="green">Online</Badge>
        </div>
        <p class="mt-1 truncate text-sm text-gray-500 dark:text-gray-200">This is a device</p>
      </div>
      <img class="h-10 flex-shrink-0 rounded-full" src="/images/e.png" alt="">
    </div>
  </div>
</template>

<script>
import Badge from "./Badge.vue";

export default {
  name: "DeviceTile",
  components: {Badge},
  emits: ['goto:device'],
  props: {
    device: {
      required: true,
      type: Object,
    },
  },
  computed: {
    title() {
      return this.device.deviceHeader;
    },
  },
  methods: {
    goToDevice() {
      this.$emit('goto:device');
    },
  },
}
</script>

<style scoped>

</style>