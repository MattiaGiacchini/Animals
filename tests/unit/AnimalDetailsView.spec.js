import { mount } from "@vue/test-utils";
import AnimalDetailsView from "@/views/AnimalDetailsView.vue";
import uiLoadingOverlay from "@/components/uiGeneral/uiLoading/UiLoadingOverlay.vue";

jest.mock("@/api/endpoints/animals", () => ({
  getAnimalById: jest.fn(() => Promise.resolve({})),
  deleteAnimal: jest.fn(() => Promise.resolve()),
}));

describe("AnimalDetailsView", () => {
  it("renders loading overlay when data is being fetched", () => {
    const wrapper = mount(AnimalDetailsView, {
      mocks: {
        $route: {
          params: { animal: 1 },
        },
      },
    });
    expect(wrapper.findComponent(uiLoadingOverlay).exists()).toBe(true);
  });

  it("fetches animal data when created", async () => {
    const animalData = { name: "Dog" };
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
    await wrapper.vm.$nextTick();
    expect(getAnimalById).toBeCalledWith(1);
    expect(wrapper.vm.animalData).toEqual(animalData);
  });
});
