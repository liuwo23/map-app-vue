<template>
  <section class="text-gray mb-6 last:mb-0">
    <div class="flex gap-4">
      <img class="w-[76px] h-[76px] shrink-0 rounded-md" :src="props.img || fallbackImage" alt="" />
      <div class="w-full">
        <div class="flex justify-between items-center mb-2">
          <h2 class="font-bold text-sm text-[#2C2C2C]">{{ props.title }}</h2>
          <div class="flex gap-2">
            <FavouritePlaceIconButton @click="emit('edit')">
              <EditIcon class="hover:stroke-accent transition-colors ease-in-out" />
            </FavouritePlaceIconButton>
            <FavouritePlaceIconButton @click="emit('delete')">
              <DeleteIcon class="hover:stroke-accent transition-colors ease-in-out" />
            </FavouritePlaceIconButton>
          </div>
        </div>
        <p class="text-xs line-clamp-3">
          {{ props.description }}
        </p>
      </div>
    </div>
    <div
      :class="isActive ? 'bg-primary' : 'bg-[#ececec]'"
      class="transition-colors easy-in-out h-[1px] w-full mt-4"
    ></div>
  </section>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import FavouritePlaceIconButton from '@/components/FavoritePlace/FavouritePlaceIconButton.vue';
import DeleteIcon from '@/components/FavoritePlace/DeleteIcon.vue';
import EditIcon from '@/components/FavoritePlace/EditIcon.vue';
import fallbackImage from '../../assets/img/ukr.png';

const props = defineProps<{
  img?: string;
  title: string;
  description: string;
  isActive: boolean;
}>();

const emit = defineEmits(['edit', 'delete']);
</script>
