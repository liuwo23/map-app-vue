import { ref } from 'vue';
import type { Ref } from 'vue';

export const useModal = () => {
  const isOpen: Ref<boolean> = ref(false);

  const openModal = () => {
    isOpen.value = true;
  };
  const closeModal = () => {
    isOpen.value = false;
  };

  const toggleModal = () => {
    isOpen.value = !isOpen.value;
  };

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal
  };
};
