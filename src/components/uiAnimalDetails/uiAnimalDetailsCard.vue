<template>
  <div
    class="ui-animal-details-card flex flex-col gap-5 rounded-md bg-white shadow-lg p-5 font-semibold text-base"
  >
    <div class="flex flex-row justify-between">
      <h2 class="text-left text-3xl font-bold">{{ animalData.name }}</h2>
      <p class="text-gray-500 font-thin my-auto">{{ animalData.id }}</p>
    </div>
    <div class="flex flex-col gap-1">
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
    <div class="flex flex-col gap-1">
      <div class="flex flex-row gap-1 justify-start">
        <p class="font-light">Vaccinated:</p>
        <p>{{ animalData.vaccinated ? "Yes" : "No" }}</p>
      </div>
      <div class="flex flex-row gap-1 justify-start">
        <p class="font-light">Last visit:</p>
        <p>{{ timeStampToDate(animalData.lastVisit) }}</p>
      </div>
      <div class="flex flex-row gap-1 justify-start">
        <p class="font-light">Last update:</p>
        <p>{{ timeStampToDateTime(animalData.lastUpdate) }}</p>
      </div>
    </div>
    <div class="flex flex-col gap-5 items-end w-full">
      <div class="flex flex-row gap-5 w-2/6 min-w-fit">
        <ui-button
          class="deleteAnimal"
          :loading="loading"
          @click="$emit('displayDeleteAnimalModal')"
        >
          Delete
        </ui-button>
        <ui-button
          class="editAnimal"
          :loading="loading"
          type="primary"
          @click="$emit('displayEditAnimalModal')"
        >
          Edit
        </ui-button>
      </div>
    </div>
  </div>
</template>

<script>
import uiButton from "@/components/uiGeneral/uiInput/UiButton.vue";

export default {
  name: "UiAnimalDetailsCard",
  components: {
    "ui-button": uiButton,
  },
  props: {
    animalData: { type: Object, default: null },
    loading: { type: Boolean, default: false },
  },
  methods: {
    timeStampToDate(date) {
      return new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date(date));
    },
    timeStampToDateTime(date) {
      return new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h24",
      }).format(new Date(date));
    },
  },
};
</script>
