<template>
  <div
    id="app"
    class="h-screen"
  >
    <ui-header></ui-header>
    <router-view class="pt-16 bg-app-bg h-full"></router-view>
  </div>
</template>

<script>
import UiHeader from "@/components/uiHeader/uiHeader.vue";

export default {
  components: {
    "ui-header": UiHeader,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
