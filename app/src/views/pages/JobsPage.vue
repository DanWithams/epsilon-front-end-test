<template>
  <List>
    <div v-for="job in jobs">
      <JobListItem :job="job"></JobListItem>
    </div>
  </List>
</template>

<script>
import List from "../components/List.vue";
import JobListItem from "../components/JobListItem.vue";

export default {
  name: "JobsPage",
  components: {JobListItem, List},
  async mounted() {
    await this.$store.dispatch('devices/getDevices');
    [
      { id: 1, name: 'JB-123', type: 'connect', completed: false, aPort: this.$store.state.devices.devices[0].ports[0], zPort: this.$store.state.devices.devices[1].ports[0]},
      { id: 2, name: 'JB-777', type: 'disconnect', completed: false, aPort: this.$store.state.devices.devices[1].ports[1], zPort: this.$store.state.devices.devices[2].ports[0] },
      { id: 3, name: 'JB-911', type: 'connect', completed: true, aPort: this.$store.state.devices.devices[2].ports[1], zPort: this.$store.state.devices.devices[0].ports[1] },
    ].forEach(job => this.$store.dispatch('jobs/addJob', job));
  },
  computed: {
    jobs() {
      return this.$store.state.jobs.jobs;
    }
  }
}
</script>

<style scoped>

</style>