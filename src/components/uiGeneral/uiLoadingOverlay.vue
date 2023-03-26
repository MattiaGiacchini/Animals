<template>
  <div class="flex flex-col align-middle justify-center items-center">
    <ui-loading class="w-14 h-14 fill-primary"></ui-loading>
    <p class="font-medium text-base mt-5">Loading...</p>
  </div>
</template>
<script>
import uiLoading from "@/components/uiGeneral/uiLoading.vue";

export default {
  name: "uiLoadingOverlay",
  props: {},
  components: {
    "ui-loading": uiLoading,
  },
};
</script>
