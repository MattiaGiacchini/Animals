import { shallowMount } from "@vue/test-utils";
import UiButton from "@/components/uiGeneral/uiInput/UiButton.vue";
import UiLoading from "@/components/uiGeneral/uiLoading/UiLoading.vue";

describe("UiButton", () => {
  it("emits click event when clicked", () => {
    const wrapper = shallowMount(UiButton);
    wrapper.trigger("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("disables the button when loading is true", async () => {
    const wrapper = shallowMount(UiButton, {
      propsData: {
        loading: true,
      },
    });

    expect(wrapper.attributes("disabled")).toBe("disabled");
    expect(wrapper.classes()).toContain("disabled:opacity-30");
    expect(wrapper.classes()).toContain("disabled:pointer-events-none");
    expect(wrapper.classes()).toContain("disabled:cursor-not-allowed");
  });

  it("disables the button when loading is true", async () => {
    const wrapper = shallowMount(UiButton, {
      propsData: {
        loading: true,
      },
    });

    expect(wrapper.findComponent(UiLoading).exists()).toBeTruthy();
    expect(wrapper.attributes("disabled")).toBe("disabled");
    expect(wrapper.classes()).toContain("disabled:opacity-30");
    expect(wrapper.classes()).toContain("disabled:pointer-events-none");
    expect(wrapper.classes()).toContain("disabled:cursor-not-allowed");
  });

  it("disables the button when disabled is true", async () => {
    const wrapper = shallowMount(UiButton, {
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.attributes("disabled")).toBe("disabled");
    expect(wrapper.classes()).toContain("disabled:opacity-30");
    expect(wrapper.classes()).toContain("disabled:pointer-events-none");
    expect(wrapper.classes()).toContain("disabled:cursor-not-allowed");
  });
});
