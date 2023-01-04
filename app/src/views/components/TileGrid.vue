<template>
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: "TileGrid"
}
</script>

<style scoped>

</style>