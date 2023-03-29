<template>
  <div
    class="ui-loading-overlay flex flex-col align-middle justify-center items-center"
  >
    <ui-loading class="w-14 h-14 fill-primary"></ui-loading>
    <p class="font-medium text-xl mt-5 text-primary">Loading...</p>
  </div>
</template>
<script>
import uiLoading from "@/components/uiGeneral/uiLoading/uiLoading.vue";

export default {
  name: "UiLoadingOverlay",
  components: {
    "ui-loading": uiLoading,
  },
  props: {},
};
</script>
