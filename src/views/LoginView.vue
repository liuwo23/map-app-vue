<template>
  <LoginForm @submit="handleLoginUser" :is-loading="isLoading" />
  <p v-if="error" class="text-sm text-red-500 mt-2">{{ error.message }}</p>
</template>

<script setup lang="ts">
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue';
import { loginUser } from '../api/user';
import { useMutation } from '../composables/useMutation';

const { isLoading, error, mutation: handleLoginUser } = useMutation(loginUser);
</script>

<style scoped></style>
