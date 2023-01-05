<template>
  <div>
    <List v-if="jobs.length > 0">
      <div v-for="job in jobs">
        <JobListItem :job="job"
                     @complete-modal:show="showCompleteModal(job)">

        </JobListItem>
      </div>
    </List>
    <div v-if="jobs.length === 0" class="flex flex-row h-64 justify-center items-center text-zinc-400 dark:text-zinc-500">
      There are no jobs to show
    </div>
    <CompleteJobModal v-model:show="completeModalVisible"
                      :job="selectedJob"
                      @job:completed="handleJobCreated">
    </CompleteJobModal>
  </div>
</template>

<script>
import List from "../components/List.vue";
import JobListItem from "../components/JobListItem.vue";
import CompleteJobModal from "../components/modals/CompleteJobModal.vue";

export default {
  name: "JobsPage",
  components: {CompleteJobModal, JobListItem, List},
  async mounted() {
    this.getJobs()
  },
  data() {
    return {
      selectedJob: null,
      completeModalVisible: false,
    };
  },
  computed: {
    jobs() {
      return this.$store.state.jobs.jobs;
    }
  },
  methods: {
    async getJobs() {
      await this.$store.dispatch('jobs/getJobs');
    },
    showCompleteModal(job) {
      this.selectedJob = job;
      this.completeModalVisible = true;
    },
    hideCompleteModal() {
      this.completeModalVisible = false;
    },
    handleJobCreated() {
      this.hideCompleteModal();
      this.getJobs();
    }
  },
}
</script>

<style scoped>

</style>