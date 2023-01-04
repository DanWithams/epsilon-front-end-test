<template>
  <p :class="classes" class="inline-flex rounded-full  px-2 text-xs font-semibold leading-5 ">
    <slot name="default"></slot>
  </p>
</template>

<script>
export default {
  name: "Badge",
  props: {
    color: {
      required: true,
      type: String,
      validator: value => ['green', 'yellow', 'red', 'gray'].indexOf(value) > -1,
    },
  },
  computed: {
    classes() {
      switch (this.color) {
        case 'green':
          return 'bg-green-100 text-green-800 dark:bg-green-600 dark:text-green-100';
        case 'yellow':
          return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-600 dark:text-yellow-100';
        case 'red':
          return 'bg-red-100 text-red-800 dark:bg-red-600 dark:text-red-100';
        case 'gray':
        default:
          return 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-100';
      }
    }
  }
}
</script>

<style scoped>

</style>