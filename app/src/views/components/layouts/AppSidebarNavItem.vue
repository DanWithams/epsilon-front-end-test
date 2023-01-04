<template>
  <div :class="{ 'bg-purple-800 text-white' : active, 'text-indigo-100 hover:bg-purple-600' : !active }"
      class="group flex items-center px-2 py-2 text-sm font-medium rounded-md">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: "AppSidebarNavItem",
  props: {
    active: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>

</style>