<template>
  <ui-modal
    class="ui-animal-data-modal"
    :title="modalTitle"
    :secondaryButtonLoading="secondaryButtonLoading"
    :primaryButtonLoading="primaryButtonLoading"
    :primaryButtonText="primaryButtonText"
    :secondaryButtonText="secondaryButtonText"
    @closeModal="closeModal"
    @primaryClick="saveOrUpdateAnimal"
    @secondaryClick="closeModal"
  >
    <div class="flex flex-row gap-5 w-full">
      <div class="flex flex-col gap-5 h-full w-full">
        <div class="flex flex-row gap-5 w-full">
          <!-- Animal name -->
          <ui-field
            label="Name"
            class="w-full"
            :validation="$v.animalName"
          >
            <ui-input
              v-model.trim="$v.animalName.$model"
              type="text"
            ></ui-input>
          </ui-field>

          <!-- Animal gender -->
          <div class="h-full mt-auto mb-1">
            <ui-button-pills-group
              :values="[
                { name: 'Male', value: 'Male' },
                { name: 'Female', value: 'Female' },
              ]"
              :defaultSelectedValue="animalGender"
              class="align-bottom"
              @input="handleGenderChange"
            ></ui-button-pills-group>
          </div>
        </div>

        <div class="flex flex-row gap-5 w-full">
          <!-- Animal type -->
          <ui-field
            label="Animal Type"
            class="w-1/2"
            :validation="$v.animalType"
          >
            <ui-input
              v-model.trim="$v.animalType.$model"
              type="text"
            ></ui-input>
          </ui-field>

          <!-- Animal breed -->
          <ui-field
            label="Animal Breed"
            class="w-1/2"
            :validation="$v.animalBreed"
          >
            <ui-input
              v-model.trim="$v.animalBreed.$model"
              type="text"
            ></ui-input>
          </ui-field>
        </div>

        <div class="flex flex-row w-full items-center justify-between gap-5">
          <!-- Animal last visit date -->
          <ui-field
            :validation="$v.lastVisit"
            label="Last Visit"
            class="w-full"
          >
            <ui-input
              v-model.trim="$v.lastVisit.$model"
              type="date"
            ></ui-input>
          </ui-field>
          <div class="h-full w-full mt-auto mb-2 flex justify-end">
            <!-- Animal vaccination selector -->
            <ui-switch
              v-model="vaccinated"
              label="Vaccinated"
              class="align-bottom"
            ></ui-switch>
          </div>
        </div>
      </div>
    </div>
  </ui-modal>
</template>

<script>
import uiModal from "@/components/uiGeneral/uiModal.vue";
import uiInput from "@/components/uiGeneral/uiInput/uiInput.vue";
import uiField from "@/components/uiGeneral/uiInput/uiField.vue";
import uiSwitch from "@/components/uiGeneral/uiInput/uiSwitch.vue";
import uiButtonPillsGroup from "@/components/uiGeneral/uiInput/uiButtonPillsGroup.vue";
import { required } from "vuelidate/lib/validators";
import { updateAnimal, createAnimal } from "@/api/endpoints/animals";

export default {
  name: "UiAnimalDataModal",
  components: {
    "ui-input": uiInput,
    "ui-field": uiField,
    "ui-modal": uiModal,
    "ui-switch": uiSwitch,
    "ui-button-pills-group": uiButtonPillsGroup,
  },
  props: {
    modalTitle: {
      type: String,
      default: "Modal",
    },
    secondaryButtonText: {
      type: String,
      default: null,
    },
    primaryButtonText: {
      type: String,
      default: null,
    },
    primaryButtonLoading: {
      type: Boolean,
      default: false,
    },
    secondaryButtonLoading: {
      type: Boolean,
      default: false,
    },
    animalData: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      animalType: this.animalData ? this.animalData.type : null,
      animalName: this.animalData ? this.animalData.name : null,
      animalBreed: this.animalData ? this.animalData.breed : null,
      vaccinated: this.animalData ? this.animalData.vaccinated : false,
      animalGender: this.animalData ? this.animalData.gender : "Male",
      lastVisit: this.animalData
        ? this.timeStampToDate(this.animalData.lastVisit)
        : null,
    };
  },
  validations: {
    lastVisit: {
      required,
    },
    animalName: {
      required,
    },
    animalType: {
      required,
    },
    animalBreed: {
      required,
    },
  },
  methods: {
    closeModal() {
      this.$v.$reset();
      this.$emit("closeModal");
    },
    handleGenderChange(value) {
      this.animalGender = value;
    },
    saveOrUpdateAnimal() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const animalData = {
        type: this.animalType,
        name: this.animalName,
        gender: this.animalGender,
        breed: this.animalBreed,
        vaccinated: this.vaccinated,
        lastVisit: this.lastVisit,
        lastUpdate: new Date(),
      };

      const animalPromise =
        this.animalData && this.animalData.id
          ? updateAnimal(this.animalData.id, {
              id: this.animalData.id,
              ...animalData,
            })
          : createAnimal(animalData);

      animalPromise
        .then((data) => {
          this.$emit("updateData", data);
        })
        .catch((error) => {
          console.log(error);
          this.$router.push({ path: "/404" }).catch(() => {});
        })
        .finally(() => this.closeModal());
    },
    timeStampToDate(date) {
      return new Date(date).toISOString().split("T")[0];
    },
  },
};
</script>
