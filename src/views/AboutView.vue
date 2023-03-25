<template>
  <div class="about flex flex-row">
    <h1 class="w-4/5">
      This is an about page
    </h1>
    <ui-animal-data-modal
      v-if="displayModal"
      @closeModal="displayModal = false"
      :animalData='{
        id: "b82e9d4ef4f4db3fca8e0e82f3d3c7b1",
        name: "Max",
        type: "Dog",
        breed: "Labrador Retriever",
        gender: "Female",
        vaccinated: true,
        lastVisit: "2022-12-12T14:30:25.678Z",
        lastUpdate: "2022-12-12T14:30:25.678Z"
      }'
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
          <ui-button :loading="false">
            Delete
          </ui-button>
          <ui-button
            :loading="false"
            type="primary"
            @click="displayModal=true"
          >
            Edit
          </ui-button>
        </div>
      </div>
    </ui-side-bar>
  </div>
</template>

<script>
import uiSideBar from '@/components/uiGeneral/uiSideBar.vue';
import uiAnimalsFilters from '@/components/uiAnimalsFilters.vue';
import uiButton from '@/components/uiGeneral/uiButton.vue'
import uiAnimalDataModal from '@/components/uiAnimalDetails/uiAnimalDataModal.vue';

export default {
  components: {
    "ui-side-bar": uiSideBar,
    "ui-animals-filters": uiAnimalsFilters,
    "ui-button": uiButton,
    "ui-animal-data-modal": uiAnimalDataModal
  },
  data() {
    return {
      displayModal: false
    }
  },

}
</script>
