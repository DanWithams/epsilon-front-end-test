<template>
  <div class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white dark:bg-zinc-700 shadow">
    <div class="flex w-full items-center justify-between space-x-6 p-6">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "Tile",
}
</script>

<style scoped>

</style>