<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <IInput v-model="userData.name" class="mb-4" label="Повне імʼя" :error="error" />
    <IInput
      v-model="userData.email"
      class="mb-4"
      label="Електронна пошта"
      placeholder="test@gmail.com"
      :error="error"
    />
    <IInput v-model="userData.password" label="Пароль" type="password" :error="error" />
    <IButton :isLoading="props.isLoading" class="mt-10 w-full" variant="gradient" type="submit"
      >Створити аккаунт</IButton
    >
  </form>
</template>
<script setup lang="ts">
import IInput from '@/components/IInput/IInput.vue';
import IButton from '@/components/Button/IButton.vue';
import { reactive, toRaw } from 'vue';

const props = defineProps<{
  isLoading: boolean;
  error: boolean;
}>();
interface IRegister {
  name: string;
  email: string;
  password: string;
}
const emit = defineEmits(['submit']);
const userData: IRegister = reactive({
  name: '',
  email: '',
  password: ''
});
</script>

<style scoped></style>
