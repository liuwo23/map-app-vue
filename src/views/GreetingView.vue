<template>
  <BaseLayout>
    <div class="text-center">
      <img class="inline mb-6" src="../assets/img/map-pin.svg" alt="" />
      <h1 class="font-bold text-4xl mb-7">IT traveler</h1>
      <p class="leading-6 mb-11 max-w-xl mx-auto">
        Простий і зручний веб додаток, який дозволить тобі відмічати твої улюблені місця, а також
        ті, в яких би ти дуже хотів побувати. Тож не зволікай і спробуй сам.
      </p>
      <IButton :to="'/auth/registration'" variant="primary">Почати роботу</IButton>
    </div>
  </BaseLayout>
</template>
<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue';
import IButton from '@/components/Button/IButton.vue';
</script>
