<script setup lang="ts">
import UploadIcon from '@/components/UploadIcon/UploadIcon.vue';
import { ref } from 'vue';

const emit = defineEmits(['uploaded']);
const errorMessage = ref('');
const handleUploadImage = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (!input.files?.length) {
    return;
  }
  const file = input.files[0];

  if (file.size > 3 * 1024 * 1024) {
    errorMessage.value = 'Файл завеликий';
    return;
  }

  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    errorMessage.value = '';
    emit('uploaded', fileReader.result);
  };
};
</script>

<template>
  <div>
    <label class="cursor-pointer hover:text-primary">
      <input type="file" accept="image/*" class="hidden" @change="handleUploadImage" />
      <span class="flex gap-1 items-center">
        <UploadIcon />
        <span class="underline text-xs"><slot></slot></span>
      </span>
    </label>
    <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
  </div>
</template>

<style scoped></style>
