<template>
  <div
    class="ui-home flex w-full h-full mx-auto px-4 items-center justify-center flex-col gap-5"
  >
    <div
      class="flex justify-center items-center gap-5 p-12 flex-col m-auto rounded-md bg-white shadow-lg cursor-pointer z-10 hover:shadow-xl max-w-xl"
      @click="$router.push({ name: 'AnimalsList' }).catch(() => {})"
    >
      <ui-logo
        class="flex w-max justify-start items-center"
        fill-color="#3c9700"
      ></ui-logo>
      <h2 class="text-xl font-bold">
        Welcome to <span class="text-primary">Animals</span> platform!
      </h2>
    </div>
  </div>
</template>

<script>
import UiLogo from "@/components/uiGeneral/UiLogo.vue";

export default {
  name: "UiHome",
  components: {
    "ui-logo": UiLogo,
  },
};
</script>
