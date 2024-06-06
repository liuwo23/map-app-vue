<template>
  <RegistrationForm @submit="handleRegisterUser" :isLoading="isLoading" />
  <p v-if="error" class="text-sm text-red-500 mt-2">{{ error.message }}</p>
</template>

<script setup lang="ts">
import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue';
import { registerUser } from '../api/user/index';
import { useMutation } from '../composables/useMutation';

const { isLoading, error, mutation: handleRegisterUser } = useMutation(registerUser);
</script>

<style scoped></style>
