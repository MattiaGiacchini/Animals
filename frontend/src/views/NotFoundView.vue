<template>
  <div
    class="flex w-full items-center flex-col justify-center align-middle h-screen bg-gray-50"
  >
    <img src="@/assets/404.svg" />
    <h2 class="font-bold text-xl mt-8">Ooops! Resource not found</h2>
    <div class="w-fit">
      <ui-button
        class="mt-3"
        type="primary"
        @click.prevent="$router.push({ name: 'AnimalsList' })"
      >
        Go to animals list
      </ui-button>
    </div>
  </div>
</template>
<script>
import uiButton from "@/components/uiGeneral/uiInput/uiButton.vue";

export default {
  name: "PageNotFoundView",
  components: {
    "ui-button": uiButton,
  },
};
</script>
