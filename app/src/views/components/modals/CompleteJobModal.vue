<template>
  <ModalFrame title="Complete Job" @modal:hide="handleModalHide">
    <template v-slot:body>
      <p class="mb-2 text-gray-800 dark:text-zinc-400">Are you sure you want to complete this job?</p>
    </template>
    <template v-slot:footer="{ hideModal }">
      <div class="w-full flex flex-row justify-between">
        <ButtonDefault @click="hideModal">Close</ButtonDefault>
        <ButtonPrimary @click="createJob">Complete Job</ButtonPrimary>
      </div>
    </template>
  </ModalFrame>
</template>

<script>
import ModalFrame from "./ModalFrame.vue";
import ButtonDefault from "../ButtonDefault.vue";
import ButtonPrimary from "../ButtonPrimary.vue";
import {default as Api} from "../../../api/mock.js";

export default {
  name: "CompleteJobModal",
  emits: ['job:completed'],
  components: {ButtonPrimary, ButtonDefault, ModalFrame},
  props: {
    job: {

    }
  },
  methods: {
    handleModalHide() {
      this.zPort = null;
    },
    async createJob() {
      await Api.completeJob(this.job);
      this.$emit('job:completed');
    }
  }
}
</script>

<style scoped>

</style>