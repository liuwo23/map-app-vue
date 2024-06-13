<template>
  <LoginForm @submit="handleLoginUser" :is-loading="isLoading" />
  <p v-if="error" class="text-sm text-red-500 mt-2">Щось пішло не так! перевірте введені дані.</p>
</template>

<script setup lang="ts">
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue';
import type { IUserLogin } from '../interfaces/IUser';
import { useMutation } from '../composables/useMutation';
import { useRouter } from 'vue-router';
import { authService } from '../api/authService';

const router = useRouter();

const {
  mutation: handleLoginUser,
  isLoading,
  error
} = useMutation({
  mutationFn: (data: IUserLogin) => authService.loginUser(data),
  onSuccess: () => router.replace('/map')
});
</script>

<style scoped></style>
