<template>
  <div class="px-6">
    <div class="text-gray mb-4">Додані маркери</div>
    <FavoritePlace
      v-for="place in props.items"
      :key="place.id"
      :title="place.title"
      :description="place.description"
      :img="place.img"
      :isActive="place.id === activeId"
      @click="emit('place-clicked', place.id)"
    />
    <IButton variant="gradient" class="w-full mt-10">Додати маркер</IButton>
  </div>
</template>
<script setup lang="ts">
import FavoritePlace from '@/components/FavoritePlace/FavoritePlace.vue'
import IButton from '@/components/Button/IButton.vue'
import type IFavItem from '../../interfaces/IFavItem';
import { defineProps } from 'vue'


const props = defineProps<{
  items: IFavItem[]
  activeId: null | number
}>()

const emit = defineEmits(['place-clicked'])
</script>
<style scoped></style>
