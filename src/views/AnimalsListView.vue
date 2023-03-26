<template>
  <div class="flex flex-row w-screen h-full">
    <ui-animals-list
      :animals="animals"
      class="w-4/5"
    ></ui-animals-list>
    <ui-animal-data-modal
      v-if="displayModal"
      @closeModal="displayModal = false"
      @updateData="updateAnimalsList"
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
import uiButton from "@/components/uiGeneral/uiButton.vue";
import UiAnimalDataModal from "@/components/uiAnimalDetails/uiAnimalDataModal.vue";
import { getAllAnimals } from "@/api/endpoints/animals";

export default {
  name: "AnimalsListView",
  components: {
    "ui-animals-list": UiAnimalsList,
    "ui-side-bar": uiSideBar,
    "ui-animals-filters": uiAnimalsFilters,
    "ui-button": uiButton,
    "ui-animal-data-modal": UiAnimalDataModal,
  },
  data() {
    return {
      animals: [],
      displayModal: false,
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
      });
  },
};
</script>
