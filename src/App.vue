<template>
<HomeView v-if="isDesktop"/>
</template>
<script setup lang="ts">
import HomeView from '@/views/HomeView.vue'
const isDesktop = window.innerWidth > 1024;
</script>
