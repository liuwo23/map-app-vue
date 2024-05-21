<template>
  <div class="px-6">
    <div class=" text-gray mb-4">Додані маркери</div>
    <FavoritePlace v-for="n in 4" :key="n"/>
    <IButton class="w-full mt-10">Додати маркер</IButton>
  </div>
</template>
<script setup lang="ts">
import FavoritePlace from '@/components/FavoritePlace/FavoritePlace.vue'
import IButton from '@/components/Button/IButton.vue'
</script>
<style scoped>

</style>