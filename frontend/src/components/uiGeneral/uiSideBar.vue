<template>
  <div
    class="ui-sidebar flex gap-5 p-5 flex-col justify-between bg-white shadow-lg h-full sticky ml-0"
  >
    <div class="flex flex-col items-center w-full text-center flex-1">
      <div class="text-xl w-full min-h-fit">
        <slot name="title"></slot>
      </div>
      <slot name="main-content"></slot>
    </div>
    <slot name="bottom-controls"></slot>
  </div>
</template>

<script>
export default {
  name: "UiSideBar",
  components: {},
  data() {
    return {};
  },
};
</script>
