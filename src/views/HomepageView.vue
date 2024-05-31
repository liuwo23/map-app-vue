<template>
  <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
    <FavouritePlaces :items="favoritePlaces" :activeId="activeID" @place-clicked="changePlace" />
  </div>
  <div class="w-full h-full flex items-center justify-center text-6xl">
    <MapboxMap
      :center="[30.523333, 50.450001]"
      :zoom="10"
      :access-token="mapToken"
      :map-style="mapStyle"
      class="w-full h-full"
      @mb-created="(mapInstans) => (map = mapInstans)"
    >
      <MapboxMarker v-for="place in favoritePlaces" :key="place.id" :lngLat="place.lngLat">
        <button @click="changeActiveID(place.id)">
          <MarkerIcon class="h-8 w-8" />
        </button>
      </MapboxMarker>
    </MapboxMap>
  </div>
</template>
<script setup lang="ts">
import FavouritePlaces from '@/components/FavouritePlaces/FavouritePlaces.vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import type { Map } from 'mapbox-gl'
import type { Ref } from 'vue'
import 'mapbox-gl/dist/mapbox-gl.css'
import { ref } from 'vue'
import MarkerIcon from '@/components/icons/MarkerIcon.vue'
import type IFavItem from '../interfaces/IFavItem'

const mapToken = import.meta.env.VITE_MAPBOX_TOKEN
const mapStyle = import.meta.env.VITE_MAP_STYLE

const activeID: Ref<null | number> = ref(null)
const map: Ref<Map | null> = ref(null)
const changeActiveID = (id: number) => {
  activeID.value = id
}

const changePlace = (id: number) => {
  const place = favoritePlaces.find((place) => place.id === id)
  const lngLat = place!.lngLat
  changeActiveID(id)
  if (map.value !== null) {
    map.value.flyTo({ center: lngLat })
  }
}

const favoritePlaces: IFavItem[] = [
  {
    id: 1,
    title: 'New place 1',
    description: 'Super description 1',
    img: '',
    lngLat: [30.523333, 50.490001]
  },
  {
    id: 2,
    title: 'New place 2',
    description: 'Super description 2',
    img: '',
    lngLat: [30.523333, 50.460001]
  }
]
</script>
