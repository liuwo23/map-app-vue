<template>
  <div class="px-6 pt-3">
    <div class="text-gray mb-4">Додані маркери</div>
    <div v-if="items.length === 0">
      <h2>Ваш список пустий!</h2>
    </div>
    <FavoritePlace
      v-else
      v-for="place in props.items"
      :key="place.id"
      :title="place.title"
      :description="place.description"
      :img="place.img"
      :isActive="place.id === activeId"
      @click="emit('place-clicked', place.id)"
      @edit="handleEditPlace(place.id)"
      @delete="handleOpenConformationModal(place.id)"
    />

    <IButton
      :disabled="isButtonDisabled"
      @click="emit('create')"
      variant="gradient"
      class="w-full mt-10 disabled:from-zinc-200 disabled:to-zinc-200"
      >Додати маркер</IButton
    >
    <EditPlaceModal
      :place="selectedItem"
      :is-open="isEditModalOpen"
      @close="closeEditModal"
      @submit="handleSubmit"
      :is-loading="isEditModalLoading"
    />
    <ConfirmationModal
      :is-loading="isDeleting"
      :is-open="isDeleteModalOpen"
      :has-error="!!deleteError"
      @cansel="closeDeleteModal"
      @confirm="handleDeletePlace"
      title="Ви дійсно хочете видалити улюблене місце?"
    />
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref, type Ref, computed } from 'vue';
import type { IFavItem, IFavPlace } from '../../interfaces/IFavItem';
import { useModal } from '../../composables/useModal';
import { useMutation } from '../../composables/useMutation';
import { deleteFavouritePlaces, updateFavouritePlace } from '../../api/favouritePlaces';
import ConfirmationModal from '@/components/ConfirmationModal/ConfirmationModal.vue';
import FavoritePlace from '@/components/FavoritePlace/FavoritePlace.vue';
import IButton from '@/components/Button/IButton.vue';
import EditPlaceModal from '@/components/EditPlaceModal/EditPlaceModal.vue';

const props = defineProps<{
  items: IFavItem[];
  activeId: null | string;
  isButtonDisabled: boolean;
}>();

const emit = defineEmits(['place-clicked', 'create', 'updated']);

const {
  isOpen: isEditModalOpen,
  openModal: openEditModal,
  closeModal: closeEditModal
} = useModal();

const {
  isOpen: isDeleteModalOpen,
  openModal: openDeleteModal,
  closeModal: closeDeleteModal
} = useModal();

const { mutation: updatePlace, isLoading: isEditModalLoading } = useMutation({
  mutationFn: (formData: IFavPlace) => updateFavouritePlace(formData),
  onSuccess: () => {
    closeEditModal();
    selectedId.value = '';
    emit('updated');
  }
});

const {
  mutation: deletePlace,
  isLoading: isDeleting,
  error: deleteError
} = useMutation({
  mutationFn: (id: string) => deleteFavouritePlaces(id),
  onSuccess: () => {
    closeDeleteModal();
    idOfDeletedItem.value = '';
    emit('updated');
  }
});

const selectedId: Ref<string> = ref('');
const selectedItem = computed<IFavItem | undefined>(() =>
  props.items.find((place) => place.id === selectedId.value)
);

const idOfDeletedItem: Ref<string> = ref('');
const handleEditPlace = (id: string) => {
  selectedId.value = id;
  openEditModal();
};

const handleOpenConformationModal = (id: string) => {
  idOfDeletedItem.value = id;
  openDeleteModal();
};
const handleDeletePlace = () => {
  deletePlace(idOfDeletedItem.value);
};

const handleSubmit = (formData: IFavPlace) => {
  updatePlace(formData);
};
</script>
<style scoped></style>
