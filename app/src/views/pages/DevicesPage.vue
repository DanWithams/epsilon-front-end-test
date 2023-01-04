<template>
  <div>
    Devices!
    <ul>
      <li v-for="device in devices">
        {{ device.id }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DevicesPage",
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