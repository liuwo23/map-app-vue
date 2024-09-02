<template>
  <BaseLayout>
    <div class="text-center">
      <img class="inline mb-6" src="../assets/img/map-pin.svg" alt="" />
      <h1 class="font-bold text-4xl mb-7">IT traveler</h1>
      <p class="leading-6 mb-11 max-w-xl mx-auto">
        简单易用的网页应用程序，让你可以标记你喜欢的场所，以及你非常想去的地方。不要犹豫，现在就试试吧。
      </p>
      <IButton :to="'/auth/registration'" variant="primary">开始工作</IButton>
    </div>
  </BaseLayout>
</template>
<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue';
import IButton from '@/components/Button/IButton.vue';
</script>

<style></style>
