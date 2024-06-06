<template>
  <RegistrationForm @submit="handleRegisterUser" :isLoading="isLoading" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue'
import { registerUser } from '../api/user/index'
import type { IUserRegister } from '../interfaces/IUser'
import { useRouter } from 'vue-router'
const router = useRouter()
const isLoading = ref(false)
const handleRegisterUser = async (userData: IUserRegister) => {
  try {
    isLoading.value = true;
    await registerUser(userData);
    await router.replace('/map');
  } catch (e) {
    console.log(e)
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped></style>
