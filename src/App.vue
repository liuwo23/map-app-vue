<template>
<HomeView/>
 <RegistrationForm @submit="console.log"/>
  <LoginForm @submit="console.log"/>
  <IModal v-if="isOpen" @close="closeModal">Hello</IModal>
  <button type="button" @click="openModal">OpenModal</button>
</template>
<script setup lang="ts">
import HomeView from '@/views/HomeView.vue'
import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue'
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue'
import IModal from '@/components/IModal/IModal.vue'
import {ref} from 'vue'

const isOpen = ref(true);
const openModal = () => {
  isOpen.value = true
}
const closeModal = () => {
  isOpen.value = false;
}
</script>
