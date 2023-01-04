<template>
  <div class="z-50">

  </div>
  <div class="z-10">
    <ul class="border-b border-black">
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'page-2' }">Page2</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>

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
