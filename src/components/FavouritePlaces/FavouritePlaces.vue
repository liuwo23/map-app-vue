<template>
  <div class="px-6">
    <div class="text-gray mb-4">Додані маркери</div>
    <FavoritePlace
      v-for="place in props.items"
      :key="place.id"
      :title="place.title"
      :description="place.description"
      :img="place.img"
    />
    <IButton variant="gradient" class="w-full mt-10">Додати маркер</IButton>
  </div>
</template>
<script setup lang="ts">
import FavoritePlace from '@/components/FavoritePlace/FavoritePlace.vue'
import IButton from '@/components/Button/IButton.vue'
import { defineProps } from 'vue'
interface IFavItem {
  id: number
  img?: string
  title: string
  description: string
  lngLat: []
}

const props = defineProps<{
  items: IFavItem[]
}>()
</script>
<style scoped></style>
