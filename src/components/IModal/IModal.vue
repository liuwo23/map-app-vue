<template>
  <component :is="Teleport" to="body">
    <div
      @click.self="emit('close')"
      class="flex w-full h-full fixed top-0 left-0 overflow-auto bg-[rgba(0,0,0,0.3)]"
    >
      <div class="relative bg-white min-w-[350px] m-auto text-black rounded-2xl p-10">
        <button @click="emit('close')" class="absolute right-3 top-3">
          <CrossIcon class="w-6 h-6" />
        </button>
        <slot></slot>
      </div>
    </div>
  </component>
</template>
<script setup lang="ts">
import CrossIcon from '@/components/icons/CrossIcon.vue';
import { onMounted, onUnmounted, Teleport } from 'vue';

const emit = defineEmits(['close']);

onMounted(() => {
  document.body.style.overflow = 'hidden';
});
onUnmounted(() => {
  document.body.style.overflow = 'initial';
});
</script>
<style scoped></style>
