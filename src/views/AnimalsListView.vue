<template>
    <ui-elements-list></ui-elements-list>
</template>
  
<script>
// @ is an alias to /src
import uiElementsList from '@/components/uiElementsList.vue';

export default {
    name: 'AnimalsListView',
    components: {
        "ui-elements-list": uiElementsList,
    }
}
</script>
  