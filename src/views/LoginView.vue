<template>
  <LoginForm @submit="handleLoginUser" :is-loading="isLoading"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue';
import { loginUser } from '../api/user'
import type { IUserLogin } from '../interfaces/IUser'
import { useRouter } from 'vue-router';
const router = useRouter();
const isLoading = ref(false);
const handleLoginUser = async (userData: IUserLogin) => {
  isLoading.value = true;
  try {
    await loginUser(userData);
    await router.replace('/map');
  } catch (e) {
    console.log(e);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped></style>
