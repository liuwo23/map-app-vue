<template>
  <component
    :is="componentName"
    :class="bgStyles"
    :to="link"
    class="bg-accent rounded-xl py-3 px-10 text-white font-bold -tracking-wide"
  >
    <template v-if="props.isLoading"><LoadingText text="加载" /> </template>
    <template v-else>
      <slot></slot>
    </template>
  </component>
</template>
<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { RouterLink } from 'vue-router';
import type { _RouterLinkI } from 'vue-router';
import LoadingText from '@/components/LoadingText/LoadingText.vue';

const props = defineProps<{
  variant?: string;
  to?: string;
  isLoading?: boolean;
}>();

const isLink = computed<boolean>(() => !!props.to);

const componentName = computed<_RouterLinkI | 'button'>(() => {
  return isLink.value ? RouterLink : 'button';
});

const link = computed<string | undefined>(() => {
  return isLink.value ? props.to : undefined;
});

const bgStyles = computed<string>(() => {
  return props.variant === 'gradient'
    ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]'
    : 'bg-[#FFA279]';
});
</script>

<style scoped></style>
