<template>
  <div class="h-fit w-full">
    <h2 class="text-xl font-medium">Filters</h2>
    <ui-field
      class="mt-8"
      label="Search"
    >
      <ui-input
        placeholder="Name, type or breed"
        v-model="searchParameter"
        @input="search"
      >
        <span
          class="absolute inset-y-0 right-0 flex items-center pl-2 text-gray-400"
          v-if="searchParameter === ''"
        >
          <search-icon class="z-10 w-4 h-4 mr-2"></search-icon>
        </span>
      </ui-input>
    </ui-field>
  </div>
</template>

<script>
import uiField from "@/components/uiGeneral/uiInput/uiField.vue";
import uiInput from "@/components/uiGeneral/uiInput/uiInput.vue";
import { SearchIcon } from "@vue-hero-icons/outline";

export default {
  name: "UiAnimalsFilters",
  components: {
    "ui-field": uiField,
    "ui-input": uiInput,
    SearchIcon,
  },
  data() {
    return {
      searchParameter: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.searchParameter);
    },
  },
};
</script>
