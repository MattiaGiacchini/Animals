<template>
  <router-link
    :to="`animals/${animalData.id}`"
    class="rounded-md bg-white flex flex-col p-5 font-medium shadow-lg hover:cursor-pointer hover:shadow-xl justify-start"
  >
    <div class="text-lg font-semibold bg-primary-light/50 rounded-md mb-5 p-1">
      {{ animalData.name }}
    </div>
    <div class="flex flex-col">
      <div class="flex flex-row gap-1 justify-start">
        <div class="font-extralight">Type:</div>
        <div>{{ animalData.type }}</div>
      </div>
      <div class="flex flex-row gap-1 justify-start">
        <div class="font-thin">Breed:</div>
        <div>{{ animalData.breed }}</div>
      </div>
      <div class="flex flex-row gap-1 justify-start">
        <div class="font-light">Gender:</div>
        <div>{{ animalData.gender }}</div>
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
