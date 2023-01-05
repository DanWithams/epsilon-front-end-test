<template>
  <div class="flex flex-col">
    <FormLabel class="mb-1" v-if="$slots.label || label">
      <slot name="label">
        {{ label }}
      </slot>
    </FormLabel>
    <div @click="open = !open" class="relative border-2 border-zinc-100 dark:border-zinc-900 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-400" :class="{ 'rounded' : !open, 'rounded-t border-b-2' : open }" @blur="open = false" @keyup.space="open = !open" tabindex="0">
      <div class="flex flex-row justify-between py-2 px-3 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 rounded select-none cursor-pointer">
        <span>{{ modelValue ? modelValue[labelledBy] : placeholder }}</span>
        <div class="flex flex-row items-center">
          <svg v-if="modelValue && allowClear" @click.stop="clear" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-1 w-3 h-3 mr-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
          <svg v-if="open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
          </svg>
        </div>
      </div>
      <div class="max-h-56 overflow-scroll absolute top-[40px] left-[-2px] right-[-2px] rounded-b bg-zinc-100 dark:bg-zinc-900 border-2 border-t-0 border-indigo-400  z-50" v-if="open">
        <div class="py-2 px-3 hover:bg-zinc-300 dark:hover:bg-zinc-800 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer" :class="{ 'text-indigo-400' : modelValue && modelValue[labelledBy] === option[labelledBy]}" v-for="option in options" @click="selectOption(option)">
          {{ option[labelledBy] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormLabel from "./FormLabel.vue";

export default {
  name: "InputSelect",
  components: {FormLabel},
  props: {
    modelValue: {

    },
    label: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
    labelledBy: {
      type: String,
      default: 'label',
    },
    placeholder: {
      type: String,
      default: 'Please select',
    },
    allowClear: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('update:modelValue', option);
    },
    clear() {
      this.selectOption(null);
    }
  }
}
</script>

<style scoped>

</style>
