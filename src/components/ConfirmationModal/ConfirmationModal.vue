<script setup lang="ts">
import IButton from '@/components/Button/IButton.vue';
import IModal from '@/components/IModal/IModal.vue';
import { defineEmits, Teleport } from 'vue';

defineProps<{
  title: string;
  isOpen: boolean;
  isLoading: boolean;
  hasError: boolean;
}>();

const emit = defineEmits(['cansel', 'confirm']);
</script>

<template>
  <component :is="Teleport" to="body">
    <IModal :is-show="isOpen" @close="emit('cansel')">
      <div class="mb-4 text-lg">{{ title }}</div>
      <div class="flex flex-col lg:flex-row gap-3 justify-center">
        <IButton @click="emit('cansel')" class="bg-transparent border-accent border-2 !text-accent"
          >拒绝</IButton
        >
        <IButton @click="emit('confirm')" variant="gradient" :is-loading="isLoading"
          >确认
        </IButton>
      </div>
      <div v-if="hasError">
        <p class="text-red-500 text-sm">出了点问题！</p>
      </div>
    </IModal>
  </component>
</template>
