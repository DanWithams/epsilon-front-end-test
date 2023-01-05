<template>
  <ModalFrame title="Disconnect Port">
    <template v-slot:body>
      <p class="mb-2 text-gray-800 dark:text-zinc-400">Create a job to disconnect the port.</p>
    </template>
    <template v-slot:footer="{ hideModal }">
      <div class="w-full flex flex-row justify-between">
        <ButtonDefault @click="hideModal">Close</ButtonDefault>
        <ButtonPrimary @click="createJob">Create Job</ButtonPrimary>
      </div>
    </template>
  </ModalFrame>
</template>

<script>
import ModalFrame from "./ModalFrame.vue";
import FormLabel from "../forms/FormLabel.vue";
import InputSelect from "../forms/InputSelect.vue";
import ButtonDefault from "../ButtonDefault.vue";
import ButtonPrimary from "../ButtonPrimary.vue";
import {default as Api} from "../../../api/mock.js";

export default {
  name: "DisconnectPortModal",
  emits: ['job:created'],
  components: {ButtonPrimary, ButtonDefault, InputSelect, FormLabel, ModalFrame},
  props: {
    cable: {

    }
  },
  computed: {
    otherPort() {
      return {};
    }
  },
  methods: {
    async createJob() {
      await Api.createDisconnectJob({
        cable: this.cable,
      });
      this.$emit('job:created');
      this.$store.dispatch('notifications/add', {
        type: 'positive',
        duration: 5000,
        disableClose: true,
        message: 'Disconnection job was created successfully',
      });
    },
  },
}
</script>

<style scoped>

</style>