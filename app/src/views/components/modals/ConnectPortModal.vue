<template>
  <ModalFrame title="Connect Port" @modal:hide="handleModalHide">
    <template v-slot:body>
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
  mounted() {
    this.$store.dispatch('ports/getPorts');
  },
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
      console.log(this.$store.state.ports.ports);
      return this.$store.state.ports.ports.filter(
          port => port.pId !== this.aPort.pId
      );
    }
  },
  methods: {
    handleModalHide() {
      this.zPort = null;
    },
    async createJob() {
      await Api.createJob({
        aPort: this.aPort,
        zPort: this.zPort,
        type: 'connect',
      });
      this.$emit('job:created');
    }
  }
}
</script>

<style scoped>

</style>