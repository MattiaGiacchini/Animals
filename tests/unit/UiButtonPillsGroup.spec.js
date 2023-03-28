import { shallowMount } from "@vue/test-utils";
import UiButtonPillsGroup from "@/components/uiGeneral/uiInput/UiButtonPillsGroup.vue";

describe("UiButtonPillsGroup", () => {
  const values = [
    { name: "Option 1", value: "option1" },
    { name: "Option 2", value: "option2" },
    { name: "Option 3", value: "option3" },
  ];

  const wrapper = shallowMount(UiButtonPillsGroup, {
    propsData: {
      values,
    },
  });

  it("renders all radio buttons and labels", () => {
    const radioInputs = wrapper.findAll('input[type="radio"]');
    const radioLabels = wrapper.findAll("label");

    expect(radioInputs).toHaveLength(values.length);
    expect(radioLabels).toHaveLength(values.length);

    values.forEach((value, index) => {
      expect(radioInputs.at(index).attributes("value")).toBe(value.value);
      expect(radioLabels.at(index).text()).toBe(value.name);
      expect(radioLabels.at(index).attributes("for")).toBe(
        `radio-${value.value}`
      );
    });
  });

  it("check if emit event is fired on button click", async () => {
    wrapper.vm.onInput({ target: { value: values[1].value } });

    expect(wrapper.emitted().input).toHaveLength(1);
    expect(wrapper.emitted().input[0][0]).toBe(values[1].value);

    wrapper.vm.onInput({ target: { value: values[0].value } });
    expect(wrapper.emitted().input).toHaveLength(2);
    expect(wrapper.emitted().input[1][0]).toBe(values[0].value);
  });

  it("check if change event is fired on button click", async () => {
    wrapper.vm.onChange({ target: { value: values[1].value } });

    expect(wrapper.emitted().change).toHaveLength(1);
    expect(wrapper.emitted().change[0][0]).toBe(values[1].value);

    wrapper.vm.onChange({ target: { value: values[0].value } });
    expect(wrapper.emitted().change).toHaveLength(2);
    expect(wrapper.emitted().change[1][0]).toBe(values[0].value);
  });

  it("sets the defaultSelectedValue prop as the initially selected option", () => {
    const defaultSelectedValue = values[1].value;
    const wrapper = shallowMount(UiButtonPillsGroup, {
      propsData: {
        values,
        defaultSelectedValue,
      },
    });

    const radioInputs = wrapper.findAll('input[type="radio"]');
    expect(radioInputs.at(1).element.checked).toBe(true);
  });
});
