<template>
  <div class="absolute top-0 left-0 right-0 mx-8 flex flex-row justify-end bg-red-400">
    <div class="absolute h-32">
      <Notification class="mt-6" v-for="notification in notifications" :key="notification.timestamp" :notification="notification"></Notification>
    </div>
  </div>
</template>

<script>
import Notification from "./Notification.vue";

export default {
  name: "NotificationDock",
  components: {Notification},
  mounted() {
    setInterval(() => this.$store.dispatch('notifications/prune'), 500);
  },
  computed: {
    notifications() {
      return this.$store.getters['notifications/notifications'];
    }
  },
}
</script>

<style scoped>

</style>
