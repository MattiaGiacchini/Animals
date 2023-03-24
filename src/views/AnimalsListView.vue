<template>
    <div class="flex flex-row w-screen h-full">
        <ui-elements-list class="w-4/5"></ui-elements-list>
        <ui-side-bar class="w-1/5">
            <div slot="subtitle">Filtros</div>
            <ui-animals-filters :animalsCategories="[]" slot="main-content"></ui-animals-filters>
            <div slot="bottom-controls" class="flex flex-col gap-2">

                <div class="flex">
                    <ui-button :loading="false" type="primary">Create new</ui-button>

                </div>
            </div>
        </ui-side-bar>
    </div>
</template>
  
<script>
// @ is an alias to /src
import uiElementsList from '@/components/uiElementsList.vue';
import uiSideBar from '@/components/uiSideBar.vue';
import uiAnimalsFilters from '@/components/uiAnimalsFilters.vue';
import uiButton from '@/components/uiButton.vue'

export default {
    name: 'AnimalsListView',
    components: {
        "ui-elements-list": uiElementsList,
        "ui-side-bar": uiSideBar,
        "ui-animals-filters": uiAnimalsFilters,
        "ui-button": uiButton,
    }
}
</script>
  