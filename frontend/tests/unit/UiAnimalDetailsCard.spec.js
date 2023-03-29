import { shallowMount } from "@vue/test-utils";
import UiAnimalDetailsCard from "@/components/uiAnimalDetails/UiAnimalDetailsCard";
import UiButton from "@/components/uiGeneral/uiInput/UiButton.vue";

describe("UiAnimalDetailsCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(UiAnimalDetailsCard, {
      propsData: {
        animalData: {
          id: "74fc362a10d1f0f8ba827e82280cd2ec",
          name: "Example animal",
          type: "Cat",
          breed: "Persian",
          gender: "Female",
          vaccinated: true,
          lastVisit: "2021-01-28T04:03:02.216Z",
          lastUpdate: "2021-01-28T04:03:02.216Z",
        },
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("renders animal name correctly", () => {
    expect(wrapper.find("h2").text()).toEqual("Example animal");
  });

  it("renders animal id correctly", () => {
    expect(wrapper.find("p.font-thin").text()).toEqual(
      "74fc362a10d1f0f8ba827e82280cd2ec"
    );
  });
  it("renders animal type correctly", () => {
    expect(wrapper.find(".font-extralight + p").text()).toEqual("Cat");
  });

  it("renders animal breed correctly", () => {
    expect(wrapper.find(".font-thin + p").text()).toEqual("Persian");
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
