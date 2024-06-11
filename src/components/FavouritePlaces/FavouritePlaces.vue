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
    />

    <IButton @click="emit('create')" variant="gradient" class="w-full mt-10">Додати маркер</IButton>
    <EditPlaceModal
      :place="selectedItem"
      :is-open="isEditModalOpen"
      @close="closeEditModal"
      @submit="handleSubmit"
      :is-loading="isLoading"
    />
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref, type Ref, computed } from 'vue';
import FavoritePlace from '@/components/FavoritePlace/FavoritePlace.vue';
import IButton from '@/components/Button/IButton.vue';
import EditPlaceModal from '@/components/EditPlaceModal/EditPlaceModal.vue';
import type {IFavItem, IFavPlace } from '../../interfaces/IFavItem';
import { useModal } from '../../composables/useModal';
import { useMutation } from '../../composables/useMutation';
import { updateFavouritePlace } from '../../api/favouritePlaces';

const props = defineProps<{
  items: IFavItem[];
  activeId: null | string;
}>();

const emit = defineEmits(['place-clicked', 'create', 'updated']);

const {
  isOpen: isEditModalOpen,
  openModal: openEditModal,
  closeModal: closeEditModal
} = useModal();

const { mutation: updatePlace, isLoading } = useMutation({
  mutationFn: (formData: IFavPlace) => updateFavouritePlace(formData),
  onSuccess: () => {
    closeEditModal();
    emit('updated')
  }
});

const selectedId: Ref<string> = ref('');
const selectedItem = computed<IFavItem | undefined>(() =>
  props.items.find((place) => place.id === selectedId.value)
);
const handleEditPlace = (id: string) => {
  selectedId.value = id;
  openEditModal();
};

const handleSubmit = (formData: IFavPlace) => {
  updatePlace(formData);
};
</script>
<style scoped></style>
