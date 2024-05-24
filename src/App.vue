<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavouritePlaces />

    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        :center="[30.523333, 50.450001]"
        :zoom="10"
        :access-token="mapToken"
        :map-style="mapStyle"
        class="w-full h-full"/>
    </div>
  </main>

</template>
<script setup lang="ts">
import FavouritePlaces from '@/components/FavouritePlaces/FavouritePlaces.vue'
import { MapboxMap} from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {ref} from 'vue'

const isOpen = ref(true);

const mapToken = import.meta.env.VITE_MAPBOX_TOKEN;
const mapStyle = import.meta.env.VITE_MAP_STYLE;
const openModal = () => {
  isOpen.value = true
}
const closeModal = () => {
  isOpen.value = false;
}
</script>
