<template>
  <div>
    <List v-if="cables.length > 0">
      <div v-for="cable in cables">
        <CableListItem :cable="cable"></CableListItem>
      </div>
    </List>
    <div v-if="cables.length === 0" class="flex flex-row h-64 justify-center items-center text-zinc-400 dark:text-zinc-500">
      There are no cables to show
    </div>
  </div>
</template>

<script>
import List from "../components/List.vue";
import CableListItem from "../components/CableListItem.vue";

export default {
  name: "CablesPage",
  components: {CableListItem, List},
  async mounted() {
    await this.$store.dispatch('cables/getCables');
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