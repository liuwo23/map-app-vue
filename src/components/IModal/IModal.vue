<template>
  <component :is="Teleport" to="body">
  <div @click.self="emit('close')" class="flex w-full h-full fixed top-0 left-0 overflow-auto bg-[rgba(0,0,0,0.3)]">
    <div class="relative bg-white min-w-[350px] m-auto text-black rounded-2xl p-10">
      <button @click="emit('close')">
        <CrossIcon class="absolute right-3 top-3 w-6 h-6" />
      </button>
      <InputImage @uploaded="base64 => imageUrlBase64 = base64"/>
      <img class="w-10 h-10 object-contain" v-if="imageUrlBase64.length > 0" :src="imageUrlBase64" alt="uploaded photo">
      <slot></slot>
    </div>
  </div>
  </component>
</template>
<script setup lang="ts">
import CrossIcon from '@/components/icons/CrossIcon.vue'
import {onMounted, onUnmounted, Teleport, ref} from 'vue'
import InputImage from '@/components/InputImage/InputImage.vue'

const emit = defineEmits(['close'])
const imageUrlBase64 = ref('')
onMounted(() => {
  document.body.style.overflow = 'hidden';
})
onUnmounted(() => {
  document.body.style.overflow = 'initial';
})
</script>
<style scoped>

</style>