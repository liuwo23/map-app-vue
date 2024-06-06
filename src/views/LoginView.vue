<template>
  <LoginForm @submit="handleLoginUser" :is-loading="isLoading" />
  <p v-if="error" class="text-sm text-red-500 mt-2">{{ error.message }}</p>
</template>

<script setup lang="ts">
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue';
import { loginUser } from '../api/user';
import { useMutation } from '../composables/useMutation';
import { useRouter } from 'vue-router';

const router = useRouter();

const {
  isLoading,
  error,
  mutation: handleLoginUser
} = useMutation({
  mutationFn: loginUser,
  onSuccess: () => router.replace('/map')
});
</script>

<style scoped></style>
