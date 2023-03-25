<template>
  <div class="grid grid-cols-3 xl:grid-cols-4 gap-5 p-5 justify-center overflow-y-auto scrollbar">
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
import uiAnimalCard from '@/components/uiAnimalCard.vue';
import {getAllAnimals} from "@/api/endpoints/animals"

export default {
    name: "UiAnimalsList",
    components: {
        "ui-animal-card": uiAnimalCard
    },
    data() {
        return {
            loading: false,
            info: null,
            animals: []

        }
    },
    created() {
        getAllAnimals()
        .then(data => {
            this.animals = data;
        })
        .catch(error => {
            console.log(error);
        });
    }
};
</script>
  

