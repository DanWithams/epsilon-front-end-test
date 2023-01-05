<template>
  <transition name="fade">
    <div class="py-2 px-4 flex flex-row justify-between items-center border-2 rounded-lg shadow-3xl shadow-zinc-900 text-zinc-800" :class="classes">
      <div class="text-sm">
        {{ notification.message }}
      </div>
      <svg v-if="!notification.disableClose" @click="remove()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  </transition>
</template>

<script>

export default {
  name: "Notification",
  props: {
    notification: {
      type: Object,
      required: true,
    }
  },
  computed: {
    classes() {
      const classes = [];
      switch (this.notification.type) {
        case 'positive':
          classes.push('border-green-500 dark:border-green-400 bg-green-100 dark:bg-green-700 dark:text-green-100');
          break;
        case 'negative':
          classes.push('border-red-500');
          break;
        case 'primary':
          classes.push('border-indigo-500');
          break;
        case 'secondary':
          classes.push('border-cyan-500');
          break;
        case 'default':
          classes.push('border-zinc-500');
          break;
      }

      return classes;
    }
  },
  methods: {
    remove() {
      this.$store.dispatch('notifications/remove', this.notification);
    }
  }
}
</script>

<style scoped>

</style>
