<template>
  <div class="about flex flex-row">
    <h1 class="w-4/5">This is an about page</h1>
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

export default {
  name: "AnimalDetailsView",
  components: {
    "ui-side-bar": uiSideBar,
    "ui-animals-filters": uiAnimalsFilters,
    "ui-button": uiButton,
    "ui-animal-data-modal": uiAnimalDataModal,
  },
  data() {
    return {
      displayModal: false,
      animalData: null,
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
      });
  },
  methods: {
    deleteAnimal() {
      deleteAnimal(this.$route.params.animal);
      this.$router.push({ name: "AnimalsList" }).catch(() => {});
    },
  },
};
</script>
