<template>
  <router-link
    :to="`animals/${animalData.id}`"
    class="ui-animal-card rounded-md bg-white flex flex-col p-5 font-medium shadow-lg hover:cursor-pointer hover:shadow-xl justify-start"
  >
    <div class="text-lg font-semibold bg-primary-light/50 rounded-md mb-5 p-1">
      {{ animalData.name }}
    </div>
    <div class="flex flex-col">
      <div class="flex flex-row gap-1 justify-start">
        <p class="font-extralight">Type:</p>
        <p>{{ animalData.type }}</p>
      </div>
      <div class="flex flex-row gap-1 justify-start">
        <p class="font-thin">Breed:</p>
        <p>{{ animalData.breed }}</p>
      </div>
      <div class="flex flex-row gap-1 justify-start">
        <p class="font-light">Gender:</p>
        <p>{{ animalData.gender }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "UiAnimalCard",
  props: {
    animalData: { type: Object, default: null },
  },
};
</script>
