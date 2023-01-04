<template>
  <TileGrid>
    <router-link v-for="device in devices" :to="{ name: 'devices.ports', params: { id: device.id } }">
      <DeviceTile :device="device">
        {{ device.id }}
      </DeviceTile>
    </router-link>
  </TileGrid>
</template>

<script>
import TileGrid from "../components/TileGrid.vue";
import DeviceTile from "../components/DeviceTile.vue";

export default {
  name: "DevicesPage",
  components: {DeviceTile, TileGrid},
  mounted() {
    this.$store.dispatch('devices/getDevices');
  },
  computed: {
    devices() {
      return this.$store.state.devices.devices;
    },
  },
}
</script>

<style scoped>

</style>