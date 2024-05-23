<template>
<HomeView/>
  <RegistrationForm/>

  <CreateNewPlaceModal :isOpen="isOpen" @close="closeModal" @submit="console.log"/>

</template>
<script setup lang="ts">
import HomeView from '@/views/HomeView.vue'
import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue'
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue'

import {ref} from 'vue'
import CreateNewPlaceModal from '@/components/CreateNewPlaceModal/CreateNewPlaceModal.vue'

const isOpen = ref(true);
const openModal = () => {
  isOpen.value = true
}
const closeModal = () => {
  isOpen.value = false;
}
</script>
