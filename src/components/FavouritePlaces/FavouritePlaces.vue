<template>
  <div class="px-6">
    <div class=" text-gray mb-4">Додані маркери ({{counter}})</div>
    <FavoritePlace v-for="n in counter" :key="n"/>
    <IButton variant="gradient" @click="increment" class="w-full mt-10">Додати маркер</IButton>
  </div>
</template>
<script setup lang="ts">
import FavoritePlace from '@/components/FavoritePlace/FavoritePlace.vue'
import IButton from '@/components/Button/IButton.vue'

import { ref } from 'vue'

const counter = ref(4);
const increment = () => {
  counter.value +=1
}
</script>
<style scoped>

</style>