<script setup lang="ts">
import { defineProps, ref, type Ref, Teleport, watch } from 'vue';
import type { IFavItem } from '../../interfaces/IFavItem';
import IInput from '@/components/IInput/IInput.vue';
import InputImage from '@/components/InputImage/InputImage.vue';
import IButton from '@/components/Button/IButton.vue';
import IModal from '@/components/IModal/IModal.vue';
import MarkerIcon from '@/components/icons/MarkerIcon.vue';
import fallbackImage from '../../assets/img/ukr.png';

const props = defineProps<{
  isOpen: boolean;
  place: IFavItem | undefined;
  isLoading: boolean;
  isError: boolean;
}>();

const emit = defineEmits(['close', 'submit']);
const formData: Ref<IFavItem> = ref({
  id: '',
  title: '',
  description: '',
  img: '',
  coordinates: null
});

const handleChangeImg = (url: string) => {
  formData.value.img = url;
};

watch(
  () => props.place,
  () => {
    if (props.place) {
      formData.value = {
        ...props.place
      };
    }
  }
);
</script>

<template>
  <component :is="Teleport" to="body">
    <IModal :is-show="props.isOpen" @close="emit('close')">
      <div class="w-fit lg:w-[750px]">
        <div class="flex flex-col lg:flex-row gap-2 items-center mb-10">
          <MarkerIcon is-active height="18" width="18" />
          <span class="font-bold text-base">Редагувати маркер</span>
        </div>
        <form @submit.prevent="emit('submit', formData)">
          <div class="flex flex-col lg:flex-row gap-5 w-full">
            <div class="w-full lg:w-5/12">
              <img
                class="w-full h-[276px] object-cover rounded-md"
                :src="formData.img || fallbackImage"
                alt="place img"
              />
            </div>

            <div class="w-full lg:w-7/12">
              <IInput :error="isError" label="Локація" v-model="formData.title" type="text" />
              <div class="mt-4">
                <IInput
                  :error="isError"
                  label="Опис"
                  type="textarea"
                  v-model="formData.description"
                />
              </div>
              <IButton class="mt-10 w-full" variant="gradient" :is-loading="props.isLoading"
                >Зберегти</IButton
              >
            </div>
          </div>

          <InputImage class="mt-3" @uploaded="handleChangeImg">
            <span class="text-xs">Натисніть тут, щоб додати інше фото</span>
          </InputImage>
        </form>
      </div>
    </IModal>
  </component>
</template>

<style scoped>
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
