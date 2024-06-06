<template>
  <form @submit.prevent="emit('submit', toRaw(loginData))">
    <IInput
      class="mb-4"
      v-model="loginData.email"
      label="Електронна пошта"
      placeholder="test@gmail.com"
    />
    <IInput v-model="loginData.password" label="Пароль" type="password" placeholder="***********" />
    <IButton :isLoading="props.isLoading" class="mt-10 w-full" variant="gradient" type="submit"
      >Увійти</IButton
    >
  </form>
</template>
<script setup lang="ts">
import IInput from '@/components/IInput/IInput.vue';
interface ILogin {
  email: string;
  password: string;
}
import IButton from '@/components/Button/IButton.vue';
import { reactive, toRaw } from 'vue';
const props = defineProps<{
  isLoading: boolean;
}>();
const emit = defineEmits(['submit']);
const loginData: ILogin = reactive({
  email: '',
  password: ''
});
</script>
<style scoped></style>
