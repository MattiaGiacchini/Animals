<template>
  <div class="flex flex-row w-screen h-full">
    <ui-loading-overlay
      v-if="loading"
      class="w-4/5"
    ></ui-loading-overlay>
    <ui-animals-list
      v-else
      :animals="filteredAnimals"
      class="w-4/5"
    ></ui-animals-list>
    <ui-animal-data-modal
      v-if="displayModal"
      modalTitle="New Animal"
      primaryButtonText="Create"
      :primaryButtonLoading="false"
      secondaryButtonText="Cancel"
      :secondaryButtonLoading="false"
      @closeModal="displayModal = false"
      @updateData="updateAnimalsList"
    ></ui-animal-data-modal>
    <ui-side-bar class="w-1/5">
      <ui-animals-filters
        slot="main-content"
        @search="filterResults"
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
      searchParameter: "",
    };
  },
  created() {
    getAllAnimals()
      .then((data) => {
        this.animals = data;
      })
      .catch((error) => {
        console.log(error);
        this.$router.push({ path: "/404" }).catch(() => {});
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    updateAnimalsList(animals) {
      this.animals = animals;
    },
    filterResults(searchParameter) {
      this.searchParameter = searchParameter;
    },
  },
  computed: {
    filteredAnimals() {
      return this.animals.filter(
        (animal) =>
          animal.name.toLowerCase().includes(this.searchParameter) ||
          animal.type.toLowerCase().includes(this.searchParameter) ||
          animal.breed.toLowerCase().includes(this.searchParameter)
      );
    },
  },
};
</script>
