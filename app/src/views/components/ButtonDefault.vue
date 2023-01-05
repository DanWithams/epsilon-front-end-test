<template>
  <button type="button" class="inline-flex items-center rounded border border-transparent bg-zinc-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 disabled:cursor-not-allowed">
    <slot name="default"></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonDefault"
}
</script>

<style scoped>

</style>