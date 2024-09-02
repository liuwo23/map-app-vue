<template>
  <form @submit.prevent="emit('submit', toRaw(loginData))">
    <IInput
      class="mb-4"
      v-model="loginData.email"
      label="电子邮件"
      placeholder="test@gmail.com"
      :error="error"
      type="email"
    />
    <IInput
      v-model="loginData.password"
      label="密码"
      type="password"
      placeholder="***********"
      :error="error"
    />
    <IButton :isLoading="props.isLoading" class="mt-10 w-full" variant="gradient" type="submit"
      >登陆</IButton
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
  error: boolean;
}>();
const emit = defineEmits(['submit']);
const loginData: ILogin = reactive({
  email: '',
  password: ''
});
</script>
<style scoped></style>
