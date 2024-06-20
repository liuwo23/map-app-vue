<template>
  <main class="flex flex-col lg:flex-row h-screen w-full bg-accent">
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router';
import 'mapbox-gl/dist/mapbox-gl.css';
</script>
