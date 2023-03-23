<template>
    <div
        class="bg-primary flex fixed top-0 w-full mx-auto px-4 shadow-sm min-h-[4rem] max-h-16 items-center z-10 justify-between gap-8">
        <ui-logo class="flex w-max justify-start items-center cursor-pointer"
            @click="$router.push({ name: 'Home' }).catch(() => { })"></ui-logo>
        <div class="flex w-full justify-end gap-2">
            <ui-header-link :to="{ name: 'AnimalsList' }">Animals</ui-header-link>
            <ui-header-link :to="{ name: 'About' }">About</ui-header-link>
        </div>

    </div>
</template>
  
<script>
import UiHeaderLink from "./uiHeaderLink.vue";
import UiLogo from "./uiLogo.vue";

export default {
    name: "uiHeader",
    components: {
        "ui-logo": UiLogo,
        "ui-header-link": UiHeaderLink
    },
};
</script>
  