<template>
  <div class="flex fixed z-[200] left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.4)] backdrop-blur-sm">
    <div class="relative shadow-xl align-middle w-full m-auto max-h-full max-w-xl">
      <div class="relative bg-white rounded-lg p-5">
        <slot name="header">
          <!-- Modal header -->
          <div class="flex justify-between items-start rounded-t mb-3">
            <h3 class="text-xl font-medium text-gray-900 leading-10">
              {{ title }}
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              @click.prevent="$emit('closeModal')"
            >
              <XIcon></XIcon>
            </button>
          </div>
        </slot>

        <!-- Modal body -->
        <div class="max-h-[80vh] scrollbar space-y-2 overflow-auto">
          <slot></slot>
        </div>

        <!-- Modal footer -->
        <div
          v-if="secondaryButtonText || primaryButtonText"
          class=" mt-5 w-full flex justify-end"
        >
          <div class="w-fit flex gap-5">

            <ui-button
            type="default"
            class="w-fit"
            :loading="secondaryButtonLoading"
            @click.prevent="handleSecondaryClick"
            >
            {{
              secondaryButtonText
            }}
          </ui-button>
          <ui-button
            type="primary"
            class="w-fit"
            :loading="primaryButtonLoading"
            @click.prevent="handlePrimaryClick"
          >
          {{
            primaryButtonText
          }}
          </ui-button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from "@vue-hero-icons/outline";
import uiButton from "@/components/uiGeneral/uiButton.vue";

export default {
  name: "UiModal",
  components: {
    XIcon,
    "ui-button": uiButton,
  },
  props: {
    title: {
      type: String,
      default: "Modal",
    },
    secondaryButtonText: {
      type: String,
      default: null,
    },
    primaryButtonText: {
      type: String,
      default: null,
    },
    primaryButtonLoading: {
      type: Boolean,
      default: false,
    },
    secondaryButtonLoading: {
      type: Boolean,
      default: false,
    },

  },
  methods: {
    handlePrimaryClick(event) {
      this.$emit("primaryClick", event);
    },
    handleSecondaryClick(event) {
      this.$emit("secondaryClick", event);
    },
  },
};
</script>
