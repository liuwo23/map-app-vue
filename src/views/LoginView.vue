<template>
  <LoginForm @submit="handleLoginUser" :is-loading="isLoading" :error="!!error" />
  <p v-if="error" class="text-sm text-red-500 mt-2">出错了！请检查输入数据。</p>
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
