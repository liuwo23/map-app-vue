<script setup lang="ts">
import LoadingIcon from '@/components/icons/LoadingIcon.vue';
import { defineProps } from 'vue';
defineProps<{
  text: string;
}>();
</script>

<template>
  <p class="w-full flex items-center justify-center">
    <span>{{ text }}</span> <LoadingIcon class="text-accent" />
  </p>
</template>

<style scoped></style>
