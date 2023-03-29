<template>
  <ui-modal
    class="ui-delete-animal-modal"
    title="Delete Animal"
    :primaryButtonLoading="loading"
    primaryButtonText="Confirm"
    secondaryButtonText="Cancel"
    primaryButtonType="danger"
    @closeModal="closeModal"
    @primaryClick="deleteAnimal"
    @secondaryClick="closeModal"
  >
    <div class="flex flex-row gap-5 w-full">
      Are you sure you want to delete this animal?
    </div>
  </ui-modal>
</template>

<script>
import uiModal from "@/components/uiGeneral/UiModal.vue";
import { deleteAnimal } from "@/api/endpoints/animals";

export default {
  name: "UiDeleteAnimalModal",
  components: {
    "ui-modal": uiModal,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    deleteAnimal() {
      deleteAnimal(this.$route.params.animal).then(() =>
        this.$router.push({ name: "AnimalsList" })
      );
    },
  },
};
</script>
