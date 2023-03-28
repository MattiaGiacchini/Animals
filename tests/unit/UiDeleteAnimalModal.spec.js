import { shallowMount } from "@vue/test-utils";
import UiDeleteAnimalModal from "@/components/uiAnimalDetails/UiDeleteAnimalModal.vue";
import UiModal from "@/components/uiGeneral/UiModal.vue";
import { deleteAnimal } from "@/api/endpoints/animals";

jest.mock("@/api/endpoints/animals", () => ({
  deleteAnimal: jest.fn(),
}));

describe("UiDeleteAnimalModal", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(UiDeleteAnimalModal, {
      propsData: {
        loading: false,
      },
      stubs: {
        "ui-modal": UiModal,
      },
      mocks: {
        $router: {
          push: jest.fn(),
        },
        $route: {
          params: {
            animal: "dog",
          },
        },
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("renders the component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a UiModal component", () => {
    expect(wrapper.findComponent(UiModal).exists()).toBe(true);
  });

  it("sets the correct props on the UiModal component", () => {
    expect(wrapper.findComponent(UiModal).props("title")).toBe("Delete Animal");
    expect(wrapper.findComponent(UiModal).props("primaryButtonText")).toBe(
      "Confirm"
    );
    expect(wrapper.findComponent(UiModal).props("secondaryButtonText")).toBe(
      "Cancel"
    );
  });

  it("displays a message asking if the user is sure they want to delete the animal", () => {
    expect(wrapper.text()).toContain(
      "Are you sure you want to delete this animal?"
    );
  });

  it('emits a "closeModal" event when the modal is closed', () => {
    wrapper.vm.closeModal();
    expect(wrapper.emitted("closeModal")).toBeTruthy();
  });

  it("closes the modal when the user cancels deletion", async () => {
    await wrapper.findComponent(UiModal).vm.$emit("secondaryClick");
    expect(wrapper.emitted("closeModal")).toBeTruthy();
  });

  it("test animal delete", async () => {
    deleteAnimal.mockReturnValueOnce(Promise.resolve());
    await wrapper.vm.deleteAnimal();
    expect(deleteAnimal).toHaveBeenCalledWith("dog");
  });
});
