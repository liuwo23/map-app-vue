<script setup lang="ts">
import LogoutIcon from '@/components/icons/LogoutIcon.vue';
import { authService } from '../../api/authService';
import { useMutation } from '../../composables/useMutation';
import { useRouter } from 'vue-router';
import IButton from '@/components/Button/IButton.vue';

const router = useRouter();
const { mutation: logoutUser, isLoading } = useMutation({
  mutationFn: () => authService.logoutUser(),
  onSuccess: () => {
    router.replace('/auth/login');
  }
});
</script>

<template>
  <IButton
    :is-loading="isLoading"
    class="flex gap-2 items-center px-6 text-black"
    @click="logoutUser"
    >Вихід <LogoutIcon
  /></IButton>
</template>

<style scoped></style>
