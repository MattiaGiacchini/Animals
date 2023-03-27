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
      <ui-animal-details-card :animalData="animalData"></ui-animal-details-card>
    </div>
    <ui-animal-data-modal
      v-if="displayEditAnimalModal"
      @closeModal="displayEditAnimalModal = false"
      :animalData="animalData"
      @updateData="updateAnimalDetails"
      modalTitle="Update Animal"
      :secondaryButtonLoading="loading"
      :primaryButtonLoading="loading"
      primaryButtonText="Update"
      secondaryButtonText="Cancel"
    ></ui-animal-data-modal>
    <ui-delete-animal-modal
      :loading="loading"
      v-if="displayDeleteAnimalModal"
      @closeModal="displayDeleteAnimalModal = false"
    ></ui-delete-animal-modal>
  </div>
</template>

<script>
import uiAnimalDataModal from "@/components/uiAnimalDetails/uiAnimalDataModal.vue";
import { getAnimalById, deleteAnimal } from "@/api/endpoints/animals";
import uiLoadingOverlay from "@/components/uiGeneral/uiLoading/uiLoadingOverlay.vue";
import uiDeleteAnimalModal from "@/components/uiAnimalDetails/uiDeleteAnimalModal.vue";
import UiAnimalDetailsCard from "@/components/uiAnimalDetails/uiAnimalDetailsCard.vue";

export default {
  name: "AnimalDetailsView",
  components: {
    "ui-animal-data-modal": uiAnimalDataModal,
    "ui-delete-animal-modal": uiDeleteAnimalModal,
    "ui-loading-overlay": uiLoadingOverlay,
    "ui-animal-details-card": UiAnimalDetailsCard,
  },
  data() {
    return {
      displayEditAnimalModal: false,
      displayDeleteAnimalModal: false,
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
        this.$router.push({ path: "/404" }).catch(() => {});
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    updateAnimalDetails(animal) {
      this.animalData = animal;
    },
    deleteAnimal() {
      deleteAnimal(this.$route.params.animal).then(() =>
        this.$router.push({ name: "AnimalsList" }).catch(() => {})
      );
    },
  },
};
</script>
