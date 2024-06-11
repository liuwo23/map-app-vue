<script setup lang="ts">
import IInput from '@/components/IInput/IInput.vue';
import InputImage from '@/components/InputImage/InputImage.vue';
import IButton from '@/components/Button/IButton.vue';
import IModal from '@/components/IModal/IModal.vue';
import MarkerIcon from '@/components/icons/MarkerIcon.vue';
import fallbackImage from '../../assets/img/ukr.png';
import { defineProps, ref, type Ref, watch } from 'vue';
import type IFavItem from '../../interfaces/IFavItem';

const props = defineProps<{
  isOpen: boolean;
  place: IFavItem | undefined;
}>();

const emit = defineEmits(['close']);
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
  <IModal v-if="props.isOpen && props.place" @close="emit('close')">
    <div class="w-[750px]">
      <div class="flex gap-2 items-center mb-10">
        <MarkerIcon is-active height="18" width="18" />
        <span class="font-bold text-base">Редагувати маркер</span>
      </div>
      <form>
        <div class="flex gap-5">
          <div class="w-5/12">
            <img
              class="w-full h-[276px] object-cover rounded-md"
              :src="formData.img || fallbackImage"
              alt="place img"
            />
          </div>

          <div class="w-7/12">
            <IInput label="Локація" v-model="formData.title" />
            <div class="mt-4">
              <IInput label="Опис" type="textarea" v-model="formData.description" />
            </div>
            <IButton class="mt-10 w-full" variant="gradient">Зберегти</IButton>
          </div>
        </div>

        <InputImage class="mt-3" @uploaded="handleChangeImg">
          <span class="text-xs">Натисніть тут, щоб додати інше фото</span>
        </InputImage>
      </form>
    </div>
  </IModal>
</template>

<style scoped></style>
