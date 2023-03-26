<template>
  <fieldset
    class="w-full flex flex-row gap-2 justify-center items-center h-8 select-none"
  >
    <div
      v-for="value in values"
      :key="value.value"
    >
      <input
        :id="`radio-${value.value}`"
        v-model="selectedOption"
        type="radio"
        :name="`button-pills-${value.value}`"
        class="peer hidden"
        :value="value.value"
        @input="onInput"
        @change="onChange"
      />
      <label
        :for="`radio-${value.value}`"
        class="font-normal py-2 px-4 rounded-full bg-none text-primary-light peer-checked:text-white peer-checked:bg-primary-light cursor-pointer transition-all duration-150"
      >
        {{ value.name }}
      </label>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "UiButtonPillsGroup",
  props: {
    values: {
      type: Array,
      default: () => [],
    },
    defaultSelectedValue: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      selectedOption: this.defaultSelectedValue,
    };
  },
  methods: {
    onInput(event) {
      this.selectedOption = event.target.value;
      this.$emit("input", this.selectedOption);
    },
    onChange(event) {
      this.selectedOption = event.target.value;
      this.$emit("change", this.selectedOption);
    },
  },
};
</script>
