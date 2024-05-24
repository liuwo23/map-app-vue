<template>
  <FormContainer @submit.prevent="emit('submit', toRaw(userData))">
    <IInput v-model="userData.name" class="mb-4" label="Повне імʼя" />
    <IInput
      v-model="userData.email"
      class="mb-4"
      label="Електронна пошта"
      placeholder="test@gmail.com"
    />
    <IInput v-model="userData.password" label="Пароль" type="password" />
    <IButton class="mt-10 w-full" variant="gradient" type="submit">Створити аккаунт</IButton>
  </FormContainer>
</template>
<script setup lang="ts">
import FormContainer from '@/components/Auth/FormContainer.vue'
import IInput from '@/components/IInput/IInput.vue'
import IButton from '@/components/Button/IButton.vue'
import { reactive, toRaw } from 'vue'
interface IRegister {
  name: string
  email: string
  password: string
}
const emit = defineEmits(['submit'])
const userData: IRegister = reactive({
  name: '',
  email: '',
  password: ''
})
</script>

<style scoped></style>
