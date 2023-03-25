<template>
  <ui-modal
    :title="$route.params.animal ? 'Update Animal' : 'New Animal'"
    :secondaryButtonLoading="false"
    :primaryButtonLoading="false"
    :primaryButtonText="'Create'"
    :secondaryButtonText="'Cancel'"
    @closeModal="closeModal"
    @primaryClick="saveAnimal"
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
              @change="''"
            ></ui-switch>
          </div>
        </div>
      </div>
    </div>
  </ui-modal>
</template>
  
<script>
import uiModal from "@/components/uiGeneral/uiModal.vue";
import uiInput from "@/components/uiGeneral/uiInput.vue";
import uiField from "@/components/uiGeneral/uiField.vue";
import uiSwitch from "@/components/uiGeneral/uiSwitch.vue";
import uiButtonPillsGroup from "@/components/uiGeneral/uiButtonPillsGroup.vue"
import { required } from "vuelidate/lib/validators";

export default {
  name: "UiAnimalDataModal",
  components: {
    "ui-input": uiInput,
    "ui-field": uiField,
    "ui-modal": uiModal,
    "ui-switch": uiSwitch,
    "ui-button-pills-group": uiButtonPillsGroup
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
    }
  },
  
  data() {
    return {
      animalType: this.animalData ? this.animalData.type : null,
      animalName: this.animalData ? this.animalData.name : null,
      animalBreed: this.animalData ? this.animalData.breed : null,
      vaccinated: this.animalData ? this.animalData.vaccinated : false,
      animalGender: this.animalData ? this.animalData.gender : "Male",
      lastVisit: this.animalData ? this.timeStampToDate(this.animalData.lastVisit) : null,
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
      required
    }
  },
  methods: {
    closeModal() {
      this.$v.$reset();
      this.$emit("closeModal");
    },
    handleGenderChange(value) {
      this.animalGender = value;
    },
    saveAnimal() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.closeModal()
      } else {
        console.log("ERRORS")
      }
    },
    timeStampToDate(date) {
      return new Date(date).toISOString().split('T')[0]
    }
  },
  mounted() {
    console.log(this.animalData)
  }
};
</script>