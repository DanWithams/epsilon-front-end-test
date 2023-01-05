<template>
  <div>
    <DeviceTile :device="device" class="mb-8"></DeviceTile>
    <h2 class="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300">Ports</h2>
    <List>
      <div v-for="port in ports">
        <PortListItem :port="port"
                      @connect-modal:show="showConnectModal(port)"
                      @disconnect-modal:show="showDisconnectModal">
        </PortListItem>
      </div>
    </List>
    <ConnectPortModal v-model:show="connectModalVisible"
                      :a-port="selectedPort"
                      @job:created="handleJobCreated">
    </ConnectPortModal>
  </div>
</template>

<script>
import DeviceTile from "../components/DeviceTile.vue";
import PortListItem from "../components/PortListItem.vue";
import List from "../components/List.vue";
import ConnectPortModal from "../components/modals/ConnectPortModal.vue";

export default {
  name: "DevicePortPage",
  components: {ConnectPortModal, List, PortListItem, DeviceTile},
  mounted() {
    this.getDevice();
  },
  data() {
    return {
      selectedPort: false,
      connectModalVisible: false,
      disconnectModalVisible: false,
    };
  },
  computed: {
    device() {
      return this.$store.state.devices.device || { ports: [] };
    },
    ports() {
      return this.device.ports || [];
    }
  },
  methods: {
    async getDevice() {
      await this.$store.dispatch('devices/getDevice', { id: this.$route.params.id })
    },
    handleJobCreated() {
      this.hideConnectModal();
      this.selectedPort = null;
      this.getDevice();
    },
    showConnectModal(port) {
      this.selectedPort = port;
      this.connectModalVisible = true;
    },
    hideConnectModal() {
      this.connectModalVisible = false;
    },
    showDisconnectModal() {
      this.disconnectModalVisible = true;
    },
    hideDisconnectModal() {
      this.disconnectModalVisible = false;
    },
  }
}
</script>

<style scoped>

</style>