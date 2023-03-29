import { mount } from "@vue/test-utils";
import AnimalDetailsView from "@/views/AnimalDetailsView.vue";
import uiLoadingOverlay from "@/components/uiGeneral/uiLoading/UiLoadingOverlay.vue";

jest.mock("@/api/endpoints/animals", () => ({
  getAnimalById: jest.fn(() => Promise.resolve({})),
  deleteAnimal: jest.fn(() => Promise.resolve()),
}));

describe("AnimalDetailsView", () => {
  const animalData = {
    id: 1,
    name: "Fluffy",
    type: "Cat",
    breed: "Siamese",
    gender: "Female",
    vaccinated: true,
    lastVisit: Date.now(),
    lastUpdate: Date.now(),
  };

  it("fetches animal data when created", async () => {
    const getAnimalById = jest.spyOn(
      require("@/api/endpoints/animals"),
      "getAnimalById"
    );
    getAnimalById.mockImplementation(() => Promise.resolve(animalData));
    const wrapper = mount(AnimalDetailsView, {
      mocks: {
        $route: {
          params: { animal: 1 },
        },
      },
    });
    expect(wrapper.findComponent(uiLoadingOverlay).exists()).toBe(true);
    await wrapper.vm.$nextTick();
    expect(getAnimalById).toBeCalledWith(1);
    expect(wrapper.vm.animalData).toEqual(animalData);
  });
});
