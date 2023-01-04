<template>
  <div>
    <div v-if="isSidebarOpen" class="relative z-40 md:hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>

      <div class="fixed inset-0 z-40 flex">
        <AppSidebar @close="closeSidebar" />
      </div>
    </div>

    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <AppSidebar />
    </div>
    <div class="flex flex-1 flex-col md:pl-64">
      <main>
        <div class="py-6">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div class="block md:hidden absolute top-6 right-6 cursor-pointer" @click="openSidebar">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black dark:text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
            <h1 class="text-2xl font-semibold text-gray-900 dark:text-gray-300">{{ $route.meta.title }}</h1>
          </div>
          <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div class="py-4 text-black dark:text-white">
              <slot name="default"></slot>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AppSidebar from "../components/layouts/AppSidebar.vue";

export default {
  name: "AppLayout",
  components: {AppSidebar},
  data() {
    return {
      isSidebarOpen: false,
    }
  },
  methods: {
    openSidebar() {
      this.isSidebarOpen = true;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
  }
}
</script>

<style scoped>

</style>