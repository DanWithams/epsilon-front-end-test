<template>
  <List>
    <div v-for="cable in cables">
      <CableListItem :cable="cable"></CableListItem>
    </div>
  </List>
</template>

<script>
import List from "../components/List.vue";
import CableListItem from "../components/CableListItem.vue";

export default {
  name: "CablesPage",
  components: {CableListItem, List},
  async mounted() {
    await this.$store.dispatch('devices/getDevices');
    [
      { id: 1, name: 'C-000123', aPort: this.$store.state.devices.devices[0].ports[0], zPort: this.$store.state.devices.devices[1].ports[0]},
      { id: 2, name: 'C-000777', aPort: this.$store.state.devices.devices[1].ports[1], zPort: this.$store.state.devices.devices[2].ports[0] },
      { id: 3, name: 'C-000911', aPort: this.$store.state.devices.devices[2].ports[1], zPort: this.$store.state.devices.devices[0].ports[1] },
    ].forEach(cable => this.$store.dispatch('cables/addCable', cable));
  },
  computed: {
    cables() {
      return this.$store.state.cables.cables;
    }
  }
}
</script>

<style scoped>

</style>