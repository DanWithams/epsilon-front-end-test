<template>
  <div class="pt-12 sm:pt-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-zinc-300 sm:text-4xl">Welcome to Cable Control</h2>
        <p class="mt-3 text-xl text-gray-500 sm:mt-4">Your one stop shop for all things Cable Management</p>
      </div>
    </div>
    <div class="mt-10 pb-12 sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2"></div>
        <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-4xl">
            <dl class="rounded-lg bg-white dark:bg-zinc-700 shadow-lg sm:grid sm:grid-cols-4">
              <div class="flex flex-col border-b border-gray-100 dark:border-zinc-800 p-6 text-center sm:border-0 sm:border-r">
                <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-zinc-400">Devices</dt>
                <dd class="order-1 text-5xl font-bold tracking-tight text-purple-600">{{ deviceCount }}</dd>
              </div>
              <div class="flex flex-col border-t border-b border-gray-100 dark:border-zinc-800 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-zinc-400">Ports</dt>
                <dd class="order-1 text-5xl font-bold tracking-tight text-purple-600">{{ portCount }}</dd>
              </div>
              <div class="flex flex-col border-t border-gray-100 dark:border-zinc-800 p-6 text-center sm:border-0 sm:border-l">
                <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-zinc-400">Cables</dt>
                <dd class="order-1 text-5xl font-bold tracking-tight text-purple-600">{{ cableCount }}</dd>
              </div>
              <div class="flex flex-col border-t border-gray-100 dark:border-zinc-800 p-6 text-center sm:border-0 sm:border-l">
                <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-zinc-400">Jobs</dt>
                <dd class="order-1 text-5xl font-bold tracking-tight text-purple-600">{{ jobCount }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  mounted() {
    this.$store.dispatch('devices/getDevices');
    this.$store.dispatch('ports/getPorts');
  },
  computed: {
    deviceCount() {
      return this.$store.state.devices.devices.length;
    },
    portCount() {
      return this.$store.state.ports.ports.length;
    },
    cableCount() {
      return this.$store.state.cables.cables.length;
    },
    jobCount() {
      return this.$store.state.jobs.jobs.length;
    },
  }
}
</script>

<style scoped>

</style>