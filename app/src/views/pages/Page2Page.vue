<template>
  <div>
    Page2?
    <ul>
      <li v-for="device in devices">
        {{ device.id }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Page2Page",
  mounted() {
    this.$store.dispatch('devices/getDevices');
  },
  computed: {
    devices() {
      return this.$store.state.devices.devices;
    }
  }
}
</script>

<style scoped>

</style>