<template>
  <button type="button" class="inline-flex items-center rounded border border-transparent bg-purple-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
    <slot name="default"></slot>
  </button>
</template>

<script>
export default {
  name: "Button"
}
</script>

<style scoped>

</style>