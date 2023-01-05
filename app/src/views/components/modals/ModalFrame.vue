<template>
  <teleport to="#modal-container">
    <transition mode="in-out" name="modal-fade-in">
      <div class="fixed -inset-96 p-96 flex flex-row justify-center items-center overflow-y-scroll bg-black bg-opacity-75 z-[9999999999]" v-if="show" @click.self="handleBackdropClick">
        <form class="relative flex flex-col rounded-lg bg-zinc-200 dark:bg-zinc-800 shadow-3xl" :class="size" @submit.prevent="$emit('modal:submit')">
          <div class="flex flex-row justify-between items-center px-6 py-4 bg-zinc-200 dark:bg-zinc-800 text-gray-800 dark:text-gray-400 rounded-t-lg" v-if="!hideHeader">
            <slot name="header" :hide-modal="hideModal">
              <div>{{ title }}</div>
            </slot>
            <div class="text-2xl text-gray-800 dark:text-gray-200 cursor-pointer" v-if="showClose" @click="handleCloseButtonClick">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div class="px-6 py-4">
            <slot name="body" :hide-modal="hideModal"></slot>
          </div>
          <div class="flex flex-row justify-between items-center px-6 py-4 bg-zinc-200 dark:bg-zinc-800 rounded-b-lg" v-if="!hideFooter">
            <slot name="footer" :hide-modal="hideModal"></slot>
          </div>
        </form>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: "ModalFrame",
  emits: ['update:show', 'modal:show', 'modal:hide', 'modal:submit'],
  props: {
    show: {
      type: Boolean,
      required: false,
      default: false,
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false,
    },
    hideFooter: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: String,
      required: false,
      default: 'w-1/2',
    },
    title: {
      type: [String, null],
      default: null,
    },
    backdropClose: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    }
  },
  watch: {
    show(show) {
      if (show) {
        this.showModal();
      } else {
        this.hideModal();
      }
    }
  },
  methods: {
    handleBackdropClick() {
      if (this.backdropClose) {
        this.hideModal();
      }
    },
    handleCloseButtonClick() {
      this.hideModal();
    },
    showModal() {
      this.$emit('update:show', true);
      this.$emit('modal:show');
    },
    hideModal() {
      this.$emit('update:show', false);
      this.$emit('modal:hide');
    }
  }
}
</script>

<style scoped>

</style>
