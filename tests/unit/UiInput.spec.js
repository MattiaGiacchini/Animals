import { shallowMount } from "@vue/test-utils";
import UiInput from "@/components/uiGeneral/uiInput/UiInput.vue";

describe("UiInput", () => {
  it("emits input event when input value changes", () => {
    const wrapper = shallowMount(UiInput);
    const input = wrapper.find("input");
    input.setValue("new value");
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual(["new value"]);
  });
});
