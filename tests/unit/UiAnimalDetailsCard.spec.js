import { shallowMount } from "@vue/test-utils";
import UiAnimalDetailsCard from "@/components/uiAnimalDetails/UiAnimalDetailsCard";
import UiButton from "@/components/uiGeneral/uiInput/UiButton.vue";

describe("UiAnimalDetailsCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(UiAnimalDetailsCard, {
      propsData: {
        animalData: {
          id: 1,
          name: "Fluffy",
          type: "Cat",
          breed: "Siamese",
          gender: "Female",
          vaccinated: true,
          lastVisit: Date.now(),
          lastUpdate: Date.now(),
        },
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("renders animal name correctly", () => {
    expect(wrapper.find("h2").text()).toEqual("Fluffy");
  });

  it("renders animal id correctly", () => {
    expect(wrapper.find("p.font-thin").text()).toEqual("1");
  });
  it("renders animal type correctly", () => {
    expect(wrapper.find(".font-extralight + p").text()).toEqual("Cat");
  });

  it("renders animal breed correctly", () => {
    expect(wrapper.find(".font-thin + p").text()).toEqual("Siamese");
  });

  it("renders animal gender correctly", () => {
    expect(wrapper.find(".font-light + p").text()).toEqual("Female");
  });

  it("renders animal vaccination status correctly", () => {
    expect(wrapper.findAll(".font-light + p").at(1).text()).toEqual("Yes");
  });

  it("renders animal last visit date correctly", () => {
    const lastVisit = new Date(wrapper.vm.animalData.lastVisit);
    expect(wrapper.findAll(".font-light + p").at(2).text()).toEqual(
      `${lastVisit.toLocaleDateString("en-GB")}`
    );
  });

  it("displays delete and edit buttons", () => {
    expect(wrapper.findAllComponents(UiButton)).toHaveLength(2);
  });
});
