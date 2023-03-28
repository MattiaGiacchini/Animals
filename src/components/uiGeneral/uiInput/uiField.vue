<template>
  <div
    class="uiField flex flex-wrap justify-start relative leading-5 items-center"
    :class="{ 'uiField--has-errors': hasErrors }"
  >
    <div class="inline-flex items-center justify-between w-full">
      <div class="inline-flex items-center">
        <label
          :for="id"
          class="block text-sm font-medium text-gray-900 mt-0 leading-6"
        >
          {{ label }}
        </label>
        <span
          v-if="isRequired"
          class="ml-1 mt-0 text-red-600/[1] font-medium leading-6"
          >*
        </span>
      </div>
      <slot name="icons"></slot>
      <div
        v-if="$slots.action"
        class="mt-0 right-0 absolute leading-6"
      >
        <slot name="action"></slot>
      </div>
    </div>
    <slot></slot>
    <div v-if="hasErrors">
      <span
        class="text-xs font-medium"
        v-if="errors && !validation.$invalid"
      >
        {{ errors }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "uiField",
  props: {
    id: {
      type: String,
      default: () => `uiField-${Math.random().toString(36).slice(4)}`,
    },
    label: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    errors: {
      type: String,
      default: null,
    },
    validation: {
      type: [Object],
      default: () => {},
    },
  },
  computed: {
    isRequired() {
      return (
        this.required || (this.validation && this.validation.$params.required)
      );
    },
    hasErrors() {
      return (
        this.errors ||
        (this.validation && this.validation.$dirty && this.validation.$invalid)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.uiField {
  &--has-errors {
    label,
    span {
      @apply text-red-600;
    }

    ::v-deep input {
      @apply border-red-600 focus:border-red-600 focus:border-2;
    }
  }
}
</style>
