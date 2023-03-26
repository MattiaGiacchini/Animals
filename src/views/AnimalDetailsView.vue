<template>
  <div class="flex flex-row h-full">
    <ui-loading-overlay
      v-if="loading"
      class="w-full"
    ></ui-loading-overlay>
    <div
      class="w-3/5 py-20 mx-auto"
      v-else
    >
      <div
        class="flex flex-col gap-5 rounded-md bg-white shadow-lg p-5 font-semibold text-base"
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
          <div class="flex flex-row gap-5 w-2/6">
            <ui-button
              :loading="loading"
              @click="deleteAnimal()"
            >
              Delete
            </ui-button>
            <ui-button
              :loading="loading"
              type="primary"
              @click="displayModal = true"
            >
              Edit
            </ui-button>
          </div>
        </div>
      </div>
    </div>
    <ui-animal-data-modal
      v-if="displayModal"
      @closeModal="displayModal = false"
      :animalData="animalData"
      @updateData="updateAnimalDetails"
    ></ui-animal-data-modal>
  </div>
</template>

<script>
import uiButton from "@/components/uiGeneral/uiButton.vue";
import uiAnimalDataModal from "@/components/uiAnimalDetails/uiAnimalDataModal.vue";
import { getAnimalById, deleteAnimal } from "@/api/endpoints/animals";
import uiLoadingOverlay from "@/components/uiGeneral/uiLoadingOverlay.vue";

export default {
  name: "AnimalDetailsView",
  components: {
    "ui-button": uiButton,
    "ui-animal-data-modal": uiAnimalDataModal,
    "ui-loading-overlay": uiLoadingOverlay,
  },
  data() {
    return {
      displayModal: false,
      animalData: null,
      loading: true,
    };
  },
  created() {
    const id = this.$route.params.animal;
    getAnimalById(id)
      .then((data) => {
        this.animalData = data;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    updateAnimalDetails(animal) {
      this.animalData = animal;
    },
    deleteAnimal() {
      deleteAnimal(this.$route.params.animal);
      this.$router.push({ name: "AnimalsList" }).catch(() => {});
    },
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
