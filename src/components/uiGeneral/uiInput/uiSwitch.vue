<template>
  <div class="pl-1">
    <label
      :for="id"
      class="flex items-center"
    >
      <div class="relative hover:cursor-pointer">
        <input
          :id="id"
          type="checkbox"
          class="sr-only"
          :value="value"
          :checked="isChecked"
          v-bind="$attrs"
          @change.stop="onChange"
        />
        <div class="line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        <div
          class="dot absolute w-6 h-6 bg-white rounded-full shadow-md border-[1px] -left-1 -top-1 transition"
        ></div>
      </div>
      <label
        :for="id"
        class="ml-3 text-gray-900 font-medium text-base"
        >{{ label }}</label
      >
    </label>
  </div>
</template>
<script>
export default {
  name: "UiSwitch",
  inheritAttrs: false,
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    id: {
      type: String,
      default: () => `uiSwitch-${Math.random().toString(36).slice(4)}`,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    trueValue: {
      type: Boolean,
      default: true,
    },
    falseValue: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isChecked() {
      return this.modelValue === this.trueValue;
    },
  },
  methods: {
    onChange(event) {
      this.$emit("change", event.target.checked);
    },
  },
};
</script>
<style lang="scss" scoped>
input:checked {
  ~ .dot {
    @apply translate-x-[100%];
  }

  ~ .line {
    @apply bg-primary;
  }
}
</style>
