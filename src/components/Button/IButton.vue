<template>
<button :class="bgStyles" class=" bg-accent rounded-xl py-3 px-10 text-white font-bold -tracking-wide">
  <slot></slot>
</button>
</template>
<script setup lang="ts">
import {defineProps, computed} from 'vue';

const props = defineProps<{
  variant?: string,

}>()

const bgStyles = computed(() => {
  return props.variant === 'gradient'
    ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]'
    : 'bg-[#FFA279]'
});
</script>

<style scoped>

</style>