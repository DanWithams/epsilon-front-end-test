<template>
  <div class="z-50">
    <div id="modal-container"></div>
    <NotificationDock></NotificationDock>
  </div>
  <div class="z-10">
    <router-view class="z-10" v-slot="{ Component, route }">
      <component v-bind="route.meta.layoutProps" :is="route.meta.layout || 'AppLayout'">
          <component :is="Component" :key="route.meta.baseName || route.name"></component>
      </component>
    </router-view>
  </div>
</template>

<script>
import AppLayout from "./views/layouts/AppLayout.vue";
import NotificationDock from "./views/components/NotificationDock.vue";

export default {
  components: {NotificationDock, AppLayout},
  watch: {
    '$store.state.app.darkMode': (darkMode) => {
      document.body.classList.toggle('dark', darkMode);
    },
  },
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
