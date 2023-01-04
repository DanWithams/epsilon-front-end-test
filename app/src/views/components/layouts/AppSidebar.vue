<template>
  <div class="flex flex-grow flex-col overflow-y-auto bg-purple-700 dark:bg-purple-900 pt-5">
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
            <svg class="mr-3 h-6 w-6 flex-shrink-0 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
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