<template>
  <div class="flex flex-row h-full">
    <div
      v-if="loading"
      class="w-4/5 flex flex-row gap-1 justify-center items-center h-full fill-primary text-primary text-2xl"
    >
      <ui-loading-overlay></ui-loading-overlay>
    </div>
    <div
      class="w-4/5 flex flex-col gap-5"
      v-else
    >
      <h2>{{ animalData.name }}</h2>
    </div>

    <ui-animal-data-modal
      v-if="displayModal"
      @closeModal="displayModal = false"
      :animalData="animalData"
    ></ui-animal-data-modal>
    <ui-side-bar class="w-1/5">
      <ui-animals-filters
        slot="main-content"
        :animalsCategories="[]"
      ></ui-animals-filters>
      <div
        slot="bottom-controls"
        class="flex flex-col gap-5"
      >
        <div class="flex flex-row gap-5">
          <ui-button
            :loading="false"
            @click="deleteAnimal()"
          >
            Delete
          </ui-button>
          <ui-button
            :loading="false"
            type="primary"
            @click="displayModal = true"
          >
            Edit
          </ui-button>
        </div>
      </div>
    </ui-side-bar>
  </div>
</template>

<script>
import uiSideBar from "@/components/uiGeneral/uiSideBar.vue";
import uiAnimalsFilters from "@/components/uiAnimalsFilters.vue";
import uiButton from "@/components/uiGeneral/uiButton.vue";
import uiAnimalDataModal from "@/components/uiAnimalDetails/uiAnimalDataModal.vue";
import { getAnimalById, deleteAnimal } from "@/api/endpoints/animals";
import uiLoadingOverlay from "@/components/uiGeneral/uiLoadingOverlay.vue";

export default {
  name: "AnimalDetailsView",
  components: {
    "ui-side-bar": uiSideBar,
    "ui-animals-filters": uiAnimalsFilters,
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
      .finally(() =>
        setTimeout(() => {
          this.loading = false;
        }, 1000)
      );
  },
  methods: {
    deleteAnimal() {
      deleteAnimal(this.$route.params.animal);
      this.$router.push({ name: "AnimalsList" }).catch(() => {});
    },
  },
};
</script>
