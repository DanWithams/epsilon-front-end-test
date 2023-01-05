<template>
  <ModalFrame title="Connect Port" @modal:show="handleModalShow" @modal:hide="handleModalHide">
    <template v-slot:body>
      <p class="mb-2 text-gray-800 dark:text-zinc-400">Create a job to connect the port.</p>
      <FormLabel>Select Port</FormLabel>
      <InputSelect :options="ports" v-model="zPort" labelled-by="fullyQualifiedName"></InputSelect>
    </template>
    <template v-slot:footer="{ hideModal }">
      <div class="w-full flex flex-row justify-between">
        <ButtonDefault @click="hideModal">Close</ButtonDefault>
        <ButtonPrimary :disabled="!zPort" @click="createJob">Create Job</ButtonPrimary>
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
  name: "ConnectPortModal",
  emits: ['job:created'],
  components: {ButtonPrimary, ButtonDefault, InputSelect, FormLabel, ModalFrame},
  props: {
    aPort: {

    }
  },
  data() {
    return {
      zPort: null,
    };
  },
  computed: {
    ports() {
      return this.$store.state.ports.ports.filter(
          port => port.pId !== this.aPort.pId && !port.cable && !port.job
      );
    }
  },
  methods: {
    handleModalShow() {
      this.$store.dispatch('ports/getPorts');
    },
    handleModalHide() {
      this.zPort = null;
    },
    async createJob() {
      await Api.createConnectJob({
        aPort: this.aPort,
        zPort: this.zPort,
      });
      this.$emit('job:created');
      this.$store.dispatch('notifications/add', {
        type: 'positive',
        duration: 5000,
        disableClose: true,
        message: 'Connection job was created successfully',
      });
    },
  },
}
</script>

<style scoped>

</style>