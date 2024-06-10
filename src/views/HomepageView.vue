<template>
  <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
    <FavouritePlaces
      :items="favoritePlaces"
      :activeId="activeID"
      @place-clicked="changePlace"
      @create="openModal"
    />
    <CreateNewPlaceModal :is-open="isOpen" @close="closeModal" />
  </div>
  <div class="w-full h-full flex items-center justify-center text-6xl">
    <MapboxMap
      :center="[30.523333, 50.450001]"
      :zoom="10"
      :access-token="mapToken"
      :map-style="mapStyle"
      class="w-full h-full"
      @mb-click="handleMapClick"
      @mb-created="(mapInstance) => (map = mapInstance)"
    >
      <MapboxMarker
        v-for="place in favoritePlaces"
        :key="place.id"
        :lngLat="place.lngLat"
        anchor="bottom"
      >
        <button @click="changeActiveID(place.id)">
          <MarkerIcon class="h-8 w-8" />
        </button>
      </MapboxMarker>
      <MapboxMarker v-if="mapMarkerLngLat" :lngLat="mapMarkerLngLat" anchor="bottom">
        <MarkerIcon class="h-8 w-8" />
      </MapboxMarker>
    </MapboxMap>
  </div>
</template>
<script setup lang="ts">
import { type Map, MapMouseEvent } from 'mapbox-gl';
import type IFavItem from '../interfaces/IFavItem';
import { onMounted, ref, type Ref } from 'vue';
import { getFavouritePlaces } from '../api/favouritePlaces';
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useModal } from '../composables/useModal';
import FavouritePlaces from '@/components/FavouritePlaces/FavouritePlaces.vue';
import MarkerIcon from '@/components/icons/MarkerIcon.vue';
import CreateNewPlaceModal from '@/components/CreateNewPlaceModal/CreateNewPlaceModal.vue';

const { isOpen, closeModal, openModal } = useModal();

const mapToken = import.meta.env.VITE_MAPBOX_TOKEN;
const mapStyle = import.meta.env.VITE_MAP_STYLE;

const favoritePlaces: Ref<IFavItem[]> = ref([]);
const mapMarkerLngLat: Ref<[number, number] | null> = ref(null);
const activeID: Ref<null | number> = ref(null);
const map: Ref<Map | null> = ref(null);

const changeActiveID = (id: number) => {
  activeID.value = id;
};

const changePlace = (id: number) => {
  const place = favoritePlaces.value.find((place) => place.id === id);
  const lngLat = place!.lngLat;
  changeActiveID(id);
  if (map.value !== null) {
    map.value.flyTo({ center: lngLat });
  }
};

const handleMapClick = (mapContext: MapMouseEvent) => {
  const lngLat = mapContext.lngLat;
  mapMarkerLngLat.value = [lngLat.lng, lngLat.lat];
};

onMounted(async () => {
  try {
    const { data } = await getFavouritePlaces();
    favoritePlaces.value = data;
  } catch (e) {
    console.log(e);
  }
});
</script>
