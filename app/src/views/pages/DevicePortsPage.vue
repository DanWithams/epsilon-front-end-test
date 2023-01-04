<template>
  <div>
    <DeviceTile :device="device" class="mb-8"></DeviceTile>
    <h1 class="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300">Ports</h1>
    <List>
      <div v-for="port in ports">
        <PortListItem :port="port"></PortListItem>
      </div>
    </List>
  </div>
</template>

<script>
import DeviceTile from "../components/DeviceTile.vue";
import PortListItem from "../components/PortListItem.vue";
import List from "../components/List.vue";

export default {
  name: "DevicePortPage",
  components: {List, PortListItem, DeviceTile},
  mounted() {
    this.$store.dispatch('devices/getDevice', { id: this.$route.params.id })
  },
  computed: {
    device() {
      return this.$store.state.devices.device || { ports: [] };
    },
    ports() {
      return this.device.ports || [];
    }
  }
}
</script>

<style scoped>

</style>