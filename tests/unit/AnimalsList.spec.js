import { shallowMount } from "@vue/test-utils";
import UiAnimalsList from "@/components/UiAnimalsList.vue";
import UiAnimalCard from "@/components/uiAnimalDetails/uiAnimalCard.vue";

describe("Empty UiAnimalsList", () => {
  let wrapper;
  const animal = {
    id: 1,
    name: "Fluffy",
    type: "Cat",
    breed: "Siamese",
    gender: "Female",
    vaccinated: true,
    lastVisit: Date.now(),
    lastUpdate: Date.now(),
  };

  afterEach(() => {
    wrapper.destroy();
  });

  it("renders message when animals list is empty", () => {
    wrapper = shallowMount(UiAnimalsList, {
      propsData: {
        animals: [],
      },
    });
    wrapper.setProps({ animals: [] });
    expect(wrapper.find("h2").text()).toMatch(
      "Sorry, we could not find any results matching your search."
    );
  });

  it("renders card correctly", () => {
    wrapper = shallowMount(UiAnimalsList, {
      propsData: {
        animals: [animal],
      },
    });
    expect(wrapper.findAllComponents(UiAnimalCard).exists()).toBe(true);
  });
});
