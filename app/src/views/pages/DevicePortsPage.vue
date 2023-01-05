<template>
  <div>
    <DeviceTile :device="device" class="mb-8"></DeviceTile>
    <h2 class="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300">Ports</h2>
    <List>
      <div v-for="port in ports">
        <PortListItem :port="port"
                      @connect-modal:show="showConnectModal(port)"
                      @disconnect-modal:show="showDisconnectModal(port)">
        </PortListItem>
      </div>
    </List>
    <ConnectPortModal v-model:show="connectModalVisible"
                      :a-port="selectedPort"
                      @job:created="handleJobCreated">
    </ConnectPortModal>
    <DisconnectPortModal v-model:show="disconnectModalVisible"
                      :cable="selectedCable"
                      @job:created="handleJobCreated">
    </DisconnectPortModal>
  </div>
</template>

<script>
import DeviceTile from "../components/DeviceTile.vue";
import PortListItem from "../components/PortListItem.vue";
import List from "../components/List.vue";
import ConnectPortModal from "../components/modals/ConnectPortModal.vue";
import DisconnectPortModal from "../components/modals/DisconnectPortModal.vue";

export default {
  name: "DevicePortPage",
  components: {DisconnectPortModal, ConnectPortModal, List, PortListItem, DeviceTile},
  mounted() {
    this.getDevice();
  },
  data() {
    return {
      selectedPort: null,
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
    },
    selectedCable() {
      return (this.selectedPort || {}).cable;
    }
  },
  methods: {
    async getDevice() {
      await this.$store.dispatch('devices/getDevice', { id: this.$route.params.id })
    },
    handleJobCreated() {
      this.hideConnectModal();
      this.hideDisconnectModal();
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
    showDisconnectModal(port) {
      this.selectedPort = port;
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