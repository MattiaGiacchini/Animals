<template>
  <router-link
    class="ui-header-link my-auto text-center text-base font-medium inline-block px-4 py-2 rounded-md"
    :to="to"
    :class="`${type}`"
    exact
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "uiHeaderRouterLink",
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      values: () => ["active", "default"],
      default: "default",
    },
    to: {
      type: Object,
      default() {
        return { name: "Home" };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.default {
  @apply text-white;

  &:hover {
    @apply bg-primary-dark;
  }
}

.router-link-exact-active {
  @apply bg-primary-light;

  &:hover {
    @apply bg-primary-dark;
  }
}
</style>
