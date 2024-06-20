<script setup lang="ts">
import { onMounted } from 'vue';
import UserIcon from '@/components/icons/UserIcon.vue';
import { useMutation } from '../../composables/useMutation';
import { authService } from '../../api/authService';
import LoadingText from '@/components/LoadingText/LoadingText.vue';

const {
  data: userInfo,
  mutation: getUser,
  isLoading
} = useMutation({
  mutationFn: () => authService.getUserInfo()
});

onMounted(() => {
  getUser();
});
</script>

<template>
  <div
    class="flex sticky top-0 items-center text-black gap-3 bg-[#ffe6dc] border-solid border-b-2 border-primary rounded-bl-2xl rounded-br-2xl px-6 py-4 mb-3 lg:mb-10"
  >
    <div class="w-10 h-10 flex items-center justify-center rounded-full color-primary bg-primary">
      <UserIcon class="text-white" />
    </div>
    <span v-if="isLoading"><LoadingText text="Завантажуємо" /></span>
    <span v-if="userInfo && !isLoading" class="uppercase">{{ userInfo.data.name }}</span>
  </div>
</template>

<style scoped></style>
