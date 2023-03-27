<template>
  <div class="flex flex-col w-full relative">
    <input
      ref="input"
      :type="inputType"
      :autocomplete="autocomplete"
      :value="localValue"
      :placeholder="placeholder"
      v-bind="$attrs"
      class="appearance-none no-spin-buttons w-full relative block px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-sm"
      :class="classes"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
      @change="onChange"
    />

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UiInput",
  inheritAttrs: false,

  props: {
    value: {
      type: [Number, String],
      default: null,
    },
    type: {
      type: String,
      validator: (value) =>
        [
          "text",
          "password",
          "email",
          "number",
          "search",
          "tel",
          "url",
          "date",
          "time",
          "month",
        ].includes(value),
      default: "text",
    },
    autocomplete: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    classes: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputType: this.type,
      isPasswordVisible: false,
      focusLost: false,
    };
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    onInput(event) {
      this.localValue = event.target.value;
    },
    onChange(event) {
      if (event.target && !this.focusLost && !event.bubbles) {
        this.localValue = event.target.value;
        this.$emit("change", event.target.value);
      }
    },
    onFocus(event) {
      this.focusLost = false;
      this.$emit("focus", event.target.value);
    },
    /**
     * On focus lose, reset propagated change flag to avoid trigger change event twice
     */
    onBlur(event) {
      this.focusLost = true;
      this.$emit("blur", event.target.value);
    },
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.inputType = this.isPasswordVisible ? "text" : "password";
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    editAmount(amount) {
      this.localValue = Math.max(
        0,
        parseInt(this.localValue) + parseInt(amount)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
input[type="number"].no-spin-buttons {
  -moz-appearance: textfield;
}

input.no-spin-buttons::-webkit-outer-spin-button,
input.no-spin-buttons::-webkit-inner-spin-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
