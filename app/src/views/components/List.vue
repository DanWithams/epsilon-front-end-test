<template>
  <div class="overflow-hidden bg-white dark:bg-zinc-700 shadow sm:rounded-md">
    <div role="list" class="divide-y divide-gray-200 dark:divide-zinc-800">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "List"
}
</script>

<style scoped>

</style>