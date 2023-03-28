<template>
  <div
    class="ui-animals-list max-h-full h-fit grid grid-cols-3 xl:grid-cols-4 gap-5 p-5 justify-center overflow-y-auto scrollbar"
    v-if="animals.length > 0"
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
  <div
    v-else
    class="w-full h-fit flex justify-center align-middle m-auto"
  >
    <h2 class="font-bold text-xl mt-8 p-5 h-fit">
      Sorry, we could not find any results matching your search.
    </h2>
  </div>
</template>

<script>
import uiAnimalCard from "@/components/uiAnimalDetails/UiAnimalCard.vue";

export default {
  name: "UiAnimalsList",
  components: {
    "ui-animal-card": uiAnimalCard,
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
