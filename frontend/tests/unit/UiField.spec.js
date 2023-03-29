import { shallowMount } from "@vue/test-utils";
import UiField from "@/components/uiGeneral/uiInput/UiField.vue";

describe("UiField.vue", () => {
  it("renders label when passed", () => {
    const label = "Username";
    const wrapper = shallowMount(UiField, {
      propsData: { label },
    });
    expect(wrapper.find("label").text()).toMatch(label);
  });

  it("renders required indicator when required prop is true", () => {
    const wrapper = shallowMount(UiField, {
      propsData: { required: true },
    });
    expect(wrapper.find("span").text()).toBe("*");
  });
});
