<template>
  <button
    class="ui-button flex w-full disabled:opacity-30 disabled:pointer-events-none disabled:cursor-not-allowed border border-transparent text-sm font-medium focus:outline-none focus:ring-0 justify-center align-middle items-center rounded-md py-2 px-4 transition-colors"
    :class="`${type}`"
    :disabled="disabled || loading"
    v-bind="$attrs"
    :aria-disabled="disabled || loading"
    @click.prevent="handleClick"
  >
    <ui-loading
      v-if="loading"
      :class="type === 'default' ? 'fill-primary' : 'fill-white'"
    ></ui-loading>
    <slot></slot>
  </button>
</template>

<script>
import uiLoading from "@/components/uiGeneral/uiLoading/UiLoading.vue";

export default {
  name: "UiButton",
  components: {
    "ui-loading": uiLoading,
  },
  inheritAttrs: false,
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      values: () => ["default", "primary", "danger"],
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>

<style lang="scss" scoped>
.default {
  @apply bg-white border-primary text-primary;

  &:hover {
    @apply bg-primary text-white border-primary;
  }
}

.primary {
  @apply text-white bg-primary;

  &:hover {
    @apply bg-primary-dark;
  }
}

.danger {
  @apply text-white bg-red-600;

  &:hover {
    @apply bg-red-700;
  }
}
</style>
