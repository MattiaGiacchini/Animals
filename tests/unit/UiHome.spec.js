import { shallowMount } from "@vue/test-utils";
import UiHome from "@/components/UiHome.vue";

describe("UiHome.vue", () => {
  const msg = "new message";
  const wrapper = shallowMount(UiHome, {
    propsData: { msg },
  });
  it("renders props.msg when passed", () => {
    expect(wrapper.text()).toMatch("Welcome to Animals platform!");
  });
  it("has a logo", () => {
    expect(wrapper.findComponent({ name: "UiLogo" }).exists()).toBe(true);
  });
});
