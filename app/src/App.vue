<template>
  <div class="z-50">

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

export default {
  components: {AppLayout},
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
