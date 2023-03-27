<template>
  <div class="flex flex-row w-screen h-full">
    <ui-loading-overlay
      v-if="loading"
      class="w-4/5"
    ></ui-loading-overlay>
    <ui-animals-list
      v-else
      :animals="animals"
      class="w-4/5"
    ></ui-animals-list>
    <ui-animal-data-modal
      v-if="displayModal"
      @closeModal="displayModal = false"
      @updateData="updateAnimalsList"
      modalTitle="New Animal"
      :secondaryButtonLoading="false"
      :primaryButtonLoading="false"
      primaryButtonText="Create"
      secondaryButtonText="Cancel"
    ></ui-animal-data-modal>
    <ui-side-bar class="w-1/5">
      <div slot="subtitle">Filtros</div>
      <ui-animals-filters
        slot="main-content"
        :animalsCategories="[]"
      ></ui-animals-filters>
      <div
        slot="bottom-controls"
        class="flex flex-col gap-2"
      >
        <div class="flex">
          <ui-button
            :loading="false"
            type="primary"
            @click="displayModal = true"
          >
            Create new
          </ui-button>
        </div>
      </div>
    </ui-side-bar>
  </div>
</template>

<script>
import UiAnimalsList from "@/components/uiAnimalsList.vue";
import uiSideBar from "@/components/uiGeneral/uiSideBar.vue";
import uiAnimalsFilters from "@/components/uiAnimalsFilters.vue";
import uiButton from "@/components/uiGeneral/uiInput/uiButton.vue";
import UiAnimalDataModal from "@/components/uiAnimalDetails/uiAnimalDataModal.vue";
import { getAllAnimals } from "@/api/endpoints/animals";
import uiLoadingOverlay from "@/components/uiGeneral/uiLoading/uiLoadingOverlay.vue";

export default {
  name: "AnimalsListView",
  components: {
    "ui-animals-list": UiAnimalsList,
    "ui-side-bar": uiSideBar,
    "ui-animals-filters": uiAnimalsFilters,
    "ui-button": uiButton,
    "ui-animal-data-modal": UiAnimalDataModal,
    "ui-loading-overlay": uiLoadingOverlay,
  },
  data() {
    return {
      animals: [],
      displayModal: false,
      loading: true,
    };
  },
  methods: {
    updateAnimalsList(animals) {
      this.animals = animals;
    },
  },
  created() {
    getAllAnimals()
      .then((data) => {
        this.animals = data;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => (this.loading = false));
  },
};
</script>
