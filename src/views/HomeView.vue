<template>
  <div>
    <ui-home></ui-home>
  </div>
</template>

<script>
import uiHome from "@/components/uiHome.vue";

export default {
  name: "HomeView",
  components: {
    "ui-home": uiHome,
  },
};
</script>
