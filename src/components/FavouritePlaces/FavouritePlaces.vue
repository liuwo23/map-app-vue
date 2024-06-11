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
      @edit="openEditModal"
    />

    <IButton @click="emit('create')" variant="gradient" class="w-full mt-10">Додати маркер</IButton>
    <EditPlaceModal :is-open="isEditOpen" @close="closeEditModal" />
  </div>
</template>
<script setup lang="ts">
import FavoritePlace from '@/components/FavoritePlace/FavoritePlace.vue';
import IButton from '@/components/Button/IButton.vue';
import EditPlaceModal from '@/components/EditPlaceModal/EditPlaceModal.vue';
import type IFavItem from '../../interfaces/IFavItem';
import { useModal } from '../../composables/useModal';
import { defineProps } from 'vue';

const props = defineProps<{
  items: IFavItem[];
  activeId: null | string;
}>();

const emit = defineEmits(['place-clicked', 'create']);

const { isOpen: isEditOpen, openModal: openEditModal, closeModal: closeEditModal } = useModal();
</script>
<style scoped></style>
