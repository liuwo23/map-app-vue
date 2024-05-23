<script setup lang="ts">
import IModal  from '../IModal/IModal.vue'
import MarkerIcon from '@/components/icons/MarkerIcon.vue'
import IInput from '@/components/IInput/IInput.vue'
import InputImage from '@/components/InputImage/InputImage.vue'
import IButton from '@/components/Button/IButton.vue'
import {reactive, computed} from 'vue'

defineProps({
  isOpen: {
    type:Boolean,
    default: false
  }
})
const emit = defineEmits(['close', 'submit']);
const formData = reactive({
  title: '',
  description: '',
  img:''
})
const handleUploaded = (url:string) => {
  formData.img = url;
}
const uploadText = computed(() => {
  return formData.img ? 'Натисніть тут, щоб змінити фото' : 'Натисніть тут, щоб додати фото'
})
</script>

<template>
    <IModal v-if="isOpen" @close="emit('close')">
     <form @submit.prevent="emit('submit', formData)" class="min-w-[420px] ">
       <div class="mb-10 font-bold text-center flex gap-1 items-center justify-center">
         <MarkerIcon/>
         Додати маркери
       </div>
       <IInput v-model="formData.title" class="mb-4" label="Локація"/>
       <IInput v-model="formData.description" class="mb-2"  label="Опис" type="textarea"/>
       <div class="mb-10 flex gap-2 items-center">
       <img class="block w-8 h-8 object-cover" v-if="formData.img" :src="formData.img" alt="avatar">
       <InputImage @uploaded="handleUploaded" >{{uploadText}}</InputImage>
       </div>
       <IButton variant="gradient" class="w-full" type="submit">Додати</IButton>
     </form>
    </IModal>
</template>

<style scoped>

</style>