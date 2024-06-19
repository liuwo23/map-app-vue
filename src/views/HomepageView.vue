<template>
  <div class="bg-white min-h-screen h-full w-[400px] shrink-0 overflow-auto pb-10">
    <UserInfo />
    <div v-if="isPlacesLoading">
      <h1 class="uppercase text-red-500 p-3">Завантажуємо...</h1>
    </div>
    <FavouritePlaces
      v-else
      :items="favoritePlaces"
      :activeId="activeID"
      @place-clicked="changePlace"
      @create="openModal"
      @updated="getPlaces"
    />
    <LogoutButton class="mt-auto block" />
    <CreateNewPlaceModal
      :has-error="!!error"
      :is-loading="isAddingPlace"
      :is-open="isOpen"
      @close="closeModal"
      @submit="handleAddPlace"
    />
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
        :lngLat="place.coordinates"
        anchor="bottom"
      >
        <button @click.stop="changeActiveID(place.id)">
          <MarkerIcon class="h-8 w-8" :is-active="true" />
        </button>
      </MapboxMarker>
      <MapboxMarker v-if="mapMarkerLngLat" :lngLat="mapMarkerLngLat" anchor="bottom">
        <MarkerIcon class="h-8 w-8" :is-active="false" />
      </MapboxMarker>
    </MapboxMap>
  </div>
</template>
<script setup lang="ts">
import { type Map, MapMouseEvent } from 'mapbox-gl';
import type { IFavItem } from '../interfaces/IFavItem';
import type { IFormData } from '../interfaces/IModalFormData';
import type { IAddFavPlace } from '../interfaces/IFavItem';
import { onMounted, ref, type Ref, computed } from 'vue';
import { addFavouritePlace, getFavouritePlaces } from '../api/favouritePlaces';
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useModal } from '../composables/useModal';
import { useMutation } from '../composables/useMutation';
import FavouritePlaces from '@/components/FavouritePlaces/FavouritePlaces.vue';
import MarkerIcon from '@/components/icons/MarkerIcon.vue';
import CreateNewPlaceModal from '@/components/CreateNewPlaceModal/CreateNewPlaceModal.vue';
import UserInfo from '@/components/UserInfo/UserInfo.vue';
import LogoutButton from '@/components/LogoutButton/LogoutButton.vue';

const { isOpen, closeModal, openModal } = useModal();
const {
  mutation: addPlace,
  isLoading: isAddingPlace,
  error
} = useMutation({
  mutationFn: (newPlaceData: IAddFavPlace) => addFavouritePlace(newPlaceData),
  onSuccess: () => {
    closeModal();
    getPlaces();
    mapMarkerLngLat.value = null;
  }
});

const {
  data,
  mutation: getPlaces,
  isLoading: isPlacesLoading
} = useMutation({
  mutationFn: () => getFavouritePlaces()
});

const mapToken = import.meta.env.VITE_MAPBOX_TOKEN;
const mapStyle = import.meta.env.VITE_MAP_STYLE;

const mapMarkerLngLat: Ref<[number, number] | null> = ref(null);
const activeID: Ref<null | string> = ref(null);
const map: Ref<Map | null> = ref(null);

const favoritePlaces: Ref<IFavItem[]> = computed(() => data.value ?? []);

const handleAddPlace = async (formData: IFormData, resetFormData: Function) => {
  try {
    if (mapMarkerLngLat.value) {
      const body: IAddFavPlace = {
        ...formData,
        coordinates: mapMarkerLngLat.value
      };
      await addPlace(body);
    }
  } catch (e) {
    console.log(e);
  } finally {
    resetFormData();
  }
};

const changeActiveID = (id: string) => {
  activeID.value = id;
};

const changePlace = (id: string) => {
  const place = favoritePlaces.value.find((place) => place.id === id);
  const lngLat = place!.coordinates;
  changeActiveID(id);
  if (map.value !== null) {
    map.value.flyTo({ center: lngLat });
  }
};

const handleMapClick = (mapContext: MapMouseEvent) => {
  const lngLat = mapContext.lngLat;
  mapMarkerLngLat.value = [lngLat.lng, lngLat.lat];
};

onMounted(() => {
  getPlaces();
});
</script>
