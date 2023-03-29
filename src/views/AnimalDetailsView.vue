<template>
  <div class="flex flex-row h-full">
    <ui-loading-overlay
      v-if="loading"
      class="w-full"
    ></ui-loading-overlay>
    <div
      v-else
      class="w-3/5 py-20 mx-auto"
    >
      <ui-animal-details-card
        :animalData="animalData"
        @displayDeleteAnimalModal="displayDeleteAnimalModal = true"
        @displayEditAnimalModal="displayEditAnimalModal = true"
      ></ui-animal-details-card>
    </div>
    <ui-animal-data-modal
      v-if="displayEditAnimalModal"
      :animalData="animalData"
      modalTitle="Update Animal"
      primaryButtonText="Update"
      :primaryButtonLoading="loading"
      secondaryButtonText="Cancel"
      :secondaryButtonLoading="loading"
      @closeModal="displayEditAnimalModal = false"
      @updateData="updateAnimalDetails"
    ></ui-animal-data-modal>
    <ui-delete-animal-modal
      v-if="displayDeleteAnimalModal"
      :loading="loading"
      @closeModal="displayDeleteAnimalModal = false"
    ></ui-delete-animal-modal>
  </div>
</template>

<script>
import uiAnimalDataModal from "@/components/uiAnimalDetails/UiAnimalDataModal.vue";
import { getAnimalById, deleteAnimal } from "@/api/endpoints/animals";
import uiLoadingOverlay from "@/components/uiGeneral/uiLoading/UiLoadingOverlay.vue";
import uiDeleteAnimalModal from "@/components/uiAnimalDetails/UiDeleteAnimalModal.vue";
import UiAnimalDetailsCard from "@/components/uiAnimalDetails/UiAnimalDetailsCard.vue";

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
