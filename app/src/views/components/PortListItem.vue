<template>
  <div>
    <div class="block hover:bg-gray-50 dark:hover:bg-zinc-600">
      <div class="px-4 py-4 sm:px-6">
        <div class="flex items-center justify-between">
          <p class="truncate text-sm font-medium text-purple-600 dark:text-purple-500">{{ port.portName }}</p>
          <div class="ml-2 flex flex-shrink-0">
            <Badge v-if="port.job" color="red">Reserved</Badge>
          </div>
        </div>
        <div class="mt-2 sm:flex sm:justify-between">
          <div class="md:w-1/3 sm:flex">
            <p class="flex items-center text-sm text-gray-500 dark:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
              </svg>
              <span class="mr-2">Connected to:</span>
              <span class="text-purple-500 dark:text-purple-300">{{ connectedDeviceName }}</span>
            </p>
          </div>
          <div class="md:w-1/3 sm:flex">
            <p class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-200 sm:mt-0 sm:ml-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              <span class="mr-2">Cable:</span>
              <span class="text-purple-500 dark:text-purple-300">{{ cableName }}</span>
            </p>
          </div>
          <div class="mt-2 flex-grow flex justify-end items-center text-sm text-gray-500 sm:mt-0">
            <div v-if="!port.job">
              <ButtonPrimary v-if="!port.cable" @click="showConnectModal">Connect</ButtonPrimary>
              <ButtonPrimary v-if="port.cable" @click="showDisconnectModal">Disconnect</ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from "./Badge.vue";
import ButtonPrimary from "./ButtonPrimary.vue";

export default {
  name: "PortListItem",
  emits: ['connect-modal:show', 'disconnect-modal:show'],
  components: {ButtonPrimary, Badge},
  props: {
    port: {
      required: true,
      type: Object,
    },
  },
  computed: {
    connectedDeviceName() {
      return this.port.cable ? this.port.cable.otherPort(this.port).device.deviceHeader : 'N/A';
    },
    cableName() {
      if (this.port.cable) {
        this.port.cable.generateName();
        return this.port.cable.name
      }
      return 'N/A';
    },
  },
  methods: {
    showConnectModal() {
      this.$emit('connect-modal:show');
    },
    showDisconnectModal() {
      this.$emit('disconnect-modal:show');
    },
  }
}
</script>

<style scoped>

</style>