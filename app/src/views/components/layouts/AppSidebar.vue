<template>
  <div class="flex flex-grow flex-col overflow-y-auto bg-purple-700 dark:bg-zinc-900 pt-5">
    <div class="flex flex-shrink-0 items-center px-4">
      <div class="block md:hidden absolute top-6 right-6 text-white cursor-pointer" @click="close">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <img class="w-64 mx-auto md:w-auto" src="/images/logo.webp" alt="Epsilon" />
    </div>
    <div class="mt-5 flex flex-1 flex-col">
      <nav class="flex-1 space-y-1 px-2 pb-4">
        <router-link :to="{ name: 'home' }" v-slot="{ isActive }" @click="close">
          <AppSidebarNavItem :active="isActive">
              <svg class="mr-3 h-6 w-6 flex-shrink-0 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Dashboard
          </AppSidebarNavItem>
        </router-link>
        <router-link :to="{ name: 'devices' }" v-slot="{ isActive }" @click="close">
          <AppSidebarNavItem :active="isActive">
            <svg class="mr-3 h-6 w-6 flex-shrink-0 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
            </svg>
            Devices
          </AppSidebarNavItem>
        </router-link>
      </nav>
      <div class="absolute bottom-6 left-6 flex flex-row items-center cursor-pointer text-white" @click="toggleDarkMode">
        <span class="mr-2 text-xs">Theme:</span>
        <svg v-if="!darkMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
        <svg v-if="darkMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import AppSidebarNavItem from "./AppSidebarNavItem.vue";

export default {
  name: "AppSidebar",
  emits: ['close'],
  components: {AppSidebarNavItem},
  computed: {
    darkMode() {
      return this.$store.state.app.darkMode;
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    toggleDarkMode() {
      this.$store.dispatch('app/toggleDarkMode');
    },
  }
}
</script>

<style scoped>

</style>