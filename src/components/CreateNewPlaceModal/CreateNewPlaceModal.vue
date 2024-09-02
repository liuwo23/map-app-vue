<script setup lang="ts">
import type { IFormData } from '../../interfaces/IModalFormData';
import IModal from '../IModal/IModal.vue';
import MarkerIcon from '@/components/icons/MarkerIcon.vue';
import IInput from '@/components/IInput/IInput.vue';
import InputImage from '@/components/InputImage/InputImage.vue';
import IButton from '@/components/Button/IButton.vue';
import { reactive, computed, defineProps, Teleport } from 'vue';

defineProps<{
  isOpen: boolean;
  isLoading: boolean;
  hasError: boolean;
}>();

const emit = defineEmits(['close', 'submit']);

const formData: IFormData = reactive({
  title: '',
  description: '',
  img: ''
});
const handleUploaded = (url: string) => {
  formData.img = url;
};
const uploadText = computed<string>(() => {
  return formData.img ? '点击此处更改照片' : '点击此处添加照片';
});

const resetFormData = () => {
  formData.title = '';
  formData.description = '';
  formData.img = '';
};
</script>

<template>
  <component :is="Teleport" to="body">
    <IModal :is-show="isOpen" @close="emit('close')">
      <form @submit.prevent="emit('submit', formData, resetFormData)" class="min-w-[420px]">
        <div class="mb-10 font-bold text-center flex gap-1 items-center justify-center">
          <MarkerIcon />
          添加标记
        </div>
        <IInput :error="hasError" v-model="formData.title" class="mb-4" label="位置" />
        <IInput
          :error="hasError"
          v-model="formData.description"
          class="mb-2"
          label="描述"
          type="textarea"
        />
        <div class="mb-10 flex gap-2 items-center">
          <img
            class="block w-8 h-8 object-cover"
            v-if="formData.img"
            :src="formData.img"
            alt="avatar"
          />
          <InputImage @uploaded="handleUploaded">{{ uploadText }}</InputImage>
        </div>
        <IButton :is-loading="isLoading" variant="gradient" class="w-full" type="submit"
          >添加</IButton
        >
      </form>
      <div v-if="hasError">
        <p class="text-red-500 text-sm">出了点问题，请检查您的数据！</p>
      </div>
    </IModal>
  </component>
</template>

<style scoped></style>
