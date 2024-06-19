<template>
  <Transition name="modal">
    <div
      v-if="isShow"
      @click.self="emit('close')"
      class="flex w-full h-full fixed top-0 left-0 overflow-auto bg-[rgba(0,0,0,0.3)] transition-all ease-in-out delay-75"
    >
      <div
        class="relative bg-white min-w-[350px] m-auto text-black rounded-2xl p-10 modal-container transition-all ease-in-out"
      >
        <button @click="emit('close')" class="absolute right-3 top-3">
          <CrossIcon class="w-6 h-6" />
        </button>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import CrossIcon from '@/components/icons/CrossIcon.vue';
import { onMounted, onUnmounted, defineProps } from 'vue';

defineProps<{
  isShow: boolean;
}>();
const emit = defineEmits(['close']);

onMounted(() => {
  document.body.style.overflow = 'hidden';
});
onUnmounted(() => {
  document.body.style.overflow = 'initial';
});
</script>
<style>
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
