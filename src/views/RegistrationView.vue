<template>
  <RegistrationForm @submit="handleRegisterUser" :isLoading="isLoading" />
  <p v-if="error" class="text-sm text-red-500 mt-2">Щось пішло не так! перевірте введені дані.</p>
</template>

<script setup lang="ts">
import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue';
import type { IUserRegister } from '../interfaces/IUser';
import { useMutation } from '../composables/useMutation';
import { useRouter } from 'vue-router';
import { authService } from '../api/authService';

const router = useRouter();
const {
  isLoading,
  error,
  mutation: handleRegisterUser
} = useMutation({
  mutationFn: (data: IUserRegister) => authService.registerUser(data),
  onSuccess: () => router.replace('/map')
});
</script>

<style scoped></style>
