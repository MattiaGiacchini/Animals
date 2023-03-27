<template>
  <div
    class="max-h-full h-fit grid grid-cols-3 xl:grid-cols-4 gap-5 p-5 justify-center overflow-y-auto scrollbar"
  >
    <ui-animal-card
      v-for="(animal, index) in animals"
      :animalData="animal"
      :key="animal.id"
      class="bg-primary-light"
    >
      {{ index }}
    </ui-animal-card>
  </div>
</template>

<script>
import uiAnimalCard from "@/components/UiAnimalCard.vue";

export default {
  name: "UiAnimalsList",
  components: {
    "ui-animal-card": uiAnimalCard,
  },
  data() {
    return {
      loading: false,
      info: null,
    };
  },
  props: {
    animals: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
